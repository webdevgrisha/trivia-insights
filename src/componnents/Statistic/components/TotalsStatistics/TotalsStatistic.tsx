import React from "react";
import { useCategories } from "../../../Categories/hooks/useCategories";
import { KPICard } from "../../../Charts";
import { CategoriesBarChart } from "../../../Charts/CategoriesBarChart/CategoriesBarChart";
import { useAllCategoriesStatistics } from "../../hooks/useAllCategoriesStatistics";
import type { BarInfo, PieConfig, PieFormatData, PieInfo } from "../../types/interfaces";

import styles from "./TotalsStatistic.module.css";
import { KPICardSkeleton } from "../../../Charts/KPICard/components/KPICard.Skeleton";
import { BarChartSkeleton } from "../../../Charts/CategoriesBarChart/components/BarChart.Skeleton";
import { StatusPieChart } from "../../../Charts/StatusPieChart/StatusPieChart";
import { formatCategoriesTotalStatistics, formatPieData } from "../../utils";
import { PieChartSkeleton } from "../../../Charts/StatusPieChart/components/PieChart.Skeleton";

const barInfo: BarInfo[] = [
    { dataKey: "verified", name: "Verified", fill: "#22c55e" },
    { dataKey: "pending", name: "Pending", fill: "#f59e0b" },
    { dataKey: "rejected", name: "Rejected", fill: "#ef4444" },
];

const pieConfig: PieConfig[] = [
    { name: "Verified", key: "total_num_of_verified_questions", fill: "#22c55e" },
    { name: "Pending", key: "total_num_of_pending_questions", fill: "#f59e0b" },
    { name: "Rejected", key: "total_num_of_rejected_questions", fill: "#ef4444" },
];

function TotalsStatistics() {
    const { allTotals, categoriesTotals, isLoading } = useAllCategoriesStatistics();
    const { categories, isLoading: isCategoriesLoading } = useCategories();

    const [activeTotalsID, setActiveTotalsID] = React.useState<string | null>(null);

    const loading = isLoading || isCategoriesLoading;

    const activeCategoryTotals =
        activeTotalsID ? categoriesTotals?.[activeTotalsID] : allTotals;

    const barChartData = React.useMemo(() => {
        return formatCategoriesTotalStatistics(categoriesTotals || {}, categories || {})
    }, [categories, categoriesTotals]);

    const pieChartData: PieInfo[] = React.useMemo(() => {
        return formatPieData(pieConfig, (activeCategoryTotals || {}) as PieFormatData)
    }, [activeCategoryTotals])

    if (loading) {
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

    return (
        <div className={styles.totalStatistic}>
            <div className={styles.topGrid}>
                <div className={styles.kpiGrid}>
                    <KPICard name="Total Question" value={activeCategoryTotals?.total_num_of_questions} />
                    <KPICard name="Total Pending Question" value={activeCategoryTotals?.total_num_of_pending_questions} />
                    <KPICard name="Total Verified Question" value={activeCategoryTotals?.total_num_of_verified_questions} />
                    <KPICard name="Total Rejected" value={activeCategoryTotals?.total_num_of_rejected_questions} />
                </div>

                <div className={styles.pieChartWrapper}>
                    <StatusPieChart data={pieChartData} />
                </div>
            </div>

            <div className={styles.barChartWrapper}>
                <CategoriesBarChart
                    barInfo={barInfo}
                    data={barChartData}
                    onClick={(id: string | null) => setActiveTotalsID(id)}
                />
            </div>
        </div>
    );

}

export { TotalsStatistics };
