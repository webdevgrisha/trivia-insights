import React from 'react';
import type { HttpParams } from '../../../http/fetcher';
import { fetchOpenTDBQuestions } from '../../../http/fetchOpenTDBQuestions';
import { fetchOpenTDBToken } from '../../../http/fetchOpenTDBToken';
import type { QuestionData } from '../../../types/interfaces';
import type { Difficulty, QuestionType } from '../types/types';
import { mergeUniqueQuestions } from '../utils/mergeUniqueQuestions';

interface UseQuestionsProps {
  difficulty?: Difficulty | null;
  type?: QuestionType | null;
  category?: string | null;
}

const QUESTIONS_AMOUNT = 10;

function useQuestions({ difficulty, type, category }: UseQuestionsProps) {
  const [questions, setQuestions] = React.useState<QuestionData[]>([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const [isFinished, setIsFinished] = React.useState(false);

  const tokenRef = React.useRef<string | null>(null);

  const loadQuestions = React.useCallback(
    async (signal?: AbortSignal) => {
      if (isFinished || isLoading) return;
      if (signal?.aborted) return;

      setIsLoading(true);
      setError(null);

      try {
        let currentToken = tokenRef.current;

        if (!currentToken) {
          currentToken = await fetchOpenTDBToken({ signal });

          if (signal?.aborted) return;

          tokenRef.current = currentToken;
        }

        const params: HttpParams = {
          amount: QUESTIONS_AMOUNT,
          token: currentToken,
          difficulty: difficulty ?? undefined,
          type: type ?? undefined,
          category: category ?? undefined,
        };

        const data = await fetchOpenTDBQuestions(params, { signal });

        if (signal?.aborted) return;

        setQuestions((prev) => mergeUniqueQuestions(prev, data));
      } catch (err) {
        if (signal?.aborted) return;
        if (err instanceof DOMException && err.name === 'AbortError') return;

        const message = err instanceof Error ? err.message : String(err);

        if (message.includes('token empty')) {
          setIsFinished(true);
          setError(null);
        } else {
          setQuestions([]);
          setError(message);
        }
      } finally {
        if (!signal?.aborted) {
          setIsLoading(false);
        }
      }
    },
    [difficulty, type, category, isFinished, isLoading]
  );

  // biome-ignore lint: false positive
  React.useEffect(() => {
    const controller = new AbortController();

    setQuestions([]);
    setIsFinished(false);
    setError(null);

    tokenRef.current = null;

    loadQuestions(controller.signal);

    return () => controller.abort();
  }, [category, difficulty, type]);

  return {
    questions,
    isLoading,
    error,
    isFinished,
    refetch: loadQuestions,
  };
}

export { useQuestions };
