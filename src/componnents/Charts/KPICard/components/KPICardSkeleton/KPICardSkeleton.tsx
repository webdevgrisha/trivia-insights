import { Skeleton } from '../../../../Skeleton/Skeleton';
import styles from '../../KPICard.module.css';

export function KPICardSkeleton() {
  return (
    <div className={styles.card}>
      <Skeleton style={{ height: 12, width: '50%' }} />
      <Skeleton style={{ height: 28, width: '70%' }} />
    </div>
  );
}
