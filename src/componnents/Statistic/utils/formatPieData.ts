import type { PieConfig, PieFormatData, PieInfo } from "../types/interfaces";

function formatPieData(config: PieConfig[], initData: PieFormatData): PieInfo[] {
    const pieInfoArr: PieInfo[] = [];

    config.forEach(({ key, name, fill }) => {
        const pieInfo: PieInfo = {
            value: initData[key],
            name,
            fill,
        }

        pieInfoArr.push(pieInfo);
    })

    return pieInfoArr;
}

export {
    formatPieData
}