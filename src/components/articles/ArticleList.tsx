import type { Lang } from '../../i18n/types';
import { t } from '../../i18n/i18n';
import { getArticlesForLang } from '../../articles/manifest';

type ArticleListProps = {
  lang: Lang;
};

export default function ArticleList({ lang }: ArticleListProps) {
  const articles = getArticlesForLang(lang);

  return (
    <section className="articles-list" aria-labelledby="articles-list-title">
      <div className="container">
        <h2 id="articles-list-title" className="visually-hidden">
          {t('articles.list.title', lang)}
        </h2>
        <div className="articles-list__grid">
          {articles.map((article) => (
            <a
              key={article.slug}
              href={article.paths[lang]}
              className="article-card"
            >
              <h3 className="article-card__title">{article.titles[lang]}</h3>
              <p className="article-card__excerpt">{article.descriptions[lang]}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
