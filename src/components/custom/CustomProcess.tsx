import type { Lang } from '../../i18n/types';
import { t } from '../../i18n/i18n';

type CustomProcessProps = {
  lang: Lang;
};

export default function CustomProcess({ lang }: CustomProcessProps) {
  const steps = [
    { title: t('custom.process.s1.title', lang), text: t('custom.process.s1.text', lang) },
    { title: t('custom.process.s2.title', lang), text: t('custom.process.s2.text', lang) },
    { title: t('custom.process.s3.title', lang), text: t('custom.process.s3.text', lang) },
  ];

  return (
    <section className="benefits-section" aria-labelledby="custom-process-title">
      <div className="container">
        <h2 id="custom-process-title" className="section-title">
          {t('custom.process.title', lang)}
        </h2>
        <p className="section-subtitle">{t('custom.process.subtitle', lang)}</p>

        <div className="benefits-grid">
          {steps.map((step) => (
            <article key={step.title} className="benefit-card">
              <h3 className="benefit-card__title">{step.title}</h3>
              <p className="benefit-card__text">{step.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
