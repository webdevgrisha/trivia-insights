import type { AnsweredQuestion } from './interfaces';

type Difficulty = 'easy' | 'medium' | 'hard';

type QuestionType = 'boolean' | 'multiple';

type AnsweredType = 'answered' | 'unanswered';

type AnswerMap = Record<string, AnsweredQuestion>;

export type { Difficulty, QuestionType, AnsweredType, AnswerMap };
