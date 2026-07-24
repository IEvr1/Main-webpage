import type { Lang } from '../../i18n/types';
import { t } from '../../i18n/i18n';

type SchoolMealsFeaturesProps = {
  lang: Lang;
};

export default function SchoolMealsFeatures({ lang }: SchoolMealsFeaturesProps) {
  const features = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
          <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" />
          <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" />
        </svg>
      ),
      title: t('schoolmeals.features.f1.title', lang),
      text: t('schoolmeals.features.f1.text', lang),
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
          <circle cx="12" cy="12" r="10" />
          <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
        </svg>
      ),
      title: t('schoolmeals.features.f2.title', lang),
      text: t('schoolmeals.features.f2.text', lang),
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
      title: t('schoolmeals.features.f3.title', lang),
      text: t('schoolmeals.features.f3.text', lang),
    },
  ];

  return (
    <section className="benefits-section" aria-labelledby="schoolmeals-features-title">
      <div className="container">
        <h2 id="schoolmeals-features-title" className="section-title">
          {t('schoolmeals.features.title', lang)}
        </h2>
        <p className="section-subtitle">{t('schoolmeals.features.subtitle', lang)}</p>

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
