interface CategoryStatistic {
  category_id: number;
  category_question_count: CategoryQuestionStatistic;
}

interface CategoryQuestionStatistic {
  total_question_count: number;
  total_easy_question_count: number;
  total_medium_question_count: number;
  total_hard_question_count: number;
}

export type { CategoryStatistic, CategoryQuestionStatistic };
