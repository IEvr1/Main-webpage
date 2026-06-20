import type { Lang } from '../../i18n/types';
import { t } from '../../i18n/i18n';

type CustomExamplesProps = {
  lang: Lang;
};

export default function CustomExamples({ lang }: CustomExamplesProps) {
  const examples = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M3 9h18M9 21V9" />
          <path d="M13 13h4M13 17h4" />
        </svg>
      ),
      title: t('custom.examples.e1.title', lang),
      text: t('custom.examples.e1.text', lang),
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
        </svg>
      ),
      title: t('custom.examples.e2.title', lang),
      text: t('custom.examples.e2.text', lang),
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
          <path d="M12 2a10 10 0 100 20 10 10 0 000-20z" />
          <path d="M12 6v6l4 2" />
        </svg>
      ),
      title: t('custom.examples.e3.title', lang),
      text: t('custom.examples.e3.text', lang),
    },
  ];

  return (
    <section className="screenshots-section" aria-labelledby="custom-examples-title">
      <div className="container">
        <h2 id="custom-examples-title" className="section-title">
          {t('custom.examples.title', lang)}
        </h2>
        <p className="section-subtitle">{t('custom.examples.subtitle', lang)}</p>

        <div className="benefits-grid">
          {examples.map((example) => (
            <article key={example.title} className="benefit-card">
              <div className="benefit-card__icon">{example.icon}</div>
              <h3 className="benefit-card__title">{example.title}</h3>
              <p className="benefit-card__text">{example.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
