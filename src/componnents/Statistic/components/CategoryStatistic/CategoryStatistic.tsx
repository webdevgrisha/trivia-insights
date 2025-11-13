import React from "react";
import { KPICard } from "../../../Charts";
import { StatusPieChart } from "../../../Charts/StatusPieChart/StatusPieChart";
import { useCategoryStatistics } from "../../hooks/useCategoryStatistics";
import type { PieFormatData, PieInfo } from "../../types/interfaces";

import styles from './CategoryStatistic.module.css'
import { formatPieData } from "../../utils";
import { CategoryStatisticSkeleton } from "./components/TotalStatisticSkeleton/CategoryStatisticSkeleton";
import { kpiCardsConfig, pieConfig } from "./config/chartsConfigs";

interface CategoryStatisticsProps {
    categoryId: string;
}

function CategoryStatistics({ categoryId }: CategoryStatisticsProps) {
    const { totals, isLoading } = useCategoryStatistics(categoryId);

    const [selectedKPIKey, setSelectedKPIKey] = React.useState<string | null>(null);

    const pieChartData: PieInfo[] = React.useMemo(() => {
        return formatPieData(pieConfig, (totals || {}) as PieFormatData)
    }, [totals])

    const handleSetSelectedKPIKey = React.useCallback((key: string | null) => {
        const isNewValue = key !== selectedKPIKey;
        const nextValue = isNewValue ? key : null;

        setSelectedKPIKey(nextValue)
    }, [selectedKPIKey])

    if (isLoading) {
        <CategoryStatisticSkeleton />
    }

    return (
        <div className={styles.totalStatistic}>
            <div className={styles.topGrid}>
                <div className={styles.kpiGrid}>
                    {
                        kpiCardsConfig.map(({ key, name }) => {
                            const value = totals?.[key];
                            const isActive = selectedKPIKey === key;

                            return (
                                <KPICard
                                    key={key}
                                    name={name}
                                    value={value}
                                    isActive={isActive}
                                    onClick={() => handleSetSelectedKPIKey(key)}
                                />
                            )
                        })
                    }
                </div>

                <div className={styles.pieChartWrapper}>
                    <StatusPieChart
                        data={pieChartData}
                        onClick={handleSetSelectedKPIKey}
                        activeKey={selectedKPIKey}
                    />
                </div>
            </div>
        </div>
    );
}

export {
    CategoryStatistics
}