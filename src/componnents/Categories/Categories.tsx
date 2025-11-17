import { ErrorStatus, NoDataStatus } from '../Statuses';
import styles from './Categories.module.css';
import { CategoriesSkeleton, Category } from './components';
import { useCategories, useCategoryFilter } from './hooks';
import { CATEGORY_ICONS } from './icons/categoryIcons';

function Categories() {
  const { categories, isLoading, isError } = useCategories();
  const { activeId, setActiveCategory } = useCategoryFilter(isLoading);

  if (isLoading) return <CategoriesSkeleton count={10} />;

  if (isError) {
    return (
      <div className={styles.list}>
        <ErrorStatus title="Failed to load categories" />
      </div>
    );
  }

  if (categories.length === 0) {
    return (
      <div className={styles.list}>
        <NoDataStatus title="No categories found" />
      </div>
    );
  }

  return (
    <ul className={styles.list} role="tablist" aria-label="Categories">
      <Category
        key="all"
        name="All Categories"
        icon={CATEGORY_ICONS[0]}
        isActive={activeId === '0'}
        onClick={() => setActiveCategory('0')}
        dataId="0"
      />

      {categories.map(({ id, name }) => {
        const isActive = activeId === String(id);
        const icon: string | undefined = CATEGORY_ICONS[id];

        return (
          <Category
            key={id}
            name={name}
            icon={icon}
            isActive={isActive}
            onClick={() => setActiveCategory(String(id))}
            dataId={String(id)}
          />
        );
      })}
    </ul>
  );
}

export { Categories };
