import type { Lang } from '../i18n/types';
import { t } from '../i18n/i18n';

type HeroProps = {
  lang: Lang;
};

export default function Hero({ lang }: HeroProps) {
  return (
    <section className="hero">
      <div className="container hero__content">
        <h1 className="hero__title">{t('booking.hero.title', lang)}</h1>
        <p className="hero__subtitle">{t('booking.hero.subtitle', lang)}</p>
        <div className="hero__actions">
          <a href="#contact" className="btn btn-primary">
            {t('booking.hero.ctaContact', lang)}
          </a>
        </div>
      </div>
    </section>
  );
}
