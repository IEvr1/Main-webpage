import type { Lang } from '../../i18n/types';
import { t } from '../../i18n/i18n';

type SchoolMealsBenefitsProps = {
  lang: Lang;
};

export default function SchoolMealsBenefits({ lang }: SchoolMealsBenefitsProps) {
  const offerings = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
          <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      ),
      title: t('schoolmeals.offerings.o1.title', lang),
      text: t('schoolmeals.offerings.o1.text', lang),
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M3 9h18M9 21V9" />
          <path d="M13 13h4M13 17h4" />
        </svg>
      ),
      title: t('schoolmeals.offerings.o2.title', lang),
      text: t('schoolmeals.offerings.o2.text', lang),
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
          <path d="M18 8h1a4 4 0 010 8h-1M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z" />
          <path d="M6 1v3M10 1v3M14 1v3" />
        </svg>
      ),
      title: t('schoolmeals.offerings.o3.title', lang),
      text: t('schoolmeals.offerings.o3.text', lang),
    },
  ];

  return (
    <section className="benefits-section" aria-labelledby="schoolmeals-offerings-title">
      <div className="container">
        <h2 id="schoolmeals-offerings-title" className="section-title">
          {t('schoolmeals.offerings.title', lang)}
        </h2>
        <p className="section-subtitle">{t('schoolmeals.offerings.subtitle', lang)}</p>

        <div className="benefits-grid">
          {offerings.map((offering) => (
            <article key={offering.title} className="benefit-card">
              <div className="benefit-card__icon">{offering.icon}</div>
              <h3 className="benefit-card__title">{offering.title}</h3>
              <p className="benefit-card__text">{offering.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
