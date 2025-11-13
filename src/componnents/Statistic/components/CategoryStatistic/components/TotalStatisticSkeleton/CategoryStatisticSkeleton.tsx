import { KPICardSkeleton } from "../../../../../Charts/KPICard/components/KPICard.Skeleton";
import { PieChartSkeleton } from "../../../../../Charts/StatusPieChart/components/PieChart.Skeleton";

import styles from '../../CategoryStatistic.module.css'

function CategoryStatisticSkeleton() {
    return (
        <div className={styles.totalStatistic}>
            <div className={styles.topGrid}>
                <div className={styles.kpiGrid}>
                    <KPICardSkeleton />
                    <KPICardSkeleton />
                    <KPICardSkeleton />
                    <KPICardSkeleton />
                </div>
                <div className={styles.pieChartWrapper}>
                    <PieChartSkeleton />
                </div>
            </div>
        </div>
    );
}

export {
    CategoryStatisticSkeleton
}