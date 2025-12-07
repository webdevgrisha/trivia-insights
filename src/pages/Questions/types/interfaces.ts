import type { QuestionData } from '../../../types/interfaces';
import type { AnsweredType, Difficulty, QuestionType } from './types';

interface QuestionFilterType {
  difficulty: Difficulty | null;
  type: QuestionType | null;
  isAnswered: AnsweredType | null;
}

interface AnsweredQuestion extends QuestionData {
  savedAnswer: string;
  isAnsweredCorrect: boolean;
}

export type { QuestionFilterType, AnsweredQuestion };
