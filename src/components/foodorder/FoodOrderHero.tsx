import type { Lang } from '../../i18n/types';
import { t } from '../../i18n/i18n';
import { getFoodOrderDemoUrl } from '../../foodorder/demo-url';

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
          <a href={getFoodOrderDemoUrl()} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
            {t('foodorder.hero.ctaDemo', lang)}
          </a>
          <a href="#contact" className="btn btn-secondary">
            {t('foodorder.hero.ctaContact', lang)}
          </a>
        </div>
      </div>
    </section>
  );
}
