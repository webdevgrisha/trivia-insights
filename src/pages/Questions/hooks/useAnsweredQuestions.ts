import React from 'react';
import { useImmer } from 'use-immer';
import type { QuestionData } from '../../../types/interfaces';
import { Cache } from '../../../utils';
import type { AnswerMap } from '../types/types';
import { getQuestionId } from '../utils/getQuestionId';

interface SetAnswerProps {
  question: QuestionData;
  savedAnswer: string;
  isAnsweredCorrect: boolean;
}

const CACHE_PREFIX = 'answered-questions';

function initAnswerQuestion(categoryId: string): AnswerMap {
  const cacheKey = Cache.getKey(CACHE_PREFIX, categoryId);
  const cached = Cache.load<AnswerMap>(cacheKey);

  return cached ?? {};
}

function useAnsweredQuestions(categoryId: string) {
  const [answers, setAnswers] = useImmer<AnswerMap>(() => initAnswerQuestion(categoryId));

  React.useEffect(() => {
    setAnswers(initAnswerQuestion(categoryId));
  }, [categoryId, setAnswers]);

  React.useEffect(() => {
    const cacheKey = Cache.getKey(CACHE_PREFIX, categoryId);

    Cache.save<AnswerMap>(cacheKey, answers);
  }, [answers, categoryId]);

  const answerQuestion = React.useCallback(
    ({ question, savedAnswer, isAnsweredCorrect }: SetAnswerProps) => {
      setAnswers((draft) => {
        const questionId = getQuestionId(question);

        draft[questionId] = {
          ...question,
          savedAnswer,
          isAnsweredCorrect,
        };
      });
    },
    [setAnswers]
  );

  const resetAnswers = React.useCallback(() => {
    const cacheKey = Cache.getKey(CACHE_PREFIX, categoryId);

    Cache.remove(cacheKey);
    setAnswers({});
  }, [categoryId, setAnswers]);

  return {
    answers,
    answerQuestion,
    resetAnswers,
  };
}

export { useAnsweredQuestions };
