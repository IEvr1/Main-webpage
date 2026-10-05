import type { Lang } from '../../i18n/types';
import { t } from '../../i18n/i18n';

type HomeHeroProps = {
  lang: Lang;
};

export default function HomeHero({ lang }: HomeHeroProps) {
  return (
    <section className="home-hero">
      <div className="container home-hero__content">
        <h1 className="home-hero__title">{t('home.hero.title', lang)}</h1>
        <p className="home-hero__subtitle">{t('home.hero.subtitle', lang)}</p>
        <div className="home-hero__actions">
          <a href="/ai-score/" className="btn btn-secondary">
            {t('home.hero.ctaAiScore', lang)}
          </a>
          <a href="/ai/" className="btn btn-ai">
            {t('common.navAi', lang)}
          </a>
        </div>
      </div>
    </section>
  );
}
