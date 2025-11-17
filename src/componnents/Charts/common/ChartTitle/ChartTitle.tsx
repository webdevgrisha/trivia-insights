import styles from './ChartTitle.module.css';

interface ChartSectionTitleProps {
  title: string;
}

function ChartTitle({ title }: ChartSectionTitleProps) {
  return <h3 className={styles.title}>{title}</h3>;
}

export { ChartTitle };
