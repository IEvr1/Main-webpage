import type { Lang } from '../../i18n/types';
import { t } from '../../i18n/i18n';
import { getSchoolMealsDemoUrl } from '../../schoolmeals/demo-url';

type SchoolMealsHeroProps = {
  lang: Lang;
};

export default function SchoolMealsHero({ lang }: SchoolMealsHeroProps) {
  return (
    <section className="hero">
      <div className="container hero__content">
        <h1 className="hero__title">{t('schoolmeals.hero.title', lang)}</h1>
        <p className="hero__subtitle">{t('schoolmeals.hero.subtitle', lang)}</p>
        <div className="hero__actions">
          <a href={getSchoolMealsDemoUrl()} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
            {t('schoolmeals.hero.ctaDemo', lang)}
          </a>
          <a href="#contact" className="btn btn-secondary">
            {t('schoolmeals.hero.ctaContact', lang)}
          </a>
        </div>
      </div>
    </section>
  );
}
