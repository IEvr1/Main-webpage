import type { Lang } from '../../i18n/types';
import { t } from '../../i18n/i18n';

type AiPromiseProps = {
  lang: Lang;
};

const STEPS = [
  { num: '1', titleKey: 'ai.promise.s1.title', textKey: 'ai.promise.s1.text' },
  { num: '2', titleKey: 'ai.promise.s2.title', textKey: 'ai.promise.s2.text' },
  { num: '3', titleKey: 'ai.promise.s3.title', textKey: 'ai.promise.s3.text' },
] as const;

export default function AiPromise({ lang }: AiPromiseProps) {
  return (
    <section id="how-it-works" className="ai-promise" aria-labelledby="ai-promise-title">
      <div className="container">
        <div className="ai-promise__header">
          <span className="ai-promise__pill">{t('ai.promise.pill', lang)}</span>
          <h2 id="ai-promise-title" className="section-title ai-section-title ai-section-title--light">
            {t('ai.promise.title', lang)}
          </h2>
          <p className="section-subtitle ai-promise__subtitle">{t('ai.promise.subtitle', lang)}</p>
        </div>

        <div className="ai-promise__steps">
          {STEPS.map((step) => (
            <article key={step.num} className="ai-promise__step">
              <span className="ai-promise__step-num" aria-hidden="true">{step.num}</span>
              <h3 className="ai-promise__step-title">{t(step.titleKey, lang)}</h3>
              <p className="ai-promise__step-text">{t(step.textKey, lang)}</p>
            </article>
          ))}
        </div>

        <div className="ai-promise__deliverables">
          <div className="ai-promise__deliverable">
            <span className="ai-promise__deliverable-label">{t('ai.promise.deliverable1.label', lang)}</span>
            <p className="ai-promise__deliverable-text">{t('ai.promise.deliverable1.text', lang)}</p>
          </div>
          <div className="ai-promise__deliverable">
            <span className="ai-promise__deliverable-label">{t('ai.promise.deliverable2.label', lang)}</span>
            <p className="ai-promise__deliverable-text">{t('ai.promise.deliverable2.text', lang)}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
