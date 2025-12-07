import type { BarInfo } from '../../../../../components/Charts/CategoriesBarChart/types/interfaces';
import type { KPICardConfig, PieConfig } from '../../../types/interfaces';
import type { TotalStatistic } from '../types/interfaces';

const kpiCardsConfig: KPICardConfig<TotalStatistic>[] = [
  {
    name: 'Total Question',
    key: 'total_num_of_questions',
  },
  {
    name: 'Total Pending Question',
    key: 'total_num_of_pending_questions',
  },
  {
    name: 'Total Verified Question',
    key: 'total_num_of_verified_questions',
  },
  {
    name: 'Total Rejected Question',
    key: 'total_num_of_rejected_questions',
  },
];

const pieConfig: PieConfig[] = [
  { name: 'Verified', key: 'total_num_of_verified_questions', fill: '#22c55e' },
  { name: 'Pending', key: 'total_num_of_pending_questions', fill: '#f59e0b' },
  { name: 'Rejected', key: 'total_num_of_rejected_questions', fill: '#ef4444' },
];

const barInfo: BarInfo[] = [
  { dataKey: 'verified', name: 'Verified', fill: '#22c55e' },
  { dataKey: 'pending', name: 'Pending', fill: '#f59e0b' },
  { dataKey: 'rejected', name: 'Rejected', fill: '#ef4444' },
];

export { kpiCardsConfig, pieConfig, barInfo };
