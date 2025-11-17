import { NoDataStatus } from '../../../Statuses';
import styles from './NoData.module.css';

interface NoDataProps {
  title: string;
  text?: string;
  className?: string;
}

function NoData({ title, text, className }: NoDataProps) {
  return (
    <div className={styles.noDataWrapper}>
      <NoDataStatus title={title} text={text} className={className} />
    </div>
  );
}

export { NoData };
