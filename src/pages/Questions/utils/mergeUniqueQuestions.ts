import type { QuestionData } from '../../../types/interfaces';
import { getQuestionId } from './getQuestionId';

function mergeUniqueQuestions(prev: QuestionData[], next: QuestionData[]): QuestionData[] {
  const existingIds = new Set(prev.map((q) => getQuestionId(q)));

  const uniqueNew = next.filter((q) => {
    const id = getQuestionId(q);

    if (existingIds.has(id)) return false;

    existingIds.add(id);

    return true;
  });

  return [...prev, ...uniqueNew];
}

export { mergeUniqueQuestions };
