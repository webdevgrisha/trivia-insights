import styles from "./Categories.module.css";
import { CATEGORY_ICONS } from "./icons/categoryIcons";
import { CategoriesSkeleton, Category } from "./components";
import { ErrorStatus, NoDataStatus } from "../Statuses";
import { useCategories, useCategoryFilter } from "./hooks";

function Categories() {
    const { categories, isLoading, isError } = useCategories();
    const { activeId, setActiveCategory } = useCategoryFilter(isLoading);

    if (isLoading) return <CategoriesSkeleton count={10} />;

    if (isError) return <ErrorStatus title="Failed to load categories" />

    if (categories.length === 0) return <NoDataStatus title="No categories found" />

    return (
        <ul className={styles.list} role="tablist" aria-label="Categories">
            <Category
                key="all"
                name="All Categories"
                icon={CATEGORY_ICONS[0]}
                isActive={activeId === "0"}
                onClick={() => setActiveCategory("0")}
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

export { Categories }
