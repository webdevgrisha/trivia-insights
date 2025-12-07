import type { ResponseCodeEnum } from './enums';
import type { QuestionDifficulty, QuestionType } from './types';

interface TokenResponse {
  response_code: ResponseCodeEnum;
  response_message: string;
  token: string;
}

interface QuestionData {
  type: QuestionType;
  difficulty: QuestionDifficulty;
  category: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

interface QuestionResponse {
  response_code: ResponseCodeEnum;
  results: QuestionData[];
}

interface CacheEntry<T> {
  data: T;
  expiresAt: number | null;
}

export type { TokenResponse, QuestionData, QuestionResponse, CacheEntry };
