import React from 'react';

interface UseInfiniteScrollParams {
  isLoading: boolean;
  isFinished: boolean;
  hasError: boolean;
  onLoadMore: () => void;
}

function useInfiniteScroll({
  isLoading,
  isFinished,
  hasError,
  onLoadMore,
}: UseInfiniteScrollParams) {
  const loaderRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    const node = loaderRef.current;

    if (!node) return;

    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];

      if (entry.isIntersecting && !isLoading && !isFinished && !hasError) {
        onLoadMore();
      }
    });

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [isLoading, isFinished, hasError, onLoadMore]);

  return { loaderRef };
}

export { useInfiniteScroll };
