import type { Lang } from '../../i18n/types';
import { t } from '../../i18n/i18n';

type SchoolMealsProblemsProps = {
  lang: Lang;
};

export default function SchoolMealsProblems({ lang }: SchoolMealsProblemsProps) {
  const problems = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
        </svg>
      ),
      title: t('schoolmeals.problems.p1.title', lang),
      text: t('schoolmeals.problems.p1.text', lang),
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
          <path d="M18 8h1a4 4 0 010 8h-1M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z" />
          <path d="M6 1v3M10 1v3M14 1v3" />
        </svg>
      ),
      title: t('schoolmeals.problems.p2.title', lang),
      text: t('schoolmeals.problems.p2.text', lang),
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="M12 8v4M12 16h.01" />
        </svg>
      ),
      title: t('schoolmeals.problems.p3.title', lang),
      text: t('schoolmeals.problems.p3.text', lang),
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
          <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
        </svg>
      ),
      title: t('schoolmeals.problems.p4.title', lang),
      text: t('schoolmeals.problems.p4.text', lang),
    },
  ];

  return (
    <section className="benefits-section" aria-labelledby="schoolmeals-problems-title">
      <div className="container">
        <h2 id="schoolmeals-problems-title" className="section-title">
          {t('schoolmeals.problems.title', lang)}
        </h2>
        <p className="section-subtitle">{t('schoolmeals.problems.subtitle', lang)}</p>

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
