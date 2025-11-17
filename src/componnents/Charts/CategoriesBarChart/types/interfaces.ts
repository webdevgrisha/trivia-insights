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

export type { BarInfo, CategoryInfo };
