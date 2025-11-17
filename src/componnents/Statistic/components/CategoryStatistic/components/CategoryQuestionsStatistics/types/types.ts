import type { QuestionDifficulty, QuestionType } from '../../../../../../../types/types';
import type { CategoryQuestionStatistic } from '../../../types/interfaces';

type QuestionStatisticByType = Record<QuestionType, CategoryQuestionStatistic>;
type Convertor = Record<QuestionDifficulty, keyof CategoryQuestionStatistic>;

export type { QuestionStatisticByType, Convertor };
