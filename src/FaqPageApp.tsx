import Header from './components/Header';
import Footer from './components/Footer';
import Contact from './components/Contact';
import FaqSection from './components/FaqSection';
import { SITE_FAQ, SITE_FAQ_PRODUCTS } from './constants/faq';
import { useLang } from './i18n/useLang';
import { t } from './i18n/i18n';

const FAQ_META = {
  titleKey: 'sitefaq.metaTitle',
  descriptionKey: 'sitefaq.metaDescription',
} as const;

export default function FaqPageApp() {
  const [lang, setLang] = useLang(FAQ_META);

  return (
    <>
      <Header lang={lang} onLangChange={setLang} />
      <main>
        <section className="faq-section" aria-labelledby="sitefaq-hero">
          <div className="container">
            <h1 id="sitefaq-hero" className="section-title">
              {t('sitefaq.hero.title', lang)}
            </h1>
            <p className="section-subtitle">{t('sitefaq.hero.subtitle', lang)}</p>
          </div>
        </section>

        <section className="faq-section" aria-labelledby="sitefaq-products">
          <div className="container">
            <h2 id="sitefaq-products" className="section-title">
              {t('sitefaq.products.title', lang)}
            </h2>
            <p className="section-subtitle">
              {t('sitefaq.products.subtitle', lang)}
            </p>
            <ul className="faq-product-list">
              {SITE_FAQ_PRODUCTS.map((product) => (
                <li key={product.href}>
                  <a href={product.href}>
                    <strong>{t(product.titleKey, lang)}</strong>
                  </a>
                  <p>{t(product.descriptionKey, lang)}</p>
                </li>
              ))}
              <li>
                <a href="/ai-score">
                  <strong>AI Readiness Score</strong>
                </a>
                <p>{t('sitefaq.faq.a10', lang)}</p>
              </li>
            </ul>
          </div>
        </section>

        <FaqSection
          lang={lang}
          titleKey="sitefaq.faq.title"
          subtitleKey="sitefaq.faq.subtitle"
          items={SITE_FAQ}
        />

        <Contact lang={lang} />
      </main>
      <Footer lang={lang} />
    </>
  );
}
