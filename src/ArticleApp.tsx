import { useEffect, useMemo } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ArticleRelatedApps from './components/articles/ArticleRelatedApps';
import { readArticlePageData, removeArticlePrerender } from './articles/article-data';
import { articlesManifest } from './articles/manifest';
import { t } from './i18n/i18n';

export default function ArticleApp() {
  const article = useMemo(() => readArticlePageData(), []);

  useEffect(() => {
    removeArticlePrerender();
  }, []);

  if (!article) {
    return (
      <main className="article-page container">
        <p>{t('articles.error.notFound', 'el')}</p>
      </main>
    );
  }

  const lang = article.lang;
  const langUrls: Partial<Record<'el' | 'en', string>> = {
    [lang]: article.paths[lang],
  };
  if (article.siblingAvailable) {
    const other = lang === 'el' ? 'en' : 'el';
    langUrls[other] = article.paths[other];
  }

  return (
    <>
      <Header lang={lang} onLangChange={() => {}} langUrls={langUrls} />
      <main className="article-page">
        <div className="container">
          <a href={articlesManifest.listing[lang]} className="article-page__back">
            ← {t('articles.backToList', lang)}
          </a>
          {article.author ? (
            <p className="article-page__meta">{article.author}</p>
          ) : null}
          <h1 className="article-page__title">{article.title}</h1>
          <article
            className="article-body"
            dangerouslySetInnerHTML={{ __html: article.bodyHtml }}
          />
          <ArticleRelatedApps lang={lang} relatedAppIds={article.relatedApps} />
        </div>
      </main>
      <Footer lang={lang} />
    </>
  );
}
