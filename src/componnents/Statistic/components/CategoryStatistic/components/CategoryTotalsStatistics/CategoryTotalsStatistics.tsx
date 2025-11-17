import React from 'react';
import type { PieInfo } from '../../../../../Charts/StatusPieChart/types/interfaces';
import { ErrorStatus } from '../../../../../Statuses';
import type { PieFormatData } from '../../../../types/interfaces';
import { formatPieData } from '../../../../utils';
import { KPIAndPieSection } from '../../../KPIAndPieSection/KPIAndPieSection';
import layoutStyles from '../../../StatisticLayout.module.css';
import { kpiCardsConfig, pieConfig } from '../../config/chartsConfigs';
import type { CategoryQuestionStatistic } from '../../types/interfaces';
import { CategoryStatisticSkeleton } from '../CategoryStatisticSkeleton/CategoryStatisticSkeleton';

interface CategoryTotalsStatisticsProps {
  isLoading: boolean;
  isError: Error | undefined;
  totals?: CategoryQuestionStatistic;
}

function CategoryTotalsStatistics({ totals, isLoading, isError }: CategoryTotalsStatisticsProps) {
  const [selectedKPIKey, setSelectedKPIKey] = React.useState<
    keyof CategoryQuestionStatistic | null
  >(null);

  const pieChartData: PieInfo[] = React.useMemo(() => {
    return formatPieData(pieConfig, (totals || {}) as PieFormatData);
  }, [totals]);

  const handleSetSelectedKPIKey = React.useCallback(
    (key: keyof CategoryQuestionStatistic | null) => {
      setSelectedKPIKey((prev) => (prev === key ? null : key));
    },
    []
  );

  if (isError) {
    return (
      <div className={layoutStyles.statisticStatus}>
        <ErrorStatus
          title="Failed to load statistics"
          text="Please check your connection and try again."
        />
      </div>
    );
  }

  if (isLoading) return <CategoryStatisticSkeleton />;

  return (
    <KPIAndPieSection<CategoryQuestionStatistic>
      kpiConfig={kpiCardsConfig}
      totals={totals}
      pieData={pieChartData}
      selectedKPIKey={selectedKPIKey}
      onSelectKPI={handleSetSelectedKPIKey}
      title="Category statistics"
    />
  );
}

export { CategoryTotalsStatistics };
