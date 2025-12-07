import { useCategoryId } from '../../hooks/useCategoryId';
import { CategoryStatistics, TotalsStatistics } from './components';

function Statistic() {
  const { rawCategoryId, isAllCategory } = useCategoryId();
  const activeId = isAllCategory ? null : rawCategoryId;

  return <>{!activeId ? <TotalsStatistics /> : <CategoryStatistics categoryId={activeId} />}</>;
}

export { Statistic };
