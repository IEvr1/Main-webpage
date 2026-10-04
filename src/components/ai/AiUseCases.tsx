import type { Lang } from '../../i18n/types';
import { t } from '../../i18n/i18n';

type AiUseCasesProps = {
  lang: Lang;
};

const USE_CASES = [
  { titleKey: 'ai.useCases.u1.title', textKey: 'ai.useCases.u1.text' },
  { titleKey: 'ai.useCases.u2.title', textKey: 'ai.useCases.u2.text' },
  { titleKey: 'ai.useCases.u3.title', textKey: 'ai.useCases.u3.text' },
  { titleKey: 'ai.useCases.u4.title', textKey: 'ai.useCases.u4.text' },
  { titleKey: 'ai.useCases.u5.title', textKey: 'ai.useCases.u5.text' },
  { titleKey: 'ai.useCases.u6.title', textKey: 'ai.useCases.u6.text' },
] as const;

export default function AiUseCases({ lang }: AiUseCasesProps) {
  return (
    <section className="ai-use-cases" aria-labelledby="ai-use-cases-title">
      <div className="container">
        <h2 id="ai-use-cases-title" className="section-title ai-section-title">
          {t('ai.useCases.title', lang)}
        </h2>
        <p className="section-subtitle">{t('ai.useCases.subtitle', lang)}</p>

        <div className="ai-use-cases__grid">
          {USE_CASES.map((item) => (
            <article key={item.titleKey} className="ai-use-cases__card">
              <h3 className="ai-use-cases__card-title">{t(item.titleKey, lang)}</h3>
              <p className="ai-use-cases__card-text">{t(item.textKey, lang)}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
