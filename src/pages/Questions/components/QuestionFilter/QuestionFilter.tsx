import type { QuestionFilterType } from '../../types/interfaces';
import styles from './QuestionFilter.module.css';

interface QuestionFilterProps {
  filters: QuestionFilterType;
  onFilterChange: <K extends keyof QuestionFilterType>(name: K, rawValue: string) => void;
  onResetAnswers: () => void;
  onResetFilters: () => void;
  onApplyFilters: () => void;
}

function QuestionFilter({
  filters,
  onFilterChange,
  onResetAnswers,
  onResetFilters,
  onApplyFilters,
}: QuestionFilterProps) {
  return (
    <div className={styles.filters}>
      <div className={styles.filter}>
        <label className={styles.label} htmlFor="difficulty-select">
          Select Difficulty:
        </label>
        <select
          id="difficulty-select"
          value={filters.difficulty || ''}
          onChange={(event) => onFilterChange('difficulty', event.target.value)}
          className={styles.select}
        >
          <option value="">All</option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </div>

      <div className={styles.filter}>
        <label className={styles.label} htmlFor="type-select">
          Select Type:
        </label>
        <select
          id="type-select"
          value={filters.type || ''}
          onChange={(event) => onFilterChange('type', event.target.value)}
          className={styles.select}
        >
          <option value="">All</option>
          <option value="boolean">True / False</option>
          <option value="multiple">Multiple Choice</option>
        </select>
      </div>

      <div className={styles.filter}>
        <label className={styles.label} htmlFor="answer-select">
          Answer status:
        </label>
        <select
          id="answer-select"
          value={filters.isAnswered || ''}
          onChange={(event) => onFilterChange('isAnswered', event.target.value)}
          className={styles.select}
        >
          <option value="">All</option>
          <option value="answered">Answered</option>
          <option value="unanswered">Unanswered</option>
        </select>
      </div>

      <div className={styles.actions}>
        <button type="button" className={styles.resetButton} onClick={onResetFilters}>
          Reset filters
        </button>
        <button type="button" className={styles.resetButton} onClick={onResetAnswers}>
          Reset saved answers
        </button>
        <button type="button" className={styles.applyButton} onClick={onApplyFilters}>
          Apply filters
        </button>
      </div>
    </div>
  );
}

export { QuestionFilter };
