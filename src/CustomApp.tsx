import Header from './components/Header';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FaqSection from './components/FaqSection';
import CustomHero from './components/custom/CustomHero';
import CustomProcess from './components/custom/CustomProcess';
import CustomExamples from './components/custom/CustomExamples';
import { CUSTOM_FAQ } from './constants/faq';
import { useLang } from './i18n/useLang';

const CUSTOM_META = {
  titleKey: 'custom.metaTitle',
  descriptionKey: 'custom.metaDescription',
} as const;

export default function CustomApp() {
  const [lang, setLang] = useLang(CUSTOM_META);

  return (
    <>
      <Header lang={lang} onLangChange={setLang} />
      <CustomHero lang={lang} />
      <main>
        <CustomProcess lang={lang} />
        <CustomExamples lang={lang} />
        <FaqSection
          lang={lang}
          titleKey="custom.faq.title"
          subtitleKey="custom.faq.subtitle"
          items={CUSTOM_FAQ}
        />
        <Contact lang={lang} />
      </main>
      <Footer lang={lang} />
    </>
  );
}
