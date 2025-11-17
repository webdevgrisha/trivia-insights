interface KPICardConfig<T> {
  key: keyof T & string;
  name: string;
}

interface PieConfig {
  key: string;
  name: string;
  fill: string;
}

type PieFormatData = Record<string, number>;

export type { KPICardConfig, PieConfig, PieFormatData };
