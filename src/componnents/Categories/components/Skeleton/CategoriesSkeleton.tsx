import { Skeleton } from '../../../Skeleton/Skeleton';
import common from '../../Categories.module.css';
import styles from './CategoriesSkeleton.module.css';

interface CategoriesSkeletonProps {
  count?: number;
}

function CategoriesSkeleton({ count = 10 }: CategoriesSkeletonProps) {
  const widths = [96, 128, 104, 140, 112, 100, 136, 92, 120, 110];

  return (
    <ul className={common.list} role="status" aria-live="polite" aria-label="Loading categories">
      {Array.from({ length: count }).map((_, i) => (
        <li key={i}>
          <Skeleton
            rounded="xl"
            className={styles.pillSkeleton}
            style={{ width: widths[i % widths.length], height: 36 }}
            aria-hidden="true"
          />
        </li>
      ))}
    </ul>
  );
}

export { CategoriesSkeleton };
