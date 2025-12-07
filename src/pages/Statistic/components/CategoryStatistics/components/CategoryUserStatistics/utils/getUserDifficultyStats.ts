import type { AnswerMap } from '../../../../../../Questions/types/types';
import type { UserDifficultyStats } from '../types/interfaces';

function getUserDifficultyStats(answers: AnswerMap): UserDifficultyStats {
  const stats: UserDifficultyStats = {
    easy: {
      total_answer_count: 0,
      correct_answer_count: 0,
      incorrect_answer_count: 0,
    },
    medium: {
      total_answer_count: 0,
      correct_answer_count: 0,
      incorrect_answer_count: 0,
    },
    hard: {
      total_answer_count: 0,
      correct_answer_count: 0,
      incorrect_answer_count: 0,
    },
  };

  Object.values(answers).forEach((answer) => {
    const { difficulty, isAnsweredCorrect } = answer;
    const bucket = stats[difficulty];

    bucket.total_answer_count += 1;
    if (isAnsweredCorrect) {
      bucket.correct_answer_count += 1;
    } else {
      bucket.incorrect_answer_count += 1;
    }
  });

  return stats;
}

export { getUserDifficultyStats };
