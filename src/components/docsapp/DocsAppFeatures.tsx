import type { Lang } from '../../i18n/types';
import { t } from '../../i18n/i18n';

type DocsAppFeaturesProps = {
  lang: Lang;
};

export default function DocsAppFeatures({ lang }: DocsAppFeaturesProps) {
  const features = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
          <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M17 8l-5-5-5 5M12 3v12" />
        </svg>
      ),
      title: t('docsapp.features.f1.title', lang),
      text: t('docsapp.features.f1.text', lang),
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
          <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
        </svg>
      ),
      title: t('docsapp.features.f2.title', lang),
      text: t('docsapp.features.f2.text', lang),
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
          <rect x="2" y="3" width="20" height="14" rx="2" />
          <path d="M8 21h8M12 17v4" />
        </svg>
      ),
      title: t('docsapp.features.f3.title', lang),
      text: t('docsapp.features.f3.text', lang),
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
          <path d="M4 19.5A2.5 2.5 0 016.5 17H20" />
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" />
        </svg>
      ),
      title: t('docsapp.features.f4.title', lang),
      text: t('docsapp.features.f4.text', lang),
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
          <path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z" />
        </svg>
      ),
      title: t('docsapp.features.f5.title', lang),
      text: t('docsapp.features.f5.text', lang),
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 6v6l4 2" />
        </svg>
      ),
      title: t('docsapp.features.f6.title', lang),
      text: t('docsapp.features.f6.text', lang),
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
          <path d="M3 3v18h18" />
          <path d="M7 16l4-6 4 3 5-7" />
        </svg>
      ),
      title: t('docsapp.features.f7.title', lang),
      text: t('docsapp.features.f7.text', lang),
    },
  ];

  return (
    <section className="benefits-section" aria-labelledby="docsapp-features-title">
      <div className="container">
        <h2 id="docsapp-features-title" className="section-title">
          {t('docsapp.features.title', lang)}
        </h2>
        <p className="section-subtitle">{t('docsapp.features.subtitle', lang)}</p>

        <div className="benefits-grid">
          {features.map((feature) => (
            <article key={feature.title} className="benefit-card">
              <div className="benefit-card__icon">{feature.icon}</div>
              <h3 className="benefit-card__title">{feature.title}</h3>
              <p className="benefit-card__text">{feature.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
