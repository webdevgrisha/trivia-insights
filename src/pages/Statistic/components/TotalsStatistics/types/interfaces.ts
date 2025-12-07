interface AllCategoriesStatistics {
  overall: TotalStatistic;
  categories: Categories;
}

interface TotalStatistic {
  total_num_of_questions: number;
  total_num_of_pending_questions: number;
  total_num_of_verified_questions: number;
  total_num_of_rejected_questions: number;
}

type Categories = Record<string, TotalStatistic>;

export type { AllCategoriesStatistics, TotalStatistic, Categories };
