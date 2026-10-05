import { useState } from 'react';
import type { Lang } from '../../i18n/types';
import { t } from '../../i18n/i18n';
import {
  AI_SCORE_ANSWER_COUNT,
  AI_SCORE_QUESTIONS,
  type AiScoreQuestionId,
} from '../../constants/ai-score-questions';
import { isQuizComplete, type AiScoreAnswers } from '../../utils/ai-score';

type AiScoreQuizProps = {
  lang: Lang;
  answers: AiScoreAnswers;
  onAnswersChange: (answers: AiScoreAnswers) => void;
  onComplete: (answers: AiScoreAnswers) => void;
};

export default function AiScoreQuiz({
  lang,
  answers,
  onAnswersChange,
  onComplete,
}: AiScoreQuizProps) {
  const [index, setIndex] = useState(0);
  const question = AI_SCORE_QUESTIONS[index];
  const total = AI_SCORE_QUESTIONS.length;
  const selected = answers[question.id];
  const progress = ((index + (typeof selected === 'number' ? 1 : 0)) / total) * 100;

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

  const dimensionLabel = t(`aiscore.dim.${question.dimension}`, lang);
  const questionText = t(`aiscore.q.${question.id}`, lang);

  return (
    <section id="ai-score-quiz" className="ai-score-quiz" aria-labelledby="ai-score-quiz-title">
      <div className="container ai-score-quiz__inner">
        <h2 id="ai-score-quiz-title" className="section-title">
          {t('aiscore.quiz.title', lang)}
        </h2>
        <p className="section-subtitle">{t('aiscore.quiz.subtitle', lang)}</p>

        <div
          className="ai-score-progress"
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={total}
          aria-valuenow={index + 1}
          aria-label={t('aiscore.quiz.progressAria', lang, { current: index + 1, total })}
        >
          <div className="ai-score-progress__bar" style={{ width: `${Math.min(progress, 100)}%` }} />
        </div>
        <p className="ai-score-quiz__step">
          {t('aiscore.quiz.step', lang, { current: index + 1, total })}
        </p>

        <p className="ai-score-quiz__dimension">{dimensionLabel}</p>
        <h3 className="ai-score-quiz__question">{questionText}</h3>

        <fieldset className="ai-score-quiz__options">
          <legend className="visually-hidden">{questionText}</legend>
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
                <span className="ai-score-option__text">
                  {t(`aiscore.q.${question.id}.a${answerIndex}`, lang)}
                </span>
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
            {t('aiscore.quiz.back', lang)}
          </button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={goNext}
            disabled={typeof selected !== 'number'}
          >
            {index === total - 1
              ? t('aiscore.quiz.seeResults', lang)
              : t('aiscore.quiz.next', lang)}
          </button>
        </div>
      </div>
    </section>
  );
}
