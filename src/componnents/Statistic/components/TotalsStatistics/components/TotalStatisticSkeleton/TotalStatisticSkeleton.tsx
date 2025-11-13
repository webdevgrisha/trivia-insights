import { BarChartSkeleton } from "../../../../../Charts/CategoriesBarChart/components/BarChart.Skeleton";
import { KPICardSkeleton } from "../../../../../Charts/KPICard/components/KPICard.Skeleton";
import { PieChartSkeleton } from "../../../../../Charts/StatusPieChart/components/PieChart.Skeleton";

import styles from '../../TotalStatistic.module.css'

function TotalStatisticSkeleton() {
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
            <div className={styles.barChartWrapper}>
                <BarChartSkeleton />
            </div>
        </div>
    );
}

export {
    TotalStatisticSkeleton
}