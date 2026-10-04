import { useEffect, useState } from 'react';
import type { Lang } from '../../i18n/types';
import { t } from '../../i18n/i18n';

type AiHeroProps = {
  lang: Lang;
};

const QUESTION_KEYS = [
  'ai.hero.q1',
  'ai.hero.q2',
  'ai.hero.q3',
  'ai.hero.q4',
] as const;

export default function AiHero({ lang }: AiHeroProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setVisible(false);
      window.setTimeout(() => {
        setActiveIndex((prev) => (prev + 1) % QUESTION_KEYS.length);
        setVisible(true);
      }, 320);
    }, 4200);

    return () => window.clearInterval(interval);
  }, []);

  const activeQuestion = t(QUESTION_KEYS[activeIndex], lang);

  return (
    <section className="ai-hero">
      <div className="ai-hero__glow" aria-hidden="true" />
      <div className="container ai-hero__content">
        <p className="ai-hero__eyebrow">{t('ai.hero.eyebrow', lang)}</p>

        <h1 className="ai-hero__title">
          <span className="ai-hero__title-line">{t('ai.hero.title', lang)}</span>
          <span
            className={`ai-hero__question${visible ? ' ai-hero__question--visible' : ''}`}
            aria-live="polite"
          >
            {activeQuestion}
          </span>
        </h1>

        <p className="ai-hero__subtitle">{t('ai.hero.subtitle', lang)}</p>

        <div className="ai-hero__actions">
          <a href="#consult" className="btn btn-primary ai-hero__cta">
            {t('ai.hero.ctaPrimary', lang)}
          </a>
          <a href="#how-it-works" className="btn btn-secondary ai-hero__cta-secondary">
            {t('ai.hero.ctaSecondary', lang)}
          </a>
        </div>

        <div className="ai-hero__badges" aria-label={t('ai.hero.badgesAria', lang)}>
          <span className="ai-hero__badge">{t('ai.hero.badge1', lang)}</span>
          <span className="ai-hero__badge">{t('ai.hero.badge2', lang)}</span>
          <span className="ai-hero__badge">{t('ai.hero.badge3', lang)}</span>
        </div>
      </div>
    </section>
  );
}
