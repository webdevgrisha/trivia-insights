import { useSearchParams } from 'react-router';
import type { TabId } from '../../types/interfaces';
import layoutStyles from '../StatisticLayout.module.css';
import { StatisticTabs } from '../StatisticTabs/StatisticTabs';
import {
  CategoryAdditionalStatistics,
  CategoryGeneralStatistics,
  CategoryUserStatistics,
} from './components';
import { TABS } from './config/tabsConfig';
import { useCategoryStatistics } from './hooks/useCategoryStatistics';

interface CategoryStatisticsProps {
  categoryId: string;
}

function CategoryStatistics({ categoryId }: CategoryStatisticsProps) {
  const { totals, isLoading, isError } = useCategoryStatistics(categoryId);

  const [searchParams] = useSearchParams();

  const tab = (searchParams.get('tab') as TabId | null) ?? 'general';

  return (
    <div className={layoutStyles.statisticRoot}>
      <StatisticTabs tabs={TABS} />
      {tab === 'general' && (
        <CategoryGeneralStatistics totals={totals} isLoading={isLoading} isError={isError} />
      )}

      {tab === 'additional' && (
        <CategoryAdditionalStatistics
          categoryId={categoryId}
          questionCount={totals?.total_question_count || 0}
        />
      )}

      {tab === 'user' && <CategoryUserStatistics categoryId={categoryId} />}
    </div>
  );
}

export { CategoryStatistics };
