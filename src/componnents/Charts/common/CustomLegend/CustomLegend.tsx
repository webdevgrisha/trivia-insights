import commonStyles from '../CommonStyles.module.css';
import styles from './CustomLegend.module.css';

interface CustomLegendProps {
  payload?: LegendItem[];
}

interface LegendItem {
  value: string;
  color: string;
  dataKey: string;
}

function CustomLegend({ payload }: CustomLegendProps) {
  if (!payload?.length) return null;

  return (
    <div className={styles.legend}>
      {payload.map((item, index) => (
        <div key={`${item.dataKey}-${index}`} className={styles.legendItem}>
          <span className={commonStyles.dot} style={{ background: item.color }} />
          <span className={styles.legendText}>{item.value}</span>
        </div>
      ))}
    </div>
  );
}

export { CustomLegend };
