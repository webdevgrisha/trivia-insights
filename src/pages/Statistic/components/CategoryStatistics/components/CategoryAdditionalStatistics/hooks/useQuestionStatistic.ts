import React from 'react';
import type { QuestionData } from '../../../../../../../types/interfaces';
import { Cache } from '../../../../../../../utils';
import { loadQuestionsWithProgress } from '../../../../../utils';

const CACHE_PREFIX = 'question-stat';
const TWO_WEEKS = 2 * 7 * 24 * 60 * 60 * 1000;

function useQuestionStatistic(categoryId: string, questionCount: number = 0) {
  const [data, setData] = React.useState<QuestionData[] | null>(null);
  const [error, setError] = React.useState<unknown>(null);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [loaded, setLoaded] = React.useState(0);

  const abortRef = React.useRef<AbortController | null>(null);

  React.useEffect(() => {
    abortRef.current?.abort();

    setIsLoading(true);
    setError(null);
    setData(null);
    setLoaded(0);

    if (!categoryId) {
      abortRef.current = null;
      setIsLoading(false);

      return;
    }

    const cacheKey = Cache.getKey(CACHE_PREFIX, categoryId);
    const cached = Cache.load<QuestionData[]>(cacheKey);

    if (cached) {
      setData(cached);
      setLoaded(cached.length || questionCount);
      setIsLoading(false);
      abortRef.current = null;

      return;
    }

    if (questionCount <= 0) {
      abortRef.current = null;

      return;
    }

    const controller = new AbortController();
    abortRef.current = controller;

    loadQuestionsWithProgress({
      categoryId,
      questionCount,
      signal: controller.signal,
      onProgress: (loadedCount) => setLoaded(loadedCount),
    })
      .then((questions) => {
        if (controller.signal.aborted) return;

        setData(questions);

        Cache.save<QuestionData[]>(cacheKey, questions, TWO_WEEKS);
      })
      .catch((err) => {
        if (controller.signal.aborted) return;

        if ((err as DOMException).name !== 'AbortError') {
          setError(err);
        }
      })
      .finally(() => {
        if (controller.signal.aborted) return;

        setIsLoading(false);
      });

    return () => {
      controller.abort();
    };
  }, [categoryId, questionCount]);

  const progress = questionCount > 0 ? Math.floor((loaded / questionCount) * 100) : 0;

  return {
    data,
    error,
    isLoading,
    progress,
  };
}

export { useQuestionStatistic };
