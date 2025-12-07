import type { UserDifficultyStats } from '../types/interfaces';

interface UserDifficultyBarDatum {
  id: 'easy' | 'medium' | 'hard';
  name: string;
  correct: number;
  incorrect: number;
  [key: string]: number | string;
}

function createUserDifficultyBarData(stats: UserDifficultyStats): UserDifficultyBarDatum[] {
  return [
    {
      id: 'easy',
      name: 'Easy',
      correct: stats.easy.correct_answer_count,
      incorrect: stats.easy.incorrect_answer_count,
    },
    {
      id: 'medium',
      name: 'Medium',
      correct: stats.medium.correct_answer_count,
      incorrect: stats.medium.incorrect_answer_count,
    },
    {
      id: 'hard',
      name: 'Hard',
      correct: stats.hard.correct_answer_count,
      incorrect: stats.hard.incorrect_answer_count,
    },
  ];
}

export type { UserDifficultyBarDatum };
export { createUserDifficultyBarData };
