import useSWR from "swr"
import { fetcher } from "../../../http/fetcher"
import type { AllCategoriesStatistics } from "../types/interfaces"

function useAllCategoriesStatistics() {
    const { data, error, isLoading } = useSWR<AllCategoriesStatistics>('api_count_global.php', fetcher)

    return {
        allTotals: data?.overall,
        categoriesTotals: data?.categories,
        isError: error,
        isLoading
    }
}

export {
    useAllCategoriesStatistics
}