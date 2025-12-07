import classNames from 'classnames';
import styles from './Category.module.css';

interface CategoryProps {
  name: string;
  isActive: boolean;
  onClick: () => void;
  icon?: React.ReactNode | string;
  dataId?: string;
}

function Category({ name, isActive, onClick, icon, dataId }: CategoryProps) {
  const className = classNames(styles.category, { [styles.active]: isActive });

  return (
    <li>
      <button
        type="button"
        className={className}
        onClick={onClick}
        aria-pressed={isActive}
        data-category-id={dataId}
      >
        {icon && <span className={styles.icon}>{icon}</span>}
        <span className={styles.label}>{name}</span>
      </button>
    </li>
  );
}

export { Category };
