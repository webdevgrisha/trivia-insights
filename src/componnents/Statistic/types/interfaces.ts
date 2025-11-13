interface AllCategoriesStatistics {
    overall: TotalStatistic;
    categories: Categories
}

interface TotalStatistic {
    total_num_of_questions: number;
    total_num_of_pending_questions: number;
    total_num_of_verified_questions: number;
    total_num_of_rejected_questions: number;
}

type Categories = Record<string, TotalStatistic>

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

interface BarInfo {
    dataKey: string;
    name: string;
    fill: string;
}

interface CategoryInfo {
    id: string;
    name: string;
    [key: string]: number | string;
}

interface PieConfig {
    key: string;
    name: string;
    fill: string;
}

type PieFormatData = Record<string, number>

interface PieInfo {
    key: string;
    name: string;
    value: number | null;
    fill: string;
    [key: string]: string | number | null;
}

export type {
    AllCategoriesStatistics,
    TotalStatistic,
    Categories,
    CategoryStatistic,
    CategoryQuestionStatistic,
    BarInfo,
    CategoryInfo,
    PieConfig,
    PieFormatData,
    PieInfo,
}