import type { Lang } from '../i18n/types';
import { t } from '../i18n/i18n';
import { getCompanyApps } from '../constants/apps';

type RelatedAppsProps = {
  lang: Lang;
  currentAppId: string;
};

const MAX_RELATED = 3;

export default function RelatedApps({ lang, currentAppId }: RelatedAppsProps) {
  const relatedApps = getCompanyApps(lang)
    .filter((app) => app.id !== currentAppId && (app.status === 'active' || app.status === 'custom'))
    .slice(0, MAX_RELATED);

  if (relatedApps.length === 0) {
    return null;
  }

  return (
    <section className="related-apps" aria-labelledby="related-apps-title">
      <div className="container">
        <h2 id="related-apps-title" className="section-title">
          {t('relatedApps.title', lang)}
        </h2>
        <p className="section-subtitle">{t('relatedApps.subtitle', lang)}</p>

        <ul className="related-apps__list">
          {relatedApps.map((app) => (
            <li key={app.id}>
              <a href={app.href} className="related-apps__link">
                <span className="related-apps__link-title">{app.title}</span>
                {app.tag ? <span className="related-apps__link-tag">{app.tag}</span> : null}
                <span className="related-apps__link-text">{app.description}</span>
              </a>
            </li>
          ))}
        </ul>

        <p className="related-apps__home">
          <a href="/">{t('relatedApps.allApps', lang)}</a>
        </p>
      </div>
    </section>
  );
}
