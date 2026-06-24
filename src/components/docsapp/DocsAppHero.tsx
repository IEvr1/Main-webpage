import type { Lang } from '../../i18n/types';
import { t } from '../../i18n/i18n';

type DocsAppHeroProps = {
  lang: Lang;
};

export default function DocsAppHero({ lang }: DocsAppHeroProps) {
  return (
    <section className="hero">
      <div className="container hero__content">
        <h1 className="hero__title">{t('docsapp.hero.title', lang)}</h1>
        <p className="hero__subtitle">{t('docsapp.hero.subtitle', lang)}</p>
        <div className="hero__actions">
          <a href="#requirements" className="btn btn-primary">
            {t('docsapp.hero.ctaRequirements', lang)}
          </a>
          <a href="#contact" className="btn btn-secondary">
            {t('docsapp.hero.ctaContact', lang)}
          </a>
        </div>
      </div>
    </section>
  );
}
