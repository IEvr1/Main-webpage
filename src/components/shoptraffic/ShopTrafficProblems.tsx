import type { Lang } from '../../i18n/types';
import { t } from '../../i18n/i18n';

type ShopTrafficProblemsProps = {
  lang: Lang;
};

export default function ShopTrafficProblems({ lang }: ShopTrafficProblemsProps) {
  const problems = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 6v6l4 2" />
        </svg>
      ),
      title: t('waitless.problems.p1.title', lang),
      text: t('waitless.problems.p1.text', lang),
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
        </svg>
      ),
      title: t('waitless.problems.p2.title', lang),
      text: t('waitless.problems.p2.text', lang),
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
          <rect x="3" y="4" width="18" height="18" rx="2" />
          <path d="M16 2v4M8 2v4M3 10h18" />
        </svg>
      ),
      title: t('waitless.problems.p3.title', lang),
      text: t('waitless.problems.p3.text', lang),
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
          <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
        </svg>
      ),
      title: t('waitless.problems.p4.title', lang),
      text: t('waitless.problems.p4.text', lang),
    },
  ];

  return (
    <section className="benefits-section" aria-labelledby="shoptraffic-problems-title">
      <div className="container">
        <h2 id="shoptraffic-problems-title" className="section-title">
          {t('waitless.problems.title', lang)}
        </h2>
        <p className="section-subtitle">{t('waitless.problems.subtitle', lang)}</p>

        <div className="benefits-grid">
          {problems.map((problem) => (
            <article key={problem.title} className="benefit-card">
              <div className="benefit-card__icon">{problem.icon}</div>
              <h3 className="benefit-card__title">{problem.title}</h3>
              <p className="benefit-card__text">{problem.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
