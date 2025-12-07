import type { CategoryInfo } from '../../../../../../../components/Charts/CategoriesBarChart/types/interfaces';
import type { QuestionData } from '../../../../../../../types/interfaces';
import { QUESTION_LENGTH_BINS } from '../config/chartsConfigs';
import type { LengthBin } from '../types/interfaces';

function getQuestionLength(question: QuestionData): number {
  return question.question.length;
}

function findBin(length: number): LengthBin | undefined {
  return QUESTION_LENGTH_BINS.find((bin) => {
    const fromOk = length >= bin.from;
    const toOk = bin.to == null ? true : length <= bin.to;
    return fromOk && toOk;
  });
}

function createQuestionLengthHistogram(questions: QuestionData[]): CategoryInfo[] {
  const histogram: CategoryInfo[] = QUESTION_LENGTH_BINS.map((bin) => ({
    id: bin.id,
    name: bin.label,
    question_count: 0,
  }));

  questions.forEach((question) => {
    const length = getQuestionLength(question);
    const bin = findBin(length);

    if (!bin) return;

    const bucket = histogram.find((item) => item.id === bin.id);
    if (!bucket) return;

    bucket.question_count = (bucket.question_count as number) + 1;
  });

  return histogram;
}

export { createQuestionLengthHistogram };
