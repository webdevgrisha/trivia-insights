import type { CategoryQuestionStatistic, KPICardConfig, PieConfig } from "../../../types/interfaces";

const kpiCardsConfig: KPICardConfig<CategoryQuestionStatistic>[] = [
    {
        name: 'Total Question',
        key: 'total_question_count',
    },
    {
        name: 'Total Easy Question',
        key: 'total_easy_question_count',
    },
    {
        name: 'Total Medium Question',
        key: 'total_medium_question_count',
    },
    {
        name: 'Total Hard Question',
        key: 'total_hard_question_count',
    }
];

const pieConfig: PieConfig[] = [
    { name: "Easy", key: "total_easy_question_count", fill: "#22c55e" },
    { name: "Medium", key: "total_medium_question_count", fill: "#f59e0b" },
    { name: "Hard", key: "total_hard_question_count", fill: "#ef4444" },
];

export {
    kpiCardsConfig,
    pieConfig
}