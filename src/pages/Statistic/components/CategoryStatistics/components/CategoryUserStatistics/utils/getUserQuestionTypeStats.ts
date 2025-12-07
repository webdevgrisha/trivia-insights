import type { AnswerMap } from '../../../../../../Questions/types/types';
import type { UserQuestionStatisticByType } from '../types/interfaces';

function getUserQuestionTypeStats(answers: AnswerMap): UserQuestionStatisticByType {
  const stats: UserQuestionStatisticByType = {
    multiple: {
      total_answer_count: 0,
      correct_answer_count: 0,
      incorrect_answer_count: 0,
    },
    boolean: {
      total_answer_count: 0,
      correct_answer_count: 0,
      incorrect_answer_count: 0,
    },
  };

  Object.values(answers).forEach((answer) => {
    const { type, isAnsweredCorrect } = answer;
    const bucket = stats[type];

    bucket.total_answer_count += 1;
    if (isAnsweredCorrect) {
      bucket.correct_answer_count += 1;
    } else {
      bucket.incorrect_answer_count += 1;
    }
  });

  return stats;
}

export { getUserQuestionTypeStats };
