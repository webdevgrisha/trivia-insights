import { Skeleton } from '../../../../../../components/Skeleton/Skeleton';
import filterStyles from '../../QuestionFilter.module.css';
import styles from './QuestionFilterSkeleton.module.css';

function QuestionFilterSkeleton() {
  return (
    <div className={filterStyles.filters}>
      <div className={filterStyles.filter}>
        <Skeleton className={styles.label} rounded="sm" />
        <Skeleton className={styles.select} rounded="xl" />
      </div>

      <div className={filterStyles.filter}>
        <Skeleton className={styles.label} rounded="sm" />
        <Skeleton className={styles.select} rounded="xl" />
      </div>
    </div>
  );
}

export { QuestionFilterSkeleton };
