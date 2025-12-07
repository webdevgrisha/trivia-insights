import { Toaster } from 'react-hot-toast';
import { NavLink, Outlet, useLocation } from 'react-router';
import { Categories } from '../../components/Categories/Categories';

import styles from './RootLayout.module.css';

function RootLayout() {
  const location = useLocation();

  return (
    <>
      <header className={styles.header}>TrivialStatus</header>
      <main className={styles.main}>
        <nav className={styles.nav}>
          <Categories />

          <div className={styles.tabs}>
            <NavLink
              to={{ pathname: 'statistic', search: location.search }}
              className={({ isActive }) =>
                isActive ? `${styles.tab} ${styles.tabActive}` : styles.tab
              }
            >
              Statistic
            </NavLink>

            <NavLink
              to={{ pathname: 'questions', search: location.search }}
              className={({ isActive }) =>
                isActive ? `${styles.tab} ${styles.tabActive}` : styles.tab
              }
            >
              Questions
            </NavLink>
          </div>
        </nav>

        <section>
          <Outlet />
        </section>
      </main>

      <Toaster position="top-right" />
    </>
  );
}

export { RootLayout };
