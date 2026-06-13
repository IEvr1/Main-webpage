import type { ReactElement } from 'react';
import { COMPANY_APPS } from '../../constants/apps';

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

const appIcons: Record<string, () => ReactElement> = {
  'online-booking': BookingIcon,
  'shop-traffic': TrafficIcon,
};

export default function AppCards() {
  return (
    <section id="apps" className="apps-section" aria-labelledby="apps-title">
      <div className="container">
        <h2 id="apps-title" className="section-title">
          Οι εφαρμογές μας
        </h2>
        <p className="section-subtitle">
          Επιλέξτε την εφαρμογή που σας ενδιαφέρει — κάθε λύση σχεδιάζεται για συγκεκριμένες
          επιχειρηματικές ανάγκες.
        </p>

        <div className="apps-grid">
          {COMPANY_APPS.map((app) => {
            const Icon = appIcons[app.id];
            const isActive = app.status === 'active';

            return (
              <article key={app.id} className={`app-card${isActive ? '' : ' app-card--soon'}`}>
                <div className="app-card__icon">{Icon ? <Icon /> : null}</div>

                {app.tag ? <span className="app-card__tag">{app.tag}</span> : null}

                <h3 className="app-card__title">{app.title}</h3>
                <p className="app-card__text">{app.description}</p>

                {isActive ? (
                  <a href={app.href} className="app-card__link">
                    Μάθετε περισσότερα
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </a>
                ) : (
                  <span className="app-card__badge">Σύντομα διαθέσιμο</span>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
