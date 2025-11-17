import type { PieInfo } from '../../Charts/StatusPieChart/types/interfaces';
import type { PieConfig, PieFormatData } from '../types/interfaces';

function formatPieData(config: PieConfig[], initData: PieFormatData): PieInfo[] {
  const pieInfoArr: PieInfo[] = [];

  config.forEach(({ key, name, fill }) => {
    const pieInfo: PieInfo = {
      value: initData[key],
      name,
      fill,
      key,
    };

    pieInfoArr.push(pieInfo);
  });

  return pieInfoArr;
}

export { formatPieData };
