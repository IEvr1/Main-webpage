import { useState } from 'react';
import Header from './components/Header';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FaqSection from './components/FaqSection';
import RelatedApps from './components/RelatedApps';
import AiScoreHero from './components/aiscore/AiScoreHero';
import AiScoreQuiz from './components/aiscore/AiScoreQuiz';
import AiScoreResults from './components/aiscore/AiScoreResults';
import { AI_SCORE_FAQ } from './constants/faq';
import { useLang } from './i18n/useLang';
import { computeAiScore, type AiScoreAnswers } from './utils/ai-score';

const AI_SCORE_META = {
  titleKey: 'aiscore.metaTitle',
  descriptionKey: 'aiscore.metaDescription',
} as const;

type Phase = 'intro' | 'quiz' | 'results';

export default function AiScoreApp() {
  const [lang, setLang] = useLang(AI_SCORE_META);
  const [phase, setPhase] = useState<Phase>('intro');
  const [answers, setAnswers] = useState<AiScoreAnswers>({});
  const [contactMessage, setContactMessage] = useState('');

  const result = computeAiScore(answers);

  function handleStart() {
    setPhase('quiz');
    requestAnimationFrame(() => {
      document.getElementById('ai-score-quiz')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }

  function handleComplete(nextAnswers: AiScoreAnswers) {
    setAnswers(nextAnswers);
    setPhase('results');
    requestAnimationFrame(() => {
      document.getElementById('ai-score-results')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }

  function handleRetake() {
    setAnswers({});
    setContactMessage('');
    setPhase('quiz');
    requestAnimationFrame(() => {
      document.getElementById('ai-score-quiz')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }

  function handleRequestSolution(message: string) {
    setContactMessage(message);
    requestAnimationFrame(() => {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      window.setTimeout(() => {
        document.getElementById('message')?.focus();
      }, 400);
    });
  }

  return (
    <>
      <Header lang={lang} onLangChange={setLang} />
      <AiScoreHero lang={lang} onStart={handleStart} />
      <main>
        {phase === 'quiz' ? (
          <AiScoreQuiz
            lang={lang}
            answers={answers}
            onAnswersChange={setAnswers}
            onComplete={handleComplete}
          />
        ) : null}

        {phase === 'results' && result ? (
          <AiScoreResults
            lang={lang}
            result={result}
            onRetake={handleRetake}
            onRequestSolution={handleRequestSolution}
          />
        ) : null}

        <RelatedApps lang={lang} currentAppId="ai-score" />
        <FaqSection
          lang={lang}
          titleKey="aiscore.faq.title"
          subtitleKey="aiscore.faq.subtitle"
          items={AI_SCORE_FAQ}
        />
        <Contact lang={lang} defaultMessage={contactMessage} />
      </main>
      <Footer lang={lang} />
    </>
  );
}
