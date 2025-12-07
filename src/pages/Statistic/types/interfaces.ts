interface KPICardConfig<T> {
  key: keyof T & string;
  name: string;
}

interface PieConfig {
  key: string;
  name: string;
  fill: string;
}

interface Tab {
  id: TabId;
  label: string;
}

type PieFormatData = Record<string, number>;

type TabId = 'general' | 'additional' | 'user';

type Tabs = Tab[];

export type { KPICardConfig, PieConfig, PieFormatData, TabId, Tabs };
