import { useEffect, useState } from 'react';
import type { Lang } from '../../i18n/types';
import { t } from '../../i18n/i18n';
import type { AiScoreDimensionId } from '../../constants/ai-score-questions';
import {
  buildScoreContactMessage,
  type AiScoreBand,
  type AiScoreResult,
} from '../../utils/ai-score';

type AiScoreResultsProps = {
  lang: Lang;
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
  lang,
  result,
  onRetake,
  onRequestSolution,
}: AiScoreResultsProps) {
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

  function handleRequest() {
    const gapLines = result.weakest.map((id) => {
      const dim = result.dimensions.find((d) => d.id === id)!;
      return t('aiscore.contact.gapLine', lang, {
        name: t(`aiscore.dim.${id}`, lang),
        score: dim.score100,
      });
    });

    const message = buildScoreContactMessage({
      intro: t('aiscore.contact.intro', lang),
      scoreLine: t('aiscore.contact.scoreLine', lang, { score: result.score100 }),
      bandLine: t('aiscore.contact.bandLine', lang, {
        band: t(`aiscore.band.${result.band}.label`, lang),
      }),
      gapsIntro: t('aiscore.contact.gapsIntro', lang),
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
          {t('aiscore.results.title', lang)}
        </h2>
        <p className="section-subtitle">{t('aiscore.results.subtitle', lang)}</p>

        <div className={`ai-score-summary ai-score-summary--${result.band}`}>
          <TrafficLight band={result.band} />
          <div className="ai-score-summary__score-wrap">
            <p className="ai-score-summary__score" aria-live="polite">
              <span className="ai-score-summary__number">{displayScore}</span>
              <span className="ai-score-summary__max">/100</span>
            </p>
            <p className="ai-score-summary__band">{t(`aiscore.band.${result.band}.label`, lang)}</p>
            <p className="ai-score-summary__desc">{t(`aiscore.band.${result.band}.desc`, lang)}</p>
          </div>
        </div>

        <div className="ai-score-dims">
          <h3 className="ai-score-dims__title">{t('aiscore.results.dimensionsTitle', lang)}</h3>
          <ul className="ai-score-dims__list">
            {result.dimensions.map((dim) => (
              <li key={dim.id} className="ai-score-dim">
                <div className="ai-score-dim__header">
                  <span className="ai-score-dim__name">{t(`aiscore.dim.${dim.id}`, lang)}</span>
                  <span className="ai-score-dim__value">{dim.score100}</span>
                </div>
                <div
                  className="ai-score-dim__track"
                  role="meter"
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-valuenow={dim.score100}
                  aria-label={t(`aiscore.dim.${dim.id}`, lang)}
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
          <h3 className="ai-score-gaps__title">{t('aiscore.results.gapsTitle', lang)}</h3>
          <ul className="ai-score-gaps__list">
            {result.weakest.map((id: AiScoreDimensionId) => (
              <li key={id} className="ai-score-gap">
                <strong className="ai-score-gap__name">{t(`aiscore.dim.${id}`, lang)}</strong>
                <p className="ai-score-gap__text">{t(`aiscore.rec.${id}`, lang)}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="ai-score-results__actions">
          <button type="button" className="btn btn-primary" onClick={handleRequest}>
            {t('aiscore.results.ctaRequest', lang)}
          </button>
          <a href="/ai/" className="btn btn-secondary">
            {t('aiscore.results.ctaCustom', lang)}
          </a>
          <button type="button" className="btn btn-secondary" onClick={onRetake}>
            {t('aiscore.results.ctaRetake', lang)}
          </button>
        </div>
      </div>
    </section>
  );
}
