import type { Lang } from '../../i18n/types';
import { t } from '../../i18n/i18n';

type ShopTrafficFeaturesProps = {
  lang: Lang;
};

export default function ShopTrafficFeatures({ lang }: ShopTrafficFeaturesProps) {
  const features = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
        </svg>
      ),
      title: t('waitless.features.f1.title', lang),
      text: t('waitless.features.f1.text', lang),
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
          <rect x="5" y="2" width="14" height="20" rx="2" />
          <path d="M12 18h.01" />
        </svg>
      ),
      title: t('waitless.features.f2.title', lang),
      text: t('waitless.features.f2.text', lang),
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
          <circle cx="12" cy="12" r="10" />
          <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
        </svg>
      ),
      title: t('waitless.features.f3.title', lang),
      text: t('waitless.features.f3.text', lang),
    },
  ];

  return (
    <section className="benefits-section" aria-labelledby="shoptraffic-features-title">
      <div className="container">
        <h2 id="shoptraffic-features-title" className="section-title">
          {t('waitless.features.title', lang)}
        </h2>
        <p className="section-subtitle">{t('waitless.features.subtitle', lang)}</p>

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
