import { useEffect, useState, type FormEvent } from 'react';
import type { ConsultLang } from '../../constants/consult-languages';
import type { AiScoreDimensionId } from '../../constants/ai-score-questions';
import {
  formatAiScoreLocale,
  getAiScoreLocale,
} from '../../i18n/ai-score-locales';
import {
  buildScoreContactMessage,
  type AiScoreBand,
  type AiScoreResult,
} from '../../utils/ai-score';

type AiScoreResultsProps = {
  assessmentLang: ConsultLang;
  result: AiScoreResult;
  onRetake: () => void;
  onRequestSolution: (message: string) => void;
};

type EmailStatus = 'idle' | 'submitting' | 'success' | 'error';

const EMAIL_PATTERN =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z]{2,})+$/;

function TrafficLight({ band }: { band: AiScoreBand }) {
  return (
    <div className={`ai-score-light ai-score-light--${band}`} aria-hidden="true">
      <span className="ai-score-light__lamp ai-score-light__lamp--red" />
      <span className="ai-score-light__lamp ai-score-light__lamp--amber" />
      <span className="ai-score-light__lamp ai-score-light__lamp--green" />
    </div>
  );
}

function buildResultsSummary(
  locale: ReturnType<typeof getAiScoreLocale>,
  result: AiScoreResult,
): string {
  const gapLines = result.weakest.map((id) => {
    const dim = result.dimensions.find((d) => d.id === id)!;
    return formatAiScoreLocale(locale.contactGapLine, {
      name: locale.dim[id],
      score: dim.score100,
    });
  });

  const summary = buildScoreContactMessage({
    intro: locale.contactIntro,
    scoreLine: formatAiScoreLocale(locale.contactScoreLine, { score: result.score100 }),
    bandLine: formatAiScoreLocale(locale.contactBandLine, {
      band: locale.band[result.band].label,
    }),
    gapsIntro: locale.contactGapsIntro,
    gapLines,
  });

  const recLines = result.weakest
    .map((id) => `- ${locale.dim[id]}: ${locale.rec[id]}`)
    .join('\n');

  return `${summary}\n\n${locale.emailRecsIntro}\n${recLines}`;
}

export default function AiScoreResults({
  assessmentLang,
  result,
  onRetake,
  onRequestSolution,
}: AiScoreResultsProps) {
  const locale = getAiScoreLocale(assessmentLang);
  const [displayScore, setDisplayScore] = useState(0);
  const [showEmailForm, setShowEmailForm] = useState(false);
  const [emailName, setEmailName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [emailStatus, setEmailStatus] = useState<EmailStatus>('idle');
  const [emailError, setEmailError] = useState('');
  const [fieldErrors, setFieldErrors] = useState<{ name?: string; email?: string }>({});

  useEffect(() => {
    setDisplayScore(0);
    const target = result.score100;
    const duration = 900;
    const start = performance.now();
    let frame = 0;

    function tick(now: number) {
      const elapsed = now - start;
      const p = Math.min(elapsed / duration, 1);
      const eased = 1 - (1 - p) ** 3;
      setDisplayScore(Math.round(target * eased));
      if (p < 1) {
        frame = requestAnimationFrame(tick);
      }
    }

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [result.score100]);

  useEffect(() => {
    const el = document.getElementById('ai-score-results');
    if (!el) return;
    el.dir = assessmentLang === 'he' ? 'rtl' : 'ltr';
  }, [assessmentLang]);

  function handleRequest() {
    onRequestSolution(buildResultsSummary(locale, result));
  }

  async function handleEmailSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const errors: { name?: string; email?: string } = {};
    const name = emailName.trim();
    const email = emailAddress.trim();

    if (!name || name.length < 2) {
      errors.name = locale.emailNameRequired;
    }
    if (!email || !EMAIL_PATTERN.test(email)) {
      errors.email = locale.emailInvalid;
    }

    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      return;
    }

    setFieldErrors({});
    setEmailStatus('submitting');
    setEmailError('');

    try {
      const formData = new FormData(e.currentTarget);
      const botcheck = formData.get('botcheck');
      if (typeof botcheck === 'string' && botcheck.trim()) {
        setEmailStatus('success');
        return;
      }

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          phone: '',
          message: buildResultsSummary(locale, result),
          botcheck,
          sourcePage: window.location.pathname,
          lang: assessmentLang === 'el' ? 'el' : 'en',
          inquiryType: 'ai-score-results',
        }),
      });

      const data = (await response.json().catch(() => ({}))) as {
        success?: boolean;
      };

      if (response.ok && data.success) {
        setEmailStatus('success');
        return;
      }

      setEmailStatus('error');
      setEmailError(locale.emailError);
    } catch {
      setEmailStatus('error');
      setEmailError(locale.emailError);
    }
  }

  return (
    <section
      id="ai-score-results"
      className="ai-score-results"
      aria-labelledby="ai-score-results-title"
    >
      <div className="container ai-score-results__inner">
        <h2 id="ai-score-results-title" className="section-title">
          {locale.resultsTitle}
        </h2>
        <p className="section-subtitle">{locale.resultsSubtitle}</p>

        <div className={`ai-score-summary ai-score-summary--${result.band}`}>
          <TrafficLight band={result.band} />
          <div className="ai-score-summary__score-wrap">
            <p className="ai-score-summary__score" aria-live="polite">
              <span className="ai-score-summary__number">{displayScore}</span>
              <span className="ai-score-summary__max">/100</span>
            </p>
            <p className="ai-score-summary__band">{locale.band[result.band].label}</p>
            <p className="ai-score-summary__desc">{locale.band[result.band].desc}</p>
          </div>
        </div>

        <div className="ai-score-dims">
          <h3 className="ai-score-dims__title">{locale.dimensionsTitle}</h3>
          <ul className="ai-score-dims__list">
            {result.dimensions.map((dim) => (
              <li key={dim.id} className="ai-score-dim">
                <div className="ai-score-dim__header">
                  <span className="ai-score-dim__name">{locale.dim[dim.id]}</span>
                  <span className="ai-score-dim__value">{dim.score100}</span>
                </div>
                <div
                  className="ai-score-dim__track"
                  role="meter"
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-valuenow={dim.score100}
                  aria-label={locale.dim[dim.id]}
                >
                  <div
                    className="ai-score-dim__fill"
                    style={{ width: `${dim.score100}%` }}
                    data-band={result.band}
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="ai-score-gaps">
          <h3 className="ai-score-gaps__title">{locale.gapsTitle}</h3>
          <ul className="ai-score-gaps__list">
            {result.weakest.map((id: AiScoreDimensionId) => (
              <li key={id} className="ai-score-gap">
                <strong className="ai-score-gap__name">{locale.dim[id]}</strong>
                <p className="ai-score-gap__text">{locale.rec[id]}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="ai-score-results__actions">
          <button type="button" className="btn btn-primary" onClick={handleRequest}>
            {locale.ctaRequest}
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => setShowEmailForm((open) => !open)}
            aria-expanded={showEmailForm}
            aria-controls="ai-score-email-form"
          >
            {locale.ctaEmailResults}
          </button>
          <button type="button" className="btn btn-secondary" onClick={onRetake}>
            {locale.ctaRetake}
          </button>
        </div>

        {showEmailForm ? (
          <form
            id="ai-score-email-form"
            className="ai-score-email"
            onSubmit={handleEmailSubmit}
            noValidate
          >
            <h3 className="ai-score-email__title">{locale.emailFormTitle}</h3>
            <p className="ai-score-email__subtitle">{locale.emailFormSubtitle}</p>

            <input
              type="text"
              name="botcheck"
              className="ai-score-email__honeypot"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
            />

            <div className="form-group">
              <label htmlFor="ai-score-email-name">{locale.emailName}</label>
              <input
                id="ai-score-email-name"
                type="text"
                value={emailName}
                onChange={(e) => {
                  setEmailName(e.target.value);
                  if (fieldErrors.name) setFieldErrors((prev) => ({ ...prev, name: undefined }));
                }}
                className={fieldErrors.name ? 'error' : ''}
                autoComplete="name"
                disabled={emailStatus === 'submitting' || emailStatus === 'success'}
              />
              {fieldErrors.name ? <span className="form-error">{fieldErrors.name}</span> : null}
            </div>

            <div className="form-group">
              <label htmlFor="ai-score-email-address">{locale.emailAddress}</label>
              <input
                id="ai-score-email-address"
                type="email"
                value={emailAddress}
                onChange={(e) => {
                  setEmailAddress(e.target.value);
                  if (fieldErrors.email) setFieldErrors((prev) => ({ ...prev, email: undefined }));
                }}
                className={fieldErrors.email ? 'error' : ''}
                autoComplete="email"
                disabled={emailStatus === 'submitting' || emailStatus === 'success'}
              />
              {fieldErrors.email ? <span className="form-error">{fieldErrors.email}</span> : null}
            </div>

            {emailStatus === 'success' ? (
              <p className="form-status form-status--success" role="status">
                {locale.emailSuccess}
              </p>
            ) : null}

            {emailStatus === 'error' && emailError ? (
              <p className="form-status form-status--error" role="alert">
                {emailError}
              </p>
            ) : null}

            {emailStatus !== 'success' ? (
              <button
                type="submit"
                className="btn btn-primary"
                disabled={emailStatus === 'submitting'}
              >
                {emailStatus === 'submitting' ? locale.emailSubmitting : locale.emailSubmit}
              </button>
            ) : null}
          </form>
        ) : null}
      </div>
    </section>
  );
}
