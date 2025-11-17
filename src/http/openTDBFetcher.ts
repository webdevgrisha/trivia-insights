import { httpConfig } from '../config/httpConfig';
import { sleep } from '../utils';
import { fetcher, type HttpParams } from './fetcher';

let lastCallTime = 0;

async function openTDBFetcher<T>(
  url: string,
  params?: HttpParams,
  options?: RequestInit
): Promise<T> {
  const now = Date.now();
  const diff = now - lastCallTime;

  if (diff < httpConfig.minIntervalMs) {
    await sleep(httpConfig.minIntervalMs - diff);
  }

  lastCallTime = Date.now();

  return fetcher<T>(url, params, options);
}

export { openTDBFetcher };
