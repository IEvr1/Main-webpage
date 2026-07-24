import Header from './components/Header';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FaqSection from './components/FaqSection';
import RelatedApps from './components/RelatedApps';
import SchoolMealsHero from './components/schoolmeals/SchoolMealsHero';
import SchoolMealsProblems from './components/schoolmeals/SchoolMealsProblems';
import SchoolMealsBenefits from './components/schoolmeals/SchoolMealsBenefits';
import SchoolMealsFeatures from './components/schoolmeals/SchoolMealsFeatures';
import SchoolMealsScreenshots from './components/schoolmeals/SchoolMealsScreenshots';
import { SCHOOLMEALS_FAQ } from './constants/faq';
import { useLang } from './i18n/useLang';

const SCHOOL_MEALS_META = {
  titleKey: 'schoolmeals.metaTitle',
  descriptionKey: 'schoolmeals.metaDescription',
} as const;

export default function SchoolMealsApp() {
  const [lang, setLang] = useLang(SCHOOL_MEALS_META);

  return (
    <>
      <Header lang={lang} onLangChange={setLang} />
      <SchoolMealsHero lang={lang} />
      <main>
        <SchoolMealsProblems lang={lang} />
        <SchoolMealsBenefits lang={lang} />
        <SchoolMealsFeatures lang={lang} />
        <SchoolMealsScreenshots lang={lang} />
        <RelatedApps lang={lang} currentAppId="school-meals" />
        <FaqSection
          lang={lang}
          titleKey="schoolmeals.faq.title"
          subtitleKey="schoolmeals.faq.subtitle"
          items={SCHOOLMEALS_FAQ}
        />
        <Contact lang={lang} />
      </main>
      <Footer lang={lang} />
    </>
  );
}
