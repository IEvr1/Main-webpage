import type { Lang } from '../i18n/types';
import { t } from '../i18n/i18n';

type BenefitsProps = {
  lang: Lang;
};

export default function Benefits({ lang }: BenefitsProps) {
  const benefits = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
          <path d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
      title: t('booking.benefits.b1.title', lang),
      text: t('booking.benefits.b1.text', lang),
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
          <path d="M8 4h8l1 4H7l1-4zM7 8h10v10a2 2 0 01-2 2H9a2 2 0 01-2-2V8z" />
          <path d="M12 12v4M10 14h4" />
        </svg>
      ),
      title: t('booking.benefits.b2.title', lang),
      text: t('booking.benefits.b2.text', lang),
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M3 9h18M9 21V9" />
          <path d="M13 13h4M13 17h4" />
        </svg>
      ),
      title: t('booking.benefits.b3.title', lang),
      text: t('booking.benefits.b3.text', lang),
    },
  ];

  return (
    <section className="benefits-section" aria-labelledby="benefits-title">
      <div className="container">
        <h2 id="benefits-title" className="section-title">
          {t('booking.benefits.title', lang)}
        </h2>
        <p className="section-subtitle">{t('booking.benefits.subtitle', lang)}</p>

        <div className="benefits-grid">
          {benefits.map((benefit) => (
            <article key={benefit.title} className="benefit-card">
              <div className="benefit-card__icon">{benefit.icon}</div>
              <h3 className="benefit-card__title">{benefit.title}</h3>
              <p className="benefit-card__text">{benefit.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
