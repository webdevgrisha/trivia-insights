import React from 'react';
import toast from 'react-hot-toast';
import { Loader } from '../../components/Loader/Loader';
import { ErrorStatus, NoDataStatus } from '../../components/Statuses';
import { useCategoryId } from '../../hooks/useCategoryId';
import type { QuestionData } from '../../types/interfaces';
import { ConfirmResetToast, Question, QuestionFilter, QuestionsSkeleton } from './components';
import { useAnsweredQuestions } from './hooks/useAnsweredQuestions';
import { useFilter } from './hooks/useFilter';
import { useInfiniteScroll } from './hooks/useInfiniteScroll';
import { useQuestions } from './hooks/useQuestions';
import styles from './Questions.module.css';
import { filterQuestions, getQuestionId } from './utils';

function Questions() {
  const { categoryId: currentCategoryId } = useCategoryId();

  const { draftFilters, appliedFilters, handleDraftFilterChange, applyFilters, resetFilters } =
    useFilter();

  const { answers, answerQuestion, resetAnswers } = useAnsweredQuestions(currentCategoryId);

  const { questions, isLoading, error, isFinished, refetch } = useQuestions({
    difficulty: appliedFilters.difficulty,
    type: appliedFilters.type,
    category: currentCategoryId,
  });

  const { loaderRef } = useInfiniteScroll({
    isLoading,
    isFinished,
    hasError: !!error,
    onLoadMore: refetch,
  });

  const confirmToastIdRef = React.useRef<string | null>(null);

  const filteredQuestions = React.useMemo(
    () => filterQuestions({ questions, filters: appliedFilters, answers }),
    [appliedFilters, answers, questions]
  );

  const handleAnswer = React.useCallback(
    (question: QuestionData, answer: string) => {
      const isAnsweredCorrect = question.correct_answer === answer;
      answerQuestion({ savedAnswer: answer, question, isAnsweredCorrect });
    },
    [answerQuestion]
  );

  const handleResetAnswersWithConfirm = React.useCallback(() => {
    if (confirmToastIdRef.current) {
      toast.dismiss(confirmToastIdRef.current);
      confirmToastIdRef.current = null;
    }

    const id = toast(
      (t) => (
        <ConfirmResetToast
          onConfirm={() => {
            resetAnswers();
            toast.dismiss(t.id);
            confirmToastIdRef.current = null;
            toast.success('Saved answers have been reset');
          }}
          onCancel={() => {
            toast.dismiss(t.id);
            confirmToastIdRef.current = null;
          }}
        />
      ),
      { duration: Infinity }
    );

    confirmToastIdRef.current = id;
  }, [resetAnswers]);

  const isInitialLoading = isLoading && questions.length === 0;

  return (
    <section className={styles.wrapper}>
      <div className={styles.controls}>
        <QuestionFilter
          filters={draftFilters}
          onFilterChange={handleDraftFilterChange}
          onResetAnswers={handleResetAnswersWithConfirm}
          onResetFilters={resetFilters}
          onApplyFilters={applyFilters}
        />
      </div>

      <div className={styles.list}>
        {isInitialLoading &&
          Array.from({ length: 5 }).map((_, index) => <QuestionsSkeleton key={index} />)}

        {!isInitialLoading &&
          filteredQuestions.map((question) => {
            const questionId = getQuestionId(question);
            const savedAnswer = answers[questionId]?.savedAnswer;

            return (
              <Question
                key={questionId}
                question={question}
                savedAnswer={savedAnswer}
                onAnswer={(answer: string) => handleAnswer(question, answer)}
              />
            );
          })}

        {!isInitialLoading && filteredQuestions.length === 0 && !error && (
          <NoDataStatus title="No questions for selected filters" className={styles.empty} />
        )}

        {!isInitialLoading && error && (
          <ErrorStatus title="Failed to load questions" text={error} className={styles.empty} />
        )}

        {!isInitialLoading && isLoading && questions.length > 0 && (
          <Loader label="Loading more questions..." />
        )}

        {!isInitialLoading && !isFinished && !error && (
          <div ref={loaderRef} className={styles.loaderSentinel} aria-hidden="true" />
        )}
      </div>
    </section>
  );
}

export { Questions };
