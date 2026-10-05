export type AiScoreDimensionId =
  | 'strategy'
  | 'data'
  | 'people'
  | 'process'
  | 'tech'
  | 'governance';

export type AiScoreQuestionId =
  | 'strategy_use_cases'
  | 'strategy_roi'
  | 'data_location'
  | 'data_quality'
  | 'people_ownership'
  | 'people_skills'
  | 'process_visibility'
  | 'process_bottlenecks'
  | 'tech_integration'
  | 'tech_stack'
  | 'governance_leadership'
  | 'governance_risk';

export type AiScoreQuestion = {
  id: AiScoreQuestionId;
  dimension: AiScoreDimensionId;
  /** Points for each answer index (0–3). */
  points: readonly [number, number, number, number];
};

export const AI_SCORE_DIMENSIONS: readonly AiScoreDimensionId[] = [
  'strategy',
  'data',
  'people',
  'process',
  'tech',
  'governance',
] as const;

/** 12 MCQs — 2 per dimension. Answers are maturity stages scored 0–3. */
export const AI_SCORE_QUESTIONS: readonly AiScoreQuestion[] = [
  {
    id: 'strategy_use_cases',
    dimension: 'strategy',
    points: [0, 1, 2, 3],
  },
  {
    id: 'strategy_roi',
    dimension: 'strategy',
    points: [0, 1, 2, 3],
  },
  {
    id: 'data_location',
    dimension: 'data',
    points: [0, 1, 2, 3],
  },
  {
    id: 'data_quality',
    dimension: 'data',
    points: [0, 1, 2, 3],
  },
  {
    id: 'people_ownership',
    dimension: 'people',
    points: [0, 1, 2, 3],
  },
  {
    id: 'people_skills',
    dimension: 'people',
    points: [0, 1, 2, 3],
  },
  {
    id: 'process_visibility',
    dimension: 'process',
    points: [0, 1, 2, 3],
  },
  {
    id: 'process_bottlenecks',
    dimension: 'process',
    points: [0, 1, 2, 3],
  },
  {
    id: 'tech_integration',
    dimension: 'tech',
    points: [0, 1, 2, 3],
  },
  {
    id: 'tech_stack',
    dimension: 'tech',
    points: [0, 1, 2, 3],
  },
  {
    id: 'governance_leadership',
    dimension: 'governance',
    points: [0, 1, 2, 3],
  },
  {
    id: 'governance_risk',
    dimension: 'governance',
    points: [0, 1, 2, 3],
  },
] as const;

export const AI_SCORE_MAX_POINTS = AI_SCORE_QUESTIONS.length * 3;
export const AI_SCORE_ANSWER_COUNT = 4;
export const AI_SCORE_WEAK_COUNT = 3;
