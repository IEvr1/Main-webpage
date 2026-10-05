import type { Lang } from '../../i18n/types';
import { t } from '../../i18n/i18n';

type AiScoreHeroProps = {
  lang: Lang;
  onStart: () => void;
};

export default function AiScoreHero({ lang, onStart }: AiScoreHeroProps) {
  return (
    <section className="hero ai-score-hero">
      <div className="container hero__content">
        <h1 className="hero__title">{t('aiscore.hero.title', lang)}</h1>
        <p className="hero__subtitle">{t('aiscore.hero.subtitle', lang)}</p>
        <div className="hero__actions">
          <button type="button" className="btn btn-primary ai-score-hero__cta" onClick={onStart}>
            {t('aiscore.hero.ctaStart', lang)}
          </button>
        </div>
      </div>
    </section>
  );
}
