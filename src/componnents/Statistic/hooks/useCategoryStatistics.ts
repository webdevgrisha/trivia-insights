import useSWR from "swr"
import { fetcher } from "../../../http/fetcher"
import type { CategoryStatistic } from "../types/interfaces"
import type { Params } from "react-router";

type SWRKey = readonly [url: string, params: Params];

function useCategoryStatistics(categoryId: string) {
    const key: SWRKey = ["api_count.php", { category: categoryId }];

    const { data, error, isLoading } = useSWR<CategoryStatistic, Error, SWRKey>(
        key,
        ([url, params]) => fetcher<CategoryStatistic>(url, params)
    )

    return {
        categoryId: data?.category_id,
        totals: data?.category_question_count,
        isError: error,
        isLoading
    }
}

export {
    useCategoryStatistics
}