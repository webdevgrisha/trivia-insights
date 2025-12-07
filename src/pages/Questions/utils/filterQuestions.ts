import type { QuestionData } from '../../../types/interfaces';
import type { QuestionFilterType } from '../types/interfaces';
import type { AnswerMap } from '../types/types';
import { getQuestionId } from './getQuestionId';

interface FilteredQuestionsProps {
  questions: QuestionData[];
  filters: QuestionFilterType;
  answers: AnswerMap;
}

function filterQuestions({ questions, filters, answers }: FilteredQuestionsProps): QuestionData[] {
  const filteredQuestions = questions.filter((q) => {
    if (!filters.isAnswered) return true;

    const questionId = getQuestionId(q);

    const isAnswered = questionId in answers;

    if (filters.isAnswered === 'answered' && isAnswered) return true;
    if (filters.isAnswered === 'unanswered' && !isAnswered) return true;

    return false;
  });

  return filteredQuestions;
}

export { filterQuestions };
