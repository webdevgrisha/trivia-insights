import { CategoriesBarChart } from '../../../../components/Charts';
import type {
  BarInfo,
  CategoryInfo,
} from '../../../../components/Charts/CategoriesBarChart/types/interfaces';
import { ChartTitle } from '../../../../components/Charts/common';
import layoutStyles from '../StatisticLayout.module.css';
import styles from './BarChartSection.module.css';

interface BarChartSectionProps {
  title: string;
  barInfo: BarInfo[];
  data: CategoryInfo[];
  onBarClick?: (id: string | null) => void;
}

function BarChartSection({ title, barInfo, data, onBarClick }: BarChartSectionProps) {
  return (
    <section className={layoutStyles.statisticSection}>
      <ChartTitle title={title} />
      <div className={styles.statisticBarWrapper}>
        <CategoriesBarChart
          barInfo={barInfo}
          data={data}
          onClick={(id: string | null) => onBarClick?.(id)}
        />
      </div>
    </section>
  );
}

export { BarChartSection };
