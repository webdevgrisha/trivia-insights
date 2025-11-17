import { KPICard, StatusPieChart } from '../../../Charts';
import { ChartTitle } from '../../../Charts/common';
import type { PieInfo } from '../../../Charts/StatusPieChart/types/interfaces';
import type { KPICardConfig } from '../../types/interfaces';
import layoutStyles from '../StatisticLayout.module.css';

interface KPIAndPieSectionProps<T> {
  kpiConfig: KPICardConfig<T>[];
  totals?: T;
  pieData: PieInfo[];
  selectedKPIKey: keyof T | null;
  onSelectKPI: (key: keyof T | null) => void;
  title?: string;
}

function KPIAndPieSection<T>({
  kpiConfig,
  totals,
  pieData,
  selectedKPIKey,
  onSelectKPI,
  title,
}: KPIAndPieSectionProps<T>) {
  return (
    <section className={layoutStyles.statisticSection}>
      {title && <ChartTitle title={title} />}

      <div className={layoutStyles.statisticKpiPieGrid}>
        <div className={layoutStyles.statisticKpiGrid}>
          {kpiConfig.map(({ key, name }) => {
            const value = totals?.[key] as number | undefined;
            const isActive = selectedKPIKey === key;

            return (
              <KPICard
                key={key}
                name={name}
                value={value}
                isActive={isActive}
                onClick={() => onSelectKPI(key)}
              />
            );
          })}
        </div>

        <div className={layoutStyles.statisticPieWrapper}>
          <StatusPieChart
            data={pieData}
            onClick={(key) => onSelectKPI(key as keyof T | null)}
            activeKey={selectedKPIKey as string | null}
          />
        </div>
      </div>
    </section>
  );
}

export { KPIAndPieSection };
