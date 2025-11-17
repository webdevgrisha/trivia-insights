import React from 'react';

import layoutStyles from '../StatisticLayout.module.css';
import styles from './CategoryStatistic.module.css';
import { CategoryQuestionsStatistics } from './components';
import { CategoryTotalsStatistics } from './components/CategoryTotalsStatistics/CategoryTotalsStatistics';
import { useCategoryStatistics } from './hooks/useCategoryStatistics';

interface CategoryStatisticsProps {
  categoryId: string;
}

function CategoryStatistics({ categoryId }: CategoryStatisticsProps) {
  const { totals, isLoading, isError } = useCategoryStatistics(categoryId);

  const [showExtra, setShowExtra] = React.useState(false);

  const handleToggleExtra = () => {
    setShowExtra((prev) => !prev);
  };

  return (
    <div className={layoutStyles.statisticRoot}>
      <CategoryTotalsStatistics totals={totals} isLoading={isLoading} isError={isError} />
      <button
        type="button"
        className={styles.toggleButton}
        onClick={handleToggleExtra}
        aria-expanded={showExtra}
      >
        {showExtra ? 'Hide question type statistics' : 'Show question type statistics'}
      </button>

      {showExtra && !isError && (
        <CategoryQuestionsStatistics
          categoryId={categoryId}
          questionCount={totals?.total_question_count || 0}
        />
      )}
    </div>
  );
}

export { CategoryStatistics };
