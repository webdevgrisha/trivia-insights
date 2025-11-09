import useSWR from "swr"
import type { Categories } from "../types/interfaces"
import { fetcher } from "../../../http/fetcher"

function useCategories() {
    const { data, error, isLoading } = useSWR<Categories>('api_category.php', fetcher)

    return {
        categories: data?.trivia_categories || [],
        isError: error,
        isLoading
    }
}

export {
    useCategories
}