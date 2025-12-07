import type { BarInfo } from '../../../../../../../components/Charts/CategoriesBarChart/types/interfaces';
import type { KPICardConfig, PieConfig } from '../../../../../types/interfaces';
import type { UserCategoryQuestionStatistic } from '../types/interfaces';

const userKpiCardsConfig: KPICardConfig<UserCategoryQuestionStatistic>[] = [
  { key: 'total_answer_count', name: 'Total answers' },
  { key: 'correct_answer_count', name: 'Correct answers' },
  { key: 'incorrect_answer_count', name: 'Incorrect answers' },
];

const userPieConfig: PieConfig[] = [
  {
    key: 'correct_answer_count',
    name: 'Correct',
    fill: '#22c55e',
  },
  {
    key: 'incorrect_answer_count',
    name: 'Incorrect',
    fill: '#ef4444',
  },
];

const userDifficultyBarInfo: BarInfo[] = [
  {
    dataKey: 'correct',
    name: 'Correct answers',
    fill: '#22c55e',
  },
  {
    dataKey: 'incorrect',
    name: 'Incorrect answers',
    fill: '#ef4444',
  },
];

export { userKpiCardsConfig, userPieConfig, userDifficultyBarInfo };
