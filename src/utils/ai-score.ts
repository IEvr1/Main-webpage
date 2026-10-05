import {
  AI_SCORE_DIMENSIONS,
  AI_SCORE_MAX_POINTS,
  AI_SCORE_QUESTIONS,
  AI_SCORE_WEAK_COUNT,
  type AiScoreDimensionId,
  type AiScoreQuestionId,
} from '../constants/ai-score-questions';

export type AiScoreBand = 'red' | 'amber' | 'green';

export type AiScoreAnswers = Partial<Record<AiScoreQuestionId, number>>;

export type DimensionScore = {
  id: AiScoreDimensionId;
  points: number;
  maxPoints: number;
  score100: number;
};

export type AiScoreResult = {
  totalPoints: number;
  score100: number;
  band: AiScoreBand;
  dimensions: DimensionScore[];
  weakest: AiScoreDimensionId[];
};

export function getBand(score100: number): AiScoreBand {
  if (score100 <= 39) return 'red';
  if (score100 <= 69) return 'amber';
  return 'green';
}

export function isQuizComplete(answers: AiScoreAnswers): boolean {
  return AI_SCORE_QUESTIONS.every((q) => {
    const v = answers[q.id];
    return typeof v === 'number' && v >= 0 && v <= 3;
  });
}

export function computeAiScore(answers: AiScoreAnswers): AiScoreResult | null {
  if (!isQuizComplete(answers)) return null;

  let totalPoints = 0;
  const dimensions: DimensionScore[] = AI_SCORE_DIMENSIONS.map((id) => {
    const qs = AI_SCORE_QUESTIONS.filter((q) => q.dimension === id);
    let points = 0;
    let maxPoints = 0;
    for (const q of qs) {
      const answerIndex = answers[q.id]!;
      points += q.points[answerIndex];
      maxPoints += 3;
    }
    totalPoints += points;
    return {
      id,
      points,
      maxPoints,
      score100: maxPoints === 0 ? 0 : Math.round((points / maxPoints) * 100),
    };
  });

  const score100 = Math.round((totalPoints / AI_SCORE_MAX_POINTS) * 100);
  const weakest = [...dimensions]
    .sort((a, b) => a.score100 - b.score100 || a.id.localeCompare(b.id))
    .slice(0, AI_SCORE_WEAK_COUNT)
    .map((d) => d.id);

  return {
    totalPoints,
    score100,
    band: getBand(score100),
    dimensions,
    weakest,
  };
}

export function buildScoreContactMessage(parts: {
  intro: string;
  scoreLine: string;
  bandLine: string;
  gapsIntro: string;
  gapLines: string[];
}): string {
  const gaps = parts.gapLines.map((line) => `- ${line}`).join('\n');

  return [parts.intro, '', parts.scoreLine, parts.bandLine, '', parts.gapsIntro, gaps].join('\n');
}
