import Header from './components/Header';
import Hero from './components/Hero';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FaqSection from './components/FaqSection';
import RelatedApps from './components/RelatedApps';
import BookingProblems from './components/onlinebooking/BookingProblems';
import BookingOfferings from './components/onlinebooking/BookingOfferings';
import BookingFeatures from './components/onlinebooking/BookingFeatures';
import BookingScreenshots from './components/onlinebooking/BookingScreenshots';
import { BOOKING_FAQ } from './constants/faq';
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
        <BookingProblems lang={lang} />
        <BookingOfferings lang={lang} />
        <BookingFeatures lang={lang} />
        <BookingScreenshots lang={lang} />
        <RelatedApps lang={lang} currentAppId="online-booking" />
        <FaqSection
          lang={lang}
          titleKey="booking.faq.title"
          subtitleKey="booking.faq.subtitle"
          items={BOOKING_FAQ}
        />
        <Contact lang={lang} />
      </main>
      <Footer lang={lang} />
    </>
  );
}
