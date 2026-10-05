import { useEffect, useState } from 'react';
import {
  CONSULT_LANGUAGES,
  type ConsultLang,
  isConsultLang,
} from '../../constants/consult-languages';
import {
  AI_SCORE_ANSWER_COUNT,
  AI_SCORE_QUESTIONS,
  type AiScoreQuestionId,
} from '../../constants/ai-score-questions';
import {
  formatAiScoreLocale,
  getAiScoreLocale,
} from '../../i18n/ai-score-locales';
import { isQuizComplete, type AiScoreAnswers } from '../../utils/ai-score';

type AiScoreQuizProps = {
  assessmentLang: ConsultLang;
  onAssessmentLangChange: (lang: ConsultLang) => void;
  answers: AiScoreAnswers;
  onAnswersChange: (answers: AiScoreAnswers) => void;
  onComplete: (answers: AiScoreAnswers) => void;
};

export default function AiScoreQuiz({
  assessmentLang,
  onAssessmentLangChange,
  answers,
  onAnswersChange,
  onComplete,
}: AiScoreQuizProps) {
  const [index, setIndex] = useState(0);
  const locale = getAiScoreLocale(assessmentLang);
  const question = AI_SCORE_QUESTIONS[index];
  const total = AI_SCORE_QUESTIONS.length;
  const selected = answers[question.id];
  const progress = ((index + (typeof selected === 'number' ? 1 : 0)) / total) * 100;
  const questionLocale = locale.questions[question.id];

  useEffect(() => {
    // Keep document direction friendly for Hebrew when assessment lang changes
    const quiz = document.getElementById('ai-score-quiz');
    if (!quiz) return;
    quiz.dir = assessmentLang === 'he' ? 'rtl' : 'ltr';
  }, [assessmentLang]);

  function selectAnswer(answerIndex: number) {
    const next: AiScoreAnswers = { ...answers, [question.id]: answerIndex };
    onAnswersChange(next);
  }

  function goNext() {
    if (typeof selected !== 'number') return;
    const nextAnswers: AiScoreAnswers = { ...answers, [question.id]: selected };
    if (index < total - 1) {
      onAnswersChange(nextAnswers);
      setIndex((i) => i + 1);
      return;
    }
    onAnswersChange(nextAnswers);
    if (isQuizComplete(nextAnswers)) {
      onComplete(nextAnswers);
    }
  }

  function goBack() {
    if (index > 0) setIndex((i) => i - 1);
  }

  return (
    <section id="ai-score-quiz" className="ai-score-quiz" aria-labelledby="ai-score-quiz-title">
      <div className="container ai-score-quiz__inner">
        <h2 id="ai-score-quiz-title" className="section-title">
          {locale.quizTitle}
        </h2>
        <p className="section-subtitle">{locale.quizSubtitle}</p>

        <div className="ai-score-quiz__lang form-group">
          <label htmlFor="ai-score-assessment-language">{locale.assessmentLanguage}</label>
          <select
            id="ai-score-assessment-language"
            className="ai-score-quiz__language-select"
            value={assessmentLang}
            onChange={(e) => {
              const value = e.target.value;
              if (isConsultLang(value)) onAssessmentLangChange(value);
            }}
          >
            {CONSULT_LANGUAGES.map((option) => (
              <option key={option.code} value={option.code}>
                {option.nativeName}
              </option>
            ))}
          </select>
        </div>

        <div
          className="ai-score-progress"
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={total}
          aria-valuenow={index + 1}
          aria-label={formatAiScoreLocale(locale.progressAria, {
            current: index + 1,
            total,
          })}
        >
          <div className="ai-score-progress__bar" style={{ width: `${Math.min(progress, 100)}%` }} />
        </div>
        <p className="ai-score-quiz__step">
          {formatAiScoreLocale(locale.step, { current: index + 1, total })}
        </p>

        <p className="ai-score-quiz__dimension">{locale.dim[question.dimension]}</p>
        <h3 className="ai-score-quiz__question">{questionLocale.q}</h3>

        <fieldset className="ai-score-quiz__options">
          <legend className="visually-hidden">{questionLocale.q}</legend>
          {Array.from({ length: AI_SCORE_ANSWER_COUNT }, (_, answerIndex) => {
            const optionId = `aiscore-opt-${question.id}-${answerIndex}`;
            const checked = selected === answerIndex;
            return (
              <label
                key={optionId}
                htmlFor={optionId}
                className={`ai-score-option${checked ? ' ai-score-option--selected' : ''}`}
              >
                <input
                  id={optionId}
                  type="radio"
                  name={`aiscore-${question.id}` as AiScoreQuestionId}
                  value={answerIndex}
                  checked={checked}
                  onChange={() => selectAnswer(answerIndex)}
                />
                <span className="ai-score-option__text">{questionLocale.a[answerIndex]}</span>
              </label>
            );
          })}
        </fieldset>

        <div className="ai-score-quiz__nav">
          <button
            type="button"
            className="btn btn-secondary"
            onClick={goBack}
            disabled={index === 0}
          >
            {locale.back}
          </button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={goNext}
            disabled={typeof selected !== 'number'}
          >
            {index === total - 1 ? locale.seeResults : locale.next}
          </button>
        </div>
      </div>
    </section>
  );
}
