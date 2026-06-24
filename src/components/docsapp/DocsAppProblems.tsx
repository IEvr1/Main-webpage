import type { Lang } from '../../i18n/types';
import { t } from '../../i18n/i18n';

type DocsAppProblemsProps = {
  lang: Lang;
};

export default function DocsAppProblems({ lang }: DocsAppProblemsProps) {
  const problems = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
      title: t('docsapp.problems.p1.title', lang),
      text: t('docsapp.problems.p1.text', lang),
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
          <circle cx="11" cy="11" r="8" />
          <path d="M21 21l-4.35-4.35" />
        </svg>
      ),
      title: t('docsapp.problems.p2.title', lang),
      text: t('docsapp.problems.p2.text', lang),
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
          <path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z" />
        </svg>
      ),
      title: t('docsapp.problems.p3.title', lang),
      text: t('docsapp.problems.p3.text', lang),
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
          <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z" />
          <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
        </svg>
      ),
      title: t('docsapp.problems.p4.title', lang),
      text: t('docsapp.problems.p4.text', lang),
    },
  ];

  return (
    <section className="benefits-section" aria-labelledby="docsapp-problems-title">
      <div className="container">
        <h2 id="docsapp-problems-title" className="section-title">
          {t('docsapp.problems.title', lang)}
        </h2>
        <p className="section-subtitle">{t('docsapp.problems.subtitle', lang)}</p>

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
