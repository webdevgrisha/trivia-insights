import { BarChartSkeleton } from '../../../../../../components/Charts/CategoriesBarChart/components/BarCahrtSkeleton/BarChartSkeleton';
import { KPICardSkeleton } from '../../../../../../components/Charts/KPICard/components/KPICardSkeleton/KPICardSkeleton';
import { PieChartSkeleton } from '../../../../../../components/Charts/StatusPieChart/components/PieChartSkeleton/PieChartSkeleton';
import styles from '../../../StatisticLayout.module.css';

function TotalStatisticSkeleton() {
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

      <section className={styles.statisticSection}>
        <div className={styles.statisticBarWrapper}>
          <BarChartSkeleton />
        </div>
      </section>
    </div>
  );
}

export { TotalStatisticSkeleton };
