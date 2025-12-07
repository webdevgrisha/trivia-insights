import styles from '../../Questions.module.css';
import { QuestionSkeleton } from '../Question/components/QuestionSkeleton/QuestionSkeleton';

function QuestionsSkeleton() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.list}>
        {Array.from({ length: 5 }).map((_, index) => (
          <QuestionSkeleton key={index} />
        ))}
      </div>
    </section>
  );
}

export { QuestionsSkeleton };
