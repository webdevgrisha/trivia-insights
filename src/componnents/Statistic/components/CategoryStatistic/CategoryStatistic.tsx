import React from "react";
import { KPICard } from "../../../Charts";
import { KPICardSkeleton } from "../../../Charts/KPICard/components/KPICard.Skeleton";
import { PieChartSkeleton } from "../../../Charts/StatusPieChart/components/PieChart.Skeleton";
import { StatusPieChart } from "../../../Charts/StatusPieChart/StatusPieChart";
import { useCategoryStatistics } from "../../hooks/useCategoryStatistics";
import type { PieConfig, PieFormatData, PieInfo } from "../../types/interfaces";

import styles from './CategoryStatistic.module.css'
import { formatPieData } from "../../utils";

interface CategoryStatisticsProps {
    categoryId: string;
}

const pieConfig: PieConfig[] = [
    { name: "Easy", key: "total_easy_question_count", fill: "#22c55e" },
    { name: "Medium", key: "total_medium_question_count", fill: "#f59e0b" },
    { name: "Hard", key: "total_hard_question_count", fill: "#ef4444" },
];

function CategoryStatistics({ categoryId }: CategoryStatisticsProps) {
    const { totals, isLoading } = useCategoryStatistics(categoryId);

    const pieChartData: PieInfo[] = React.useMemo(() => {
        return formatPieData(pieConfig, (totals || {}) as PieFormatData)
    }, [totals])

    if (isLoading) {
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

    return (
        <div className={styles.totalStatistic}>
            <div className={styles.topGrid}>
                <div className={styles.kpiGrid}>
                    <KPICard name="Total Question" value={totals?.total_question_count} />
                    <KPICard name="Total Pending Question" value={totals?.total_easy_question_count} />
                    <KPICard name="Total Verified Question" value={totals?.total_medium_question_count} />
                    <KPICard name="Total Rejected" value={totals?.total_hard_question_count} />
                </div>

                <div className={styles.pieChartWrapper}>
                    <StatusPieChart data={pieChartData} />
                </div>
            </div>
        </div>
    );
}

export {
    CategoryStatistics
}