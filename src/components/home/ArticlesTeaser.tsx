import type { Lang } from '../../i18n/types';
import { t } from '../../i18n/i18n';
import { articlesManifest, getArticlesForLang } from '../../articles/manifest';

type ArticlesTeaserProps = {
  lang: Lang;
};

export default function ArticlesTeaser({ lang }: ArticlesTeaserProps) {
  const listingPath = articlesManifest.listing[lang];
  const latest = getArticlesForLang(lang).slice(0, 2);

  return (
    <section className="home-articles" aria-labelledby="home-articles-title">
      <div className="container home-articles__inner">
        <h2 id="home-articles-title" className="section-title">
          {t('home.articles.title', lang)}
        </h2>
        <p className="section-subtitle">{t('home.articles.subtitle', lang)}</p>
        <a href={listingPath} className="home-articles__cta">
          {t('home.articles.cta', lang)}
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </a>

        {latest.length > 0 ? (
          <div className="home-articles__latest">
            {latest.map((article) => (
              <a key={article.slug} href={article.paths[lang]} className="article-card">
                <p className="article-card__date">
                  <time dateTime={article.date}>{article.date}</time>
                </p>
                <h3 className="article-card__title">{article.titles[lang]}</h3>
                <p className="article-card__excerpt">{article.descriptions[lang]}</p>
              </a>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}
