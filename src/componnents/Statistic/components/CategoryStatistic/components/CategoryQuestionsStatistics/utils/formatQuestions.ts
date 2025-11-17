import type { Question } from '../../../../../../../types/interfaces';
import type { Convertor, QuestionStatisticByType } from '../types/types';

const convertor: Convertor = {
  easy: 'total_easy_question_count',
  medium: 'total_medium_question_count',
  hard: 'total_hard_question_count',
};

function formatQuestions(questions: Question[]): QuestionStatisticByType {
  const questionStatisticByType: QuestionStatisticByType = {
    multiple: {
      total_question_count: 0,
      total_easy_question_count: 0,
      total_medium_question_count: 0,
      total_hard_question_count: 0,
    },
    boolean: {
      total_question_count: 0,
      total_easy_question_count: 0,
      total_medium_question_count: 0,
      total_hard_question_count: 0,
    },
  };

  questions.forEach((question) => {
    const { type, difficulty } = question;
    const difficultyKey = convertor[difficulty];

    questionStatisticByType[type][difficultyKey] += 1;
    questionStatisticByType[type].total_question_count += 1;
  });

  return questionStatisticByType;
}

export { formatQuestions };
