import type { ReactElement } from 'react';
import type { Lang } from '../../i18n/types';
import { t } from '../../i18n/i18n';
import { getCompanyApps } from '../../constants/apps';

function BookingIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M16 2v4M8 2v4M3 10h18" />
      <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01" />
    </svg>
  );
}

function TrafficIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
    </svg>
  );
}

function FoodOrderIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4H6z" />
      <path d="M3 6h18" />
      <path d="M16 10a4 4 0 01-8 0" />
    </svg>
  );
}

function CustomAppsIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
      <path d="M8 10h.01M12 10h.01M16 10h.01" />
    </svg>
  );
}

const appIcons: Record<string, () => ReactElement> = {
  'online-booking': BookingIcon,
  'shop-traffic': TrafficIcon,
  'food-order': FoodOrderIcon,
  'custom-apps': CustomAppsIcon,
};

type AppCardsProps = {
  lang: Lang;
};

export default function AppCards({ lang }: AppCardsProps) {
  const apps = getCompanyApps(lang);

  return (
    <section id="apps" className="apps-section" aria-labelledby="apps-title">
      <div className="container">
        <h2 id="apps-title" className="section-title">
          {t('home.apps.title', lang)}
        </h2>
        <p className="section-subtitle">{t('home.apps.subtitle', lang)}</p>

        <div className="apps-grid">
          {apps.map((app) => {
            const Icon = appIcons[app.id];
            const isActive = app.status === 'active';
            const isCustom = app.status === 'custom';

            return (
              <article
                key={app.id}
                className={`app-card${isActive || isCustom ? '' : ' app-card--soon'}${isCustom ? ' app-card--custom' : ''}`}
              >
                <div className="app-card__icon">{Icon ? <Icon /> : null}</div>

                {app.tag ? <span className="app-card__tag">{app.tag}</span> : null}

                <h3 className="app-card__title">{app.title}</h3>
                <p className="app-card__text">{app.description}</p>

                {isActive || isCustom ? (
                  <a href={app.href} className="app-card__link">
                    {t(isCustom ? 'common.discuss' : 'common.learnMore', lang)}
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </a>
                ) : (
                  <span className="app-card__badge">{t('common.comingSoon', lang)}</span>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
