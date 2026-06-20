import type { Lang } from '../../i18n/types';
import { t } from '../../i18n/i18n';

type CustomHeroProps = {
  lang: Lang;
};

export default function CustomHero({ lang }: CustomHeroProps) {
  return (
    <section className="hero">
      <div className="container hero__content">
        <h1 className="hero__title">{t('custom.hero.title', lang)}</h1>
        <p className="hero__subtitle">{t('custom.hero.subtitle', lang)}</p>
        <div className="hero__actions">
          <a href="#contact" className="btn btn-primary">
            {t('custom.hero.ctaContact', lang)}
          </a>
        </div>
      </div>
    </section>
  );
}
