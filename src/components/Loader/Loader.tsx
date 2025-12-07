import styles from './Loader.module.css';

interface LoaderProps {
  label?: string;
}

function Loader({ label = 'Loading...' }: LoaderProps) {
  return (
    <div className={styles.loader}>
      <div className={styles.spinner} />
      <span>{label}</span>
    </div>
  );
}

export { Loader };
