import Header from './components/Header';
import Footer from './components/Footer';
import ArticleList from './components/articles/ArticleList';
import { articlesManifest } from './articles/manifest';
import { usePathLang } from './i18n/usePathLang';
import { t } from './i18n/i18n';

const ARTICLES_META = {
  titleKey: 'articles.metaTitle',
  descriptionKey: 'articles.metaDescription',
} as const;

export default function ArticlesApp() {
  const [lang, setLang] = usePathLang(ARTICLES_META);
  const langUrls = articlesManifest.listing;

  return (
    <>
      <Header lang={lang} onLangChange={setLang} langUrls={langUrls} />
      <section className="articles-hero">
        <div className="container">
          <h1 className="articles-hero__title">{t('articles.hero.title', lang)}</h1>
          <p className="articles-hero__subtitle">{t('articles.hero.subtitle', lang)}</p>
        </div>
      </section>
      <main>
        <ArticleList lang={lang} />
      </main>
      <Footer lang={lang} />
    </>
  );
}
