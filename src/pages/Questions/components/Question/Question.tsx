import React from 'react';
import { getCategoryIconByName } from '../../../../components/Categories/icons/categoryIcons';
import type { QuestionData } from '../../../../types/interfaces';
import { decodeHtml } from '../../../../utils/decodeHtml';
import styles from './Question.module.css';

interface QuestionProps {
  question: QuestionData;
  savedAnswer?: string | null;
  onAnswer?: (answer: string) => void;
}

function Question({ question, savedAnswer = null, onAnswer }: QuestionProps) {
  const [selectedAnswer, setSelectedAnswer] = React.useState<string | null>(savedAnswer);

  React.useEffect(() => {
    setSelectedAnswer(savedAnswer);
  }, [savedAnswer]);

  const options = [...question.incorrect_answers, question.correct_answer];

  const isAnswered = selectedAnswer !== null;
  const isCorrect = isAnswered && selectedAnswer === question.correct_answer;

  const categoryIcon = React.useMemo(() => {
    return getCategoryIconByName(decodeHtml(question.category));
  }, [question.category]);

  const handleClick = (answer: string) => {
    if (isAnswered) return;

    setSelectedAnswer(answer);
    onAnswer?.(answer);
  };

  return (
    <article className={styles.card}>
      <header className={styles.header}>
        <span className={styles.category}>
          {categoryIcon && (
            <span className={styles.categoryIcon} aria-hidden="true">
              {categoryIcon}
            </span>
          )}
          {decodeHtml(question.category)}
        </span>

        <span className={`${styles.difficulty} ${styles[question.difficulty]}`}>
          {question.difficulty}
        </span>
      </header>

      <h2 className={styles.questionText}>{decodeHtml(question.question)}</h2>

      <div className={styles.options}>
        {options.map((option) => {
          const isSelected = selectedAnswer === option;
          const isCorrectOption = option === question.correct_answer;

          let optionClass = styles.option;

          if (isAnswered) {
            if (isSelected && isCorrectOption) {
              optionClass = `${styles.option} ${styles.optionCorrect}`;
            } else if (isSelected && !isCorrectOption) {
              optionClass = `${styles.option} ${styles.optionWrong}`;
            } else if (!isSelected && isCorrectOption) {
              optionClass = `${styles.option} ${styles.optionCorrect}`;
            }
          }

          return (
            <button
              key={option}
              type="button"
              className={optionClass}
              onClick={() => handleClick(option)}
              disabled={isAnswered}
            >
              {decodeHtml(option)}
            </button>
          );
        })}
      </div>

      {isAnswered && (
        <div className={styles.result}>
          {isCorrect ? (
            <p className={styles.correct}>Correct</p>
          ) : (
            <>
              <p className={styles.wrong}>Wrong</p>
              <p className={styles.correctAnswer}>
                Correct answer: <strong>{decodeHtml(question.correct_answer)}</strong>
              </p>
            </>
          )}
        </div>
      )}
    </article>
  );
}

export { Question };
