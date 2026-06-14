import Header from './components/Header';
import Hero from './components/Hero';
import DemoVideo from './components/DemoVideo';
import Benefits from './components/Benefits';
import Screenshots from './components/Screenshots';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useLang } from './i18n/useLang';

const BOOKING_META = {
  titleKey: 'booking.metaTitle',
  descriptionKey: 'booking.metaDescription',
} as const;

export default function OnlineBookingApp() {
  const [lang, setLang] = useLang(BOOKING_META);

  return (
    <>
      <Header lang={lang} onLangChange={setLang} />
      <Hero lang={lang} />
      <main>
        <DemoVideo lang={lang} />
        <Benefits lang={lang} />
        <Screenshots lang={lang} />
        <Contact lang={lang} />
      </main>
      <Footer lang={lang} />
    </>
  );
}
