import React from 'react';
import type { PieInfo } from '../../../../../../../../components/Charts/StatusPieChart/types/interfaces';
import type { PieFormatData } from '../../../../../../types/interfaces';
import { formatPieData } from '../../../../../../utils';
import { KPIAndPieSection } from '../../../../../KPIAndPieSection/KPIAndPieSection';
import { kpiCardsConfig, pieConfig } from '../../../../config/chartsConfigs';
import type { CategoryQuestionStatistic } from '../../../../types/interfaces';

interface TypeQuestionStatisticsProps {
  totals?: CategoryQuestionStatistic;
  title?: string;
}

function TypeQuestionStatistics({ totals, title }: TypeQuestionStatisticsProps) {
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

  return (
    <KPIAndPieSection<CategoryQuestionStatistic>
      kpiConfig={kpiCardsConfig}
      totals={totals}
      pieData={pieChartData}
      selectedKPIKey={selectedKPIKey}
      onSelectKPI={handleSetSelectedKPIKey}
      title={title}
    />
  );
}

export { TypeQuestionStatistics };
