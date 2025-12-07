import { NavLink, useSearchParams } from 'react-router';
import type { Tabs } from '../../types/interfaces';
import styles from './StatisticTabs.module.css';
import { buildSearch } from './utils/buildSearch';

interface StatisticTabsProps {
  tabs: Tabs;
}

function StatisticTabs({ tabs }: StatisticTabsProps) {
  const [searchParams] = useSearchParams();

  const currentTabId = searchParams.get('tab') ?? tabs[0]?.id; // fallback на первый таб

  return (
    <div className={styles.tabs} role="tablist" aria-label="Category statistics">
      {tabs.map((tab) => (
        <NavLink
          key={tab.id}
          to={buildSearch(tab.id, searchParams)}
          className={currentTabId === tab.id ? `${styles.tab} ${styles.tabActive}` : styles.tab}
          role="tab"
        >
          {tab.label}
        </NavLink>
      ))}
    </div>
  );
}

export { StatisticTabs };
