import Header from './components/Header';
import HomeHero from './components/home/HomeHero';
import AppCards from './components/home/AppCards';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useLang } from './i18n/useLang';

const HOME_META = {
  titleKey: 'home.metaTitle',
  descriptionKey: 'home.metaDescription',
} as const;

export default function HomeApp() {
  const [lang, setLang] = useLang(HOME_META);

  return (
    <>
      <Header lang={lang} onLangChange={setLang} />
      <HomeHero lang={lang} />
      <main>
        <AppCards lang={lang} />
        <Contact lang={lang} />
      </main>
      <Footer lang={lang} />
    </>
  );
}
