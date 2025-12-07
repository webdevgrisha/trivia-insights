import type { TabId } from '../../../types/interfaces';

function buildSearch(tabId: TabId, searchParams: URLSearchParams) {
  const next = new URLSearchParams(searchParams);
  next.set('tab', tabId);

  return `?${next.toString()}`;
}

export { buildSearch };
