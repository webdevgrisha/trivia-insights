import type { CategoryName } from '../../../components/Categories/types/interfaces';
import type { TotalStatistic } from '../components/TotalsStatistics/types/interfaces';

function formatCategoriesTotalStatistics(
  categoriesTotals: Record<string, TotalStatistic>,
  categoriesNames: CategoryName[]
) {
  const categoriesNamesMap = categoriesNames.reduce(
    (accum, { id, name }) => {
      accum[id] = name;

      return accum;
    },
    {} as Record<string, string>
  );

  const rows = Object.entries(categoriesTotals).map(([categoryId, categoryTotals]) => {
    return {
      id: categoryId,
      name: categoriesNamesMap[categoryId],
      total: categoryTotals.total_num_of_questions,
      verified: categoryTotals.total_num_of_verified_questions,
      pending: categoryTotals.total_num_of_pending_questions,
      rejected: categoryTotals.total_num_of_rejected_questions,
    };
  });

  return rows;
}

export { formatCategoriesTotalStatistics };
