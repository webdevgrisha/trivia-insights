import useSWR from 'swr';
import { openTDBFetcher } from '../../../../../http/openTDBFetcher';
import type { AllCategoriesStatistics } from '../types/interfaces';

function useAllCategoriesStatistics() {
  const { data, error, isLoading } = useSWR<AllCategoriesStatistics>(
    'api_count_global.php',
    openTDBFetcher
  );

  return {
    allTotals: data?.overall,
    categoriesTotals: data?.categories,
    isError: error,
    isLoading,
  };
}

export { useAllCategoriesStatistics };
