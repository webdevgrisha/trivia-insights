import useSWR from 'swr';
import { openTDBFetcher } from '../../../http/openTDBFetcher';
import type { Categories } from '../types/interfaces';

function useCategories() {
  const { data, error, isLoading } = useSWR<Categories>('api_category.php', openTDBFetcher);

  return {
    categories: data?.trivia_categories || [],
    isError: error,
    isLoading,
  };
}

export { useCategories };
