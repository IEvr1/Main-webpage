import { useEffect, useState } from 'react';
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

function TrafficLight({ band }: { band: AiScoreBand }) {
  return (
    <div className={`ai-score-light ai-score-light--${band}`} aria-hidden="true">
      <span className="ai-score-light__lamp ai-score-light__lamp--red" />
      <span className="ai-score-light__lamp ai-score-light__lamp--amber" />
      <span className="ai-score-light__lamp ai-score-light__lamp--green" />
    </div>
  );
}

export default function AiScoreResults({
  assessmentLang,
  result,
  onRetake,
  onRequestSolution,
}: AiScoreResultsProps) {
  const locale = getAiScoreLocale(assessmentLang);
  const [displayScore, setDisplayScore] = useState(0);

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
    const gapLines = result.weakest.map((id) => {
      const dim = result.dimensions.find((d) => d.id === id)!;
      return formatAiScoreLocale(locale.contactGapLine, {
        name: locale.dim[id],
        score: dim.score100,
      });
    });

    const message = buildScoreContactMessage({
      intro: locale.contactIntro,
      scoreLine: formatAiScoreLocale(locale.contactScoreLine, { score: result.score100 }),
      bandLine: formatAiScoreLocale(locale.contactBandLine, {
        band: locale.band[result.band].label,
      }),
      gapsIntro: locale.contactGapsIntro,
      gapLines,
    });

    onRequestSolution(message);
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
          <a href="/ai/" className="btn btn-secondary">
            {locale.ctaCustom}
          </a>
          <button type="button" className="btn btn-secondary" onClick={onRetake}>
            {locale.ctaRetake}
          </button>
        </div>
      </div>
    </section>
  );
}
