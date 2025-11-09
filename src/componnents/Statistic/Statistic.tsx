import { useSearchParams } from "react-router";
import { TotalsStatistics } from "./components/TotalsStatistics/TotalsStatistic";
import { CategoryStatistics } from "./components/CategoryStatistic/CategoryStatistic";

function Statistic() {
    const [searchParams] = useSearchParams();

    const categoryID: string | null = searchParams.get('category');

    return (
        <>
            {!categoryID ? < TotalsStatistics /> : <CategoryStatistics categoryId={categoryID} />}
        </>

    )
}

export { Statistic }