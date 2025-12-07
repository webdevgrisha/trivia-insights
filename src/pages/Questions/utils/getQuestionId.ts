import type { QuestionData } from '../../../types/interfaces';

function getQuestionId(question: QuestionData) {
  return question.question;
}

export { getQuestionId };
