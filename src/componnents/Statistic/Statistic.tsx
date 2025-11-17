import { useSearchParams } from 'react-router';
import { CategoryStatistics } from './components/CategoryStatistic/CategoryStatistic';
import { TotalsStatistics } from './components/TotalsStatistics/TotalStatistic';

function Statistic() {
  const [searchParams] = useSearchParams();

  const categoryID: string | null = searchParams.get('category');

  return <>{!categoryID ? <TotalsStatistics /> : <CategoryStatistics categoryId={categoryID} />}</>;
}

export { Statistic };
