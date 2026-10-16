import Header from './components/Header';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FaqSection from './components/FaqSection';
import RelatedApps from './components/RelatedApps';
import ShopTrafficHero from './components/shoptraffic/ShopTrafficHero';
import ShopTrafficProblems from './components/shoptraffic/ShopTrafficProblems';
import ShopTrafficBenefits from './components/shoptraffic/ShopTrafficBenefits';
import ShopTrafficFeatures from './components/shoptraffic/ShopTrafficFeatures';
import ShopTrafficScreenshots from './components/shoptraffic/ShopTrafficScreenshots';
import { SHOPTRAFFIC_FAQ } from './constants/faq';
import { useLang } from './i18n/useLang';

const SHOP_TRAFFIC_META = {
  titleKey: 'waitless.metaTitle',
  descriptionKey: 'waitless.metaDescription',
} as const;

export default function ShopTrafficApp() {
  const [lang, setLang] = useLang(SHOP_TRAFFIC_META);

  return (
    <>
      <Header lang={lang} onLangChange={setLang} />
      <ShopTrafficHero lang={lang} />
      <main>
        <ShopTrafficProblems lang={lang} />
        <ShopTrafficBenefits lang={lang} />
        <ShopTrafficFeatures lang={lang} />
        <ShopTrafficScreenshots lang={lang} />
        <RelatedApps lang={lang} currentAppId="shop-traffic" />
        <FaqSection
          lang={lang}
          titleKey="waitless.faq.title"
          subtitleKey="waitless.faq.subtitle"
          items={SHOPTRAFFIC_FAQ}
        />
        <Contact lang={lang} />
      </main>
      <Footer lang={lang} />
    </>
  );
}
