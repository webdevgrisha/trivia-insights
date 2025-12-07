import React from 'react';
import type { PieInfo } from '../../../../../../../../components/Charts/StatusPieChart/types/interfaces';
import { formatPieData } from '../../../../../../utils';
import { KPIAndPieSection } from '../../../../../KPIAndPieSection/KPIAndPieSection';
import { userKpiCardsConfig, userPieConfig } from '../../config/userChartsConfigs';
import type { UserCategoryQuestionStatistic } from '../../types/interfaces';

interface UserTypeQuestionStatisticsProps {
  totals: UserCategoryQuestionStatistic;
  title: string;
}

function UserTypeQuestionStatistics({ totals, title }: UserTypeQuestionStatisticsProps) {
  const [selectedKPIKey, setSelectedKPIKey] = React.useState<
    keyof UserCategoryQuestionStatistic | null
  >(null);

  const pieChartData: PieInfo[] = React.useMemo(() => {
    return formatPieData(userPieConfig, totals);
  }, [totals]);

  const handleSetSelectedKPIKey = React.useCallback(
    (key: keyof UserCategoryQuestionStatistic | null) => {
      setSelectedKPIKey((prev) => (prev === key ? null : key));
    },
    []
  );

  return (
    <KPIAndPieSection<UserCategoryQuestionStatistic>
      kpiConfig={userKpiCardsConfig}
      totals={totals}
      pieData={pieChartData}
      selectedKPIKey={selectedKPIKey}
      onSelectKPI={handleSetSelectedKPIKey}
      title={title}
    />
  );
}

export { UserTypeQuestionStatistics };
