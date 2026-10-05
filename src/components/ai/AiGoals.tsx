import type { Lang } from '../../i18n/types';
import { t } from '../../i18n/i18n';

type AiGoalsProps = {
  lang: Lang;
};

const GOALS = [
  { icon: '⚡', titleKey: 'ai.goals.g1.title', textKey: 'ai.goals.g1.text' },
  { icon: '💰', titleKey: 'ai.goals.g2.title', textKey: 'ai.goals.g2.text' },
  { icon: '📈', titleKey: 'ai.goals.g3.title', textKey: 'ai.goals.g3.text' },
] as const;

export default function AiGoals({ lang }: AiGoalsProps) {
  return (
    <section className="ai-goals" aria-labelledby="ai-goals-title">
      <div className="container">
        <h2 id="ai-goals-title" className="section-title ai-section-title">
          {t('ai.goals.title', lang)}
        </h2>
        <p className="section-subtitle">{t('ai.goals.subtitle', lang)}</p>

        <div className="ai-goals__grid">
          {GOALS.map((goal) => (
            <article key={goal.titleKey} className="ai-goals__card">
              <span className="ai-goals__icon" aria-hidden="true">{goal.icon}</span>
              <h3 className="ai-goals__card-title">{t(goal.titleKey, lang)}</h3>
              <p className="ai-goals__card-text">{t(goal.textKey, lang)}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
