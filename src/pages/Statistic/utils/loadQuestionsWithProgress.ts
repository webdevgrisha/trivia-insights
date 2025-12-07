import { fetchOpenTDBQuestions } from '../../../http/fetchOpenTDBQuestions';
import { fetchOpenTDBToken } from '../../../http/fetchOpenTDBToken';
import type { Question } from '../../../types/interfaces';
import { sleep } from '../../../utils';

const MAX_QUESTION_COUNT_PER_REQUEST = 50;
const DELAY_BETWEEN_REQUESTS_MS = 5000;

interface LoadQuestionWithProgressProps {
  categoryId: string;
  questionCount: number;
  onProgress: (load: number, total: number) => void;
  signal?: AbortSignal;
}

async function loadQuestionsWithProgress({
  categoryId,
  questionCount,
  onProgress,
  signal,
}: LoadQuestionWithProgressProps): Promise<Question[]> {
  if (questionCount === 0) return [];

  if (signal?.aborted) {
    throw new DOMException('Aborted', 'AbortError');
  }

  const token = await fetchOpenTDBToken({ signal });

  let currQuestionCount = questionCount;
  let loadedCount = 0;

  const allQuestions: Question[] = [];

  while (currQuestionCount > 0) {
    if (signal?.aborted) {
      throw new DOMException('Aborted', 'AbortError');
    }

    const amount =
      currQuestionCount >= MAX_QUESTION_COUNT_PER_REQUEST
        ? MAX_QUESTION_COUNT_PER_REQUEST
        : currQuestionCount;

    const params = { category: categoryId, token, amount };

    const question = await fetchOpenTDBQuestions(params, { signal });

    allQuestions.push(...question);
    loadedCount += amount;

    onProgress(loadedCount, questionCount);

    currQuestionCount -= amount;

    if (currQuestionCount > 0) {
      await sleep(DELAY_BETWEEN_REQUESTS_MS);
    }
  }

  return allQuestions;
}

export { loadQuestionsWithProgress };
