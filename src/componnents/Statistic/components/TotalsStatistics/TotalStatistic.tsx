import React from "react";
import { useCategories } from "../../../Categories/hooks/useCategories";
import { KPICard } from "../../../Charts";
import { CategoriesBarChart } from "../../../Charts/CategoriesBarChart/CategoriesBarChart";
import { useAllCategoriesStatistics } from "../../hooks/useAllCategoriesStatistics";
import type { PieFormatData, PieInfo } from "../../types/interfaces";

import styles from "./TotalStatistic.module.css";
import { StatusPieChart } from "../../../Charts/StatusPieChart/StatusPieChart";
import { formatCategoriesTotalStatistics, formatPieData } from "../../utils";
import { TotalStatisticSkeleton } from "./components/TotalStatisticSkeleton/TotalStatisticSkeleton";
import { barInfo, kpiCardsConfig, pieConfig } from "./config/chartsConfigs";


function TotalsStatistics() {
    const { allTotals, categoriesTotals, isLoading } = useAllCategoriesStatistics();
    const { categories, isLoading: isCategoriesLoading } = useCategories();

    const [activeTotalsID, setActiveTotalsID] = React.useState<string | null>(null);
    const [selectedKPIKey, setSelectedKPIKey] = React.useState<string | null>(null);

    const loading = isLoading || isCategoriesLoading;

    const activeCategoryTotals =
        activeTotalsID ? categoriesTotals?.[activeTotalsID] : allTotals;

    const barChartData = React.useMemo(() => {
        return formatCategoriesTotalStatistics(categoriesTotals || {}, categories || {})
    }, [categories, categoriesTotals]);

    const pieChartData: PieInfo[] = React.useMemo(() => {
        return formatPieData(pieConfig, (activeCategoryTotals || {}) as PieFormatData)
    }, [activeCategoryTotals])

    const handleSetSelectedKPIKey = React.useCallback((key: string | null) => {
        const isNewValue = key !== selectedKPIKey;
        const nextValue = isNewValue ? key : null;

        setSelectedKPIKey(nextValue)
    }, [selectedKPIKey])

    if (loading) {
        return <TotalStatisticSkeleton />
    }

    return (
        <div className={styles.totalStatistic}>
            <div className={styles.topGrid}>
                <div className={styles.kpiGrid}>
                    {
                        kpiCardsConfig.map(({ key, name }) => {
                            const value = activeCategoryTotals?.[key];
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
