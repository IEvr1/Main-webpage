import type { Lang } from '../../i18n/types';
import { t } from '../../i18n/i18n';

type DocsAppRequirementsProps = {
  lang: Lang;
};

export default function DocsAppRequirements({ lang }: DocsAppRequirementsProps) {
  const requirements = [
    t('docsapp.requirements.r1', lang),
    t('docsapp.requirements.r2', lang),
    t('docsapp.requirements.r3', lang),
    t('docsapp.requirements.r4', lang),
  ];

  const setupSteps = [
    t('docsapp.requirements.s1', lang),
    t('docsapp.requirements.s2', lang),
    t('docsapp.requirements.s3', lang),
    t('docsapp.requirements.s4', lang),
    t('docsapp.requirements.s5', lang),
  ];

  return (
    <section id="requirements" className="benefits-section" aria-labelledby="docsapp-requirements-title">
      <div className="container">
        <h2 id="docsapp-requirements-title" className="section-title">
          {t('docsapp.requirements.title', lang)}
        </h2>
        <p className="section-subtitle">{t('docsapp.requirements.subtitle', lang)}</p>

        <div className="benefits-grid">
          <article className="benefit-card">
            <h3 className="benefit-card__title">{t('docsapp.requirements.requirementsTitle', lang)}</h3>
            <ul className="benefit-card__text">
              {requirements.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
          <article className="benefit-card">
            <h3 className="benefit-card__title">{t('docsapp.requirements.setupTitle', lang)}</h3>
            <ol className="benefit-card__text">
              {setupSteps.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ol>
          </article>
        </div>
      </div>
    </section>
  );
}
