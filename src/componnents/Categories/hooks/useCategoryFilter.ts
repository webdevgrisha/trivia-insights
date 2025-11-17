import React from 'react';
import { useSearchParams } from 'react-router';

function useCategoryFilter(isLoading: boolean) {
  const [searchParams, setSearchParams] = useSearchParams();

  const activeId = searchParams.get('category') ?? '0';

  const setActiveCategory = React.useCallback(
    (id: string) => {
      if (id === '0') {
        setSearchParams({}, { replace: true });
      } else {
        setSearchParams({ category: id }, { replace: true });
      }
    },
    [setSearchParams]
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
