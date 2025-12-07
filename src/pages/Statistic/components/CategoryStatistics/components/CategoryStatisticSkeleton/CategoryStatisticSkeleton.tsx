import { KPICardSkeleton } from '../../../../../../components/Charts/KPICard/components/KPICardSkeleton/KPICardSkeleton';
import { PieChartSkeleton } from '../../../../../../components/Charts/StatusPieChart/components/PieChartSkeleton/PieChartSkeleton';

import styles from '../../../StatisticLayout.module.css';

function CategoryStatisticSkeleton() {
  return (
    <div className={styles.statisticRoot}>
      <section className={styles.statisticSection}>
        <div className={styles.statisticKpiPieGrid}>
          <div className={styles.statisticKpiGrid}>
            <KPICardSkeleton />
            <KPICardSkeleton />
            <KPICardSkeleton />
            <KPICardSkeleton />
          </div>

          <div className={styles.statisticPieWrapper}>
            <PieChartSkeleton />
          </div>
        </div>
      </section>
    </div>
  );
}

export { CategoryStatisticSkeleton };
