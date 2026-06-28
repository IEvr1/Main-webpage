import Header from './components/Header';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FaqSection from './components/FaqSection';
import RelatedApps from './components/RelatedApps';
import FoodOrderHero from './components/foodorder/FoodOrderHero';
import FoodOrderProblems from './components/foodorder/FoodOrderProblems';
import FoodOrderBenefits from './components/foodorder/FoodOrderBenefits';
import FoodOrderFeatures from './components/foodorder/FoodOrderFeatures';
import FoodOrderScreenshots from './components/foodorder/FoodOrderScreenshots';
import { FOODORDER_FAQ } from './constants/faq';
import { useLang } from './i18n/useLang';

const FOOD_ORDER_META = {
  titleKey: 'foodorder.metaTitle',
  descriptionKey: 'foodorder.metaDescription',
} as const;

export default function FoodOrderApp() {
  const [lang, setLang] = useLang(FOOD_ORDER_META);

  return (
    <>
      <Header lang={lang} onLangChange={setLang} />
      <FoodOrderHero lang={lang} />
      <main>
        <FoodOrderProblems lang={lang} />
        <FoodOrderBenefits lang={lang} />
        <FoodOrderFeatures lang={lang} />
        <FoodOrderScreenshots lang={lang} />
        <RelatedApps lang={lang} currentAppId="food-order" />
        <FaqSection
          lang={lang}
          titleKey="foodorder.faq.title"
          subtitleKey="foodorder.faq.subtitle"
          items={FOODORDER_FAQ}
        />
        <Contact lang={lang} />
      </main>
      <Footer lang={lang} />
    </>
  );
}
