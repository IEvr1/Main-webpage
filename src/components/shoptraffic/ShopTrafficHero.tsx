import type { Lang } from '../../i18n/types';
import { t } from '../../i18n/i18n';

type ShopTrafficHeroProps = {
  lang: Lang;
};

export default function ShopTrafficHero({ lang }: ShopTrafficHeroProps) {
  return (
    <section className="hero">
      <div className="container hero__content">
        <h1 className="hero__title">{t('waitless.hero.title', lang)}</h1>
        <p className="hero__subtitle">{t('waitless.hero.subtitle', lang)}</p>
        <div className="hero__actions">
          <a href="#contact" className="btn btn-primary">
            {t('waitless.hero.ctaContact', lang)}
          </a>
        </div>
      </div>
    </section>
  );
}
