import { Skeleton } from '../../../../../../components/Skeleton/Skeleton';
import styles from './QuestionSkeleton.module.css';

function QuestionSkeleton() {
  return (
    <div className={styles.card}>
      <header className={styles.header}>
        <Skeleton className={styles.category} rounded="sm" />
        <Skeleton className={styles.difficulty} rounded="xl" />
      </header>

      <div className={styles.questionBlock}>
        <Skeleton className={styles.questionLineLong} />
        <Skeleton className={styles.questionLineShort} />
      </div>

      <div className={styles.options}>
        {Array.from({ length: 4 }).map((_, i) => (
          <Skeleton key={i} className={styles.option} rounded="xl" />
        ))}
      </div>
    </div>
  );
}

export { QuestionSkeleton };
