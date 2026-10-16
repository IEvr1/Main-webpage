import type { Lang } from '../../i18n/types';
import { t } from '../../i18n/i18n';

type FoodOrderHeroProps = {
  lang: Lang;
};

export default function FoodOrderHero({ lang }: FoodOrderHeroProps) {
  return (
    <section className="hero">
      <div className="container hero__content">
        <h1 className="hero__title">{t('foodorder.hero.title', lang)}</h1>
        <p className="hero__subtitle">{t('foodorder.hero.subtitle', lang)}</p>
        <div className="hero__actions">
          <a href="#contact" className="btn btn-primary">
            {t('foodorder.hero.ctaContact', lang)}
          </a>
        </div>
      </div>
    </section>
  );
}
