import React from 'react';
import type { Question } from '../../../../../../../types/interfaces';
import { loadQuestionsWithProgress } from '../../../../../utils';

const CACHE_PREFIX = 'question-stat';

function getCacheKey(categoryId: string, questionCount: number) {
  return `${CACHE_PREFIX}:${categoryId}:${questionCount}`;
}

function readFromCache(key: string): Question[] | null {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return null;

    const parsed = JSON.parse(raw) as { data: Question[] };
    if (!Array.isArray(parsed.data)) return null;

    return parsed.data;
  } catch {
    return null;
  }
}

function saveToCache(key: string, data: Question[]) {
  try {
    const payload = JSON.stringify({ data });
    localStorage.setItem(key, payload);
    // biome-ignore lint/suspicious/noEmptyBlockStatements: <explanation>
  } catch {}
}

function useQuestionStatistic(categoryId: string | null, questionCount: number = 0) {
  const [data, setData] = React.useState<Question[] | null>(null);
  const [error, setError] = React.useState<unknown>(null);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [loaded, setLoaded] = React.useState(0);

  const abortRef = React.useRef<AbortController | null>(null);

  React.useEffect(() => {
    abortRef.current?.abort();

    if (!categoryId || questionCount <= 0) {
      setData(null);
      setError(null);
      setIsLoading(false);
      setLoaded(0);
      abortRef.current = null;
      return;
    }

    const controller = new AbortController();
    abortRef.current = controller;

    const cacheKey = getCacheKey(categoryId, questionCount);
    const cached = readFromCache(cacheKey);
    if (cached) {
      setData(cached);
      setLoaded(cached.length || questionCount);
      setError(null);
      setIsLoading(false);
      return;
    }

    setIsLoading(true);
    setError(null);
    setData(null);
    setLoaded(0);

    loadQuestionsWithProgress({
      categoryId,
      questionCount,
      signal: controller.signal,
      onProgress: (loadedCount) => setLoaded(loadedCount),
    })
      .then((questions) => {
        if (controller.signal.aborted) return;
        setData(questions);
        saveToCache(cacheKey, questions);
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
