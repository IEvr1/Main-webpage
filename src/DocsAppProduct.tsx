import Header from './components/Header';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FaqSection from './components/FaqSection';
import RelatedApps from './components/RelatedApps';
import DocsAppHero from './components/docsapp/DocsAppHero';
import DocsAppProblems from './components/docsapp/DocsAppProblems';
import DocsAppFeatures from './components/docsapp/DocsAppFeatures';
import DocsAppRequirements from './components/docsapp/DocsAppRequirements';
import DocsAppScreenshots from './components/docsapp/DocsAppScreenshots';
import { DOCSAPP_FAQ } from './constants/faq';
import { useLang } from './i18n/useLang';

const DOCSAPP_META = {
  titleKey: 'docsapp.metaTitle',
  descriptionKey: 'docsapp.metaDescription',
} as const;

export default function DocsAppProduct() {
  const [lang, setLang] = useLang(DOCSAPP_META);

  return (
    <>
      <Header lang={lang} onLangChange={setLang} />
      <DocsAppHero lang={lang} />
      <main>
        <DocsAppProblems lang={lang} />
        <DocsAppFeatures lang={lang} />
        <DocsAppRequirements lang={lang} />
        <DocsAppScreenshots lang={lang} />
        <RelatedApps lang={lang} currentAppId="docs-app" />
        <FaqSection
          lang={lang}
          titleKey="docsapp.faq.title"
          subtitleKey="docsapp.faq.subtitle"
          items={DOCSAPP_FAQ}
        />
        <Contact lang={lang} />
      </main>
      <Footer lang={lang} />
    </>
  );
}
