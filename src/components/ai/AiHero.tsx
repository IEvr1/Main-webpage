import type { Lang } from '../../i18n/types';
import { t } from '../../i18n/i18n';

type AiHeroProps = {
  lang: Lang;
};

const TRUST_KEYS = ['ai.hero.trust1', 'ai.hero.trust2', 'ai.hero.trust3'] as const;

export default function AiHero({ lang }: AiHeroProps) {
  return (
    <section className="ai-hero">
      <div className="container ai-hero__content">
        <p className="ai-hero__eyebrow">{t('ai.hero.eyebrow', lang)}</p>

        <h1 className="ai-hero__title">
          <span className="ai-hero__title-line">{t('ai.hero.title', lang)}</span>
          <span className="ai-hero__title-accent">{t('ai.hero.titleAccent', lang)}</span>
        </h1>

        <p className="ai-hero__subtitle">{t('ai.hero.subtitle', lang)}</p>

        <ul className="ai-hero__trust" aria-label={t('ai.hero.trustAria', lang)}>
          {TRUST_KEYS.map((key) => (
            <li key={key} className="ai-hero__trust-item">
              <span className="ai-hero__trust-icon" aria-hidden="true">✓</span>
              {t(key, lang)}
            </li>
          ))}
        </ul>

        <div className="ai-hero__actions">
          <a href="#consult" className="btn btn-primary ai-hero__cta">
            {t('ai.hero.ctaPrimary', lang)}
          </a>
          <a href="#how-it-works" className="ai-hero__link">
            {t('ai.hero.ctaSecondary', lang)}
          </a>
        </div>
      </div>
    </section>
  );
}
