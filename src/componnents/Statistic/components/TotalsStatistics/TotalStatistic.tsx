import React from 'react';
import { useCategories } from '../../../Categories/hooks/useCategories';
import { CategoriesBarChart } from '../../../Charts/CategoriesBarChart/CategoriesBarChart';
import { ChartTitle } from '../../../Charts/common';
import type { PieInfo } from '../../../Charts/StatusPieChart/types/interfaces';
import { ErrorStatus } from '../../../Statuses';
import type { PieFormatData } from '../../types/interfaces';
import { formatCategoriesTotalStatistics, formatPieData } from '../../utils';
import { KPIAndPieSection } from '../KPIAndPieSection/KPIAndPieSection';
import layoutStyles from '../StatisticLayout.module.css';
import { TotalStatisticSkeleton } from './components/TotalStatisticSkeleton/TotalStatisticSkeleton';
import { barInfo, kpiCardsConfig, pieConfig } from './config/chartsConfigs';
import { useAllCategoriesStatistics } from './hooks/useAllCategoriesStatistics';
import styles from './TotalStatistic.module.css';
import type { TotalStatistic } from './types/interfaces';

function TotalsStatistics() {
  const {
    allTotals,
    categoriesTotals,
    isLoading: isTotalsLoading,
    isError: isTotalsError,
  } = useAllCategoriesStatistics();

  const {
    categories,
    isLoading: isCategoriesLoading,
    isError: isCategoriesError,
  } = useCategories();

  const [activeTotalsID, setActiveTotalsID] = React.useState<string | null>(null);
  const [selectedKPIKey, setSelectedKPIKey] = React.useState<keyof TotalStatistic | null>(null);

  const loading = isTotalsLoading || isCategoriesLoading;
  const hasError = isTotalsError || isCategoriesError;

  const activeCategoryTotals = activeTotalsID ? categoriesTotals?.[activeTotalsID] : allTotals;

  const barChartData = React.useMemo(
    () => formatCategoriesTotalStatistics(categoriesTotals || {}, categories || {}),
    [categories, categoriesTotals]
  );

  const pieChartData: PieInfo[] = React.useMemo(
    () => formatPieData(pieConfig, (activeCategoryTotals || {}) as PieFormatData),
    [activeCategoryTotals]
  );

  const handleSetSelectedKPIKey = React.useCallback((key: keyof TotalStatistic | null) => {
    setSelectedKPIKey((prev) => (prev === key ? null : key));
  }, []);

  if (hasError) {
    return (
      <div className={layoutStyles.statisticStatus}>
        <ErrorStatus
          title="Failed to load statistics"
          text="Please check your connection and try again."
        />
      </div>
    );
  }

  if (loading) {
    return <TotalStatisticSkeleton />;
  }

  return (
    <div className={layoutStyles.statisticRoot}>
      <KPIAndPieSection<TotalStatistic>
        kpiConfig={kpiCardsConfig}
        totals={activeCategoryTotals}
        pieData={pieChartData}
        selectedKPIKey={selectedKPIKey}
        onSelectKPI={handleSetSelectedKPIKey}
        title="Total statistics"
      />

      <section className={layoutStyles.statisticSection}>
        <ChartTitle title="Statistics by category" />
        <div className={styles.statisticBarWrapper}>
          <CategoriesBarChart
            barInfo={barInfo}
            data={barChartData}
            onClick={(id: string | null) => setActiveTotalsID(id)}
          />
        </div>
      </section>
    </div>
  );
}

export { TotalsStatistics };
