import styles from './ProgressBar.module.css';

interface ProgressBarProps {
  value: number;
  label?: string;
}

function ProgressBar({ value, label }: ProgressBarProps) {
  const clamped = Math.min(100, Math.max(0, value));

  return (
    <div className={styles.root}>
      {label && <span className={styles.label}>{label}</span>}
      <div
        className={styles.track}
        role="progressbar"
        aria-valuenow={clamped}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div className={styles.bar} style={{ width: `${clamped}%` }} />
      </div>
      <span className={styles.percent}>{clamped}%</span>
    </div>
  );
}

export { ProgressBar };
