import type { Lang } from '../../i18n/types';
import { t } from '../../i18n/i18n';

type FoodOrderBenefitsProps = {
  lang: Lang;
};

export default function FoodOrderBenefits({ lang }: FoodOrderBenefitsProps) {
  const offerings = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
          <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      ),
      title: t('foodorder.offerings.o1.title', lang),
      text: t('foodorder.offerings.o1.text', lang),
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M3 9h18M9 21V9" />
          <path d="M13 13h4M13 17h4" />
        </svg>
      ),
      title: t('foodorder.offerings.o2.title', lang),
      text: t('foodorder.offerings.o2.text', lang),
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
          <rect x="1" y="3" width="15" height="13" rx="2" />
          <path d="M16 8h4l3 3v5a2 2 0 01-2 2h-1" />
          <circle cx="5.5" cy="18.5" r="2.5" />
          <circle cx="18.5" cy="18.5" r="2.5" />
        </svg>
      ),
      title: t('foodorder.offerings.o3.title', lang),
      text: t('foodorder.offerings.o3.text', lang),
    },
  ];

  return (
    <section className="benefits-section" aria-labelledby="foodorder-offerings-title">
      <div className="container">
        <h2 id="foodorder-offerings-title" className="section-title">
          {t('foodorder.offerings.title', lang)}
        </h2>
        <p className="section-subtitle">{t('foodorder.offerings.subtitle', lang)}</p>

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
