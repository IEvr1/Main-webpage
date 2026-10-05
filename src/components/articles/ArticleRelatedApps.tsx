import type { Lang } from '../../i18n/types';
import { t } from '../../i18n/i18n';
import { getCompanyApps } from '../../constants/apps';

type ArticleRelatedAppsProps = {
  lang: Lang;
  relatedAppIds: string[];
};

export default function ArticleRelatedApps({ lang, relatedAppIds }: ArticleRelatedAppsProps) {
  if (relatedAppIds.length === 0) return null;

  const apps = getCompanyApps(lang).filter((app) => relatedAppIds.includes(app.id));

  if (apps.length === 0) return null;

  return (
    <aside className="article-related" aria-label={t('articles.relatedApps', lang)}>
      <h2 className="article-related__title">{t('articles.relatedApps', lang)}</h2>
      <div className="article-related__links">
        {apps.map((app) => (
          <a key={app.id} href={app.href} className="article-related__link">
            {app.title}
          </a>
        ))}
      </div>
    </aside>
  );
}
