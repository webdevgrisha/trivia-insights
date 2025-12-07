import React from 'react';
import { useCategoryId } from '../../../hooks/useCategoryId';

function useCategoryFilter(isLoading: boolean) {
  const { categoryId: activeId, setCategoryId } = useCategoryId();

  const setActiveCategory = React.useCallback(
    (id: string) => {
      setCategoryId(id, { preserveSearch: true, replace: true });
    },
    [setCategoryId]
  );

  React.useLayoutEffect(() => {
    if (isLoading) return;

    const btn = document.querySelector<HTMLButtonElement>(`[data-category-id="${activeId}"]`);

    btn?.scrollIntoView({
      block: 'nearest',
      inline: 'center',
      behavior: 'auto',
    });
  }, [activeId, isLoading]);

  return { activeId, setActiveCategory };
}

export { useCategoryFilter };
