import Header from './components/Header';
import Footer from './components/Footer';
import FaqSection from './components/FaqSection';
import AiHero from './components/ai/AiHero';
import AiGoals from './components/ai/AiGoals';
import AiUseCases from './components/ai/AiUseCases';
import AiPromise from './components/ai/AiPromise';
import AiConsultSection from './components/ai/AiConsultSection';
import { AI_SOLUTIONS_FAQ } from './constants/faq';
import { useLang } from './i18n/useLang';

const AI_META = {
  titleKey: 'ai.metaTitle',
  descriptionKey: 'ai.metaDescription',
} as const;

export default function AiSolutionsApp() {
  const [lang, setLang] = useLang(AI_META, 'en');

  return (
    <div className="ai-page">
      <Header lang={lang} onLangChange={setLang} />
      <AiHero lang={lang} />
      <main>
        <AiGoals lang={lang} />
        <AiUseCases lang={lang} />
        <AiPromise lang={lang} />
        <AiConsultSection lang={lang} />
        <FaqSection
          lang={lang}
          titleKey="ai.faq.title"
          subtitleKey="ai.faq.subtitle"
          items={AI_SOLUTIONS_FAQ}
        />
      </main>
      <Footer lang={lang} />
    </div>
  );
}
