import { Skeleton } from "../../../Skeleton/Skeleton";
import styles from "./PieChart.Skeleton.module.css";

function PieChartSkeleton() {
    return (
        <div className={styles.wrap}>
            <Skeleton style={{ height: 20, width: "60%" }} />

            <div className={styles.canvas}>
                <Skeleton className={styles.ring} />
                <div className={styles.hole} />
            </div>
        </div>
    );
}

export { PieChartSkeleton };
