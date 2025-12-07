import type { BarInfo } from '../../../../../../../components/Charts/CategoriesBarChart/types/interfaces';
import type { LengthBin } from '../types/interfaces';

const QUESTION_LENGTH_BINS: LengthBin[] = [
  { id: '0-20', label: '0–20', from: 0, to: 20 },
  { id: '21-40', label: '21–40', from: 21, to: 40 },
  { id: '41-60', label: '41–60', from: 41, to: 60 },
  { id: '61-80', label: '61–80', from: 61, to: 80 },
  { id: '81-100', label: '81–100', from: 81, to: 100 },
  { id: '101-120', label: '101–120', from: 101, to: 120 },
  { id: '121-140', label: '121–140', from: 121, to: 140 },
  { id: '141-160', label: '141–160', from: 141, to: 160 },
  { id: '161+', label: '161+', from: 161, to: null },
];

const questionLengthBarInfo: BarInfo[] = [
  {
    dataKey: 'question_count',
    name: 'Questions',
    fill: '#38bdf8',
  },
];

export { QUESTION_LENGTH_BINS, questionLengthBarInfo };
