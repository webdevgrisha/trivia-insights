interface UserCategoryQuestionStatistic {
  total_answer_count: number;
  correct_answer_count: number;
  incorrect_answer_count: number;
  [key: string]: number;
}

interface UserQuestionStatisticByType {
  multiple: UserCategoryQuestionStatistic;
  boolean: UserCategoryQuestionStatistic;
}

interface UserDifficultyItem {
  total_answer_count: number;
  correct_answer_count: number;
  incorrect_answer_count: number;
  [key: string]: number;
}

interface UserDifficultyStats {
  easy: UserDifficultyItem;
  medium: UserDifficultyItem;
  hard: UserDifficultyItem;
}

export type {
  UserCategoryQuestionStatistic,
  UserQuestionStatisticByType,
  UserDifficultyItem,
  UserDifficultyStats,
};
