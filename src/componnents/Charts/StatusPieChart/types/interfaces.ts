interface PieInfo {
  key: string;
  name: string;
  value: number | null;
  fill: string;
  [key: string]: string | number | null;
}

export type { PieInfo };
