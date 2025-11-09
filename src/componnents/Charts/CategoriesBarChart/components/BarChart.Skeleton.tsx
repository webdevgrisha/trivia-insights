import type React from "react";
import commonStyles from "../CategoriesBarChart.module.css";
import styles from './BarChart.Skeleton.module.css';

import { Skeleton } from "../../../Skeleton/Skeleton";

export function BarChartSkeleton() {
    const bars = Array.from({ length: 8 }).map((_, i) =>
        Math.max(40, (i % 5 + 2) * 24)
    );

    return (
        <div className={commonStyles.chartWrap}>
            <div className={styles.skeletonRoot}>
                <div className={styles.legendRow}>
                    <Skeleton className={styles.legendItem} />
                    <Skeleton className={styles.legendItem} />
                    <Skeleton className={styles.legendItem} />
                </div>

                <div className={styles.chartBox}>
                    <div className={styles.barsGrid}>
                        {bars.map((h, i) => (
                            <div key={i} className={styles.barCol}>
                                <Skeleton
                                    className={styles.bar}
                                    style={{ ["--bar-h"]: `${h}px` } as React.CSSProperties}
                                />
                                <Skeleton className={styles.barLabel} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
