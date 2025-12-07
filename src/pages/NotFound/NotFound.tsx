import { Link } from 'react-router';
import styles from './NotFound.module.css';

function NotFound() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>404 – Page not found</h1>
        <p className={styles.text}>The page you are looking for doesn&apos;t exist.</p>
        <p className={styles.text}>Use the navigation above to choose another section.</p>

        <Link to="/" className={styles.button}>
          Go to main page
        </Link>
      </div>
    </div>
  );
}

export { NotFound };
