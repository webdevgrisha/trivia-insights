import { httpConfig } from '../config/httpConfig';

export type HttpParams = Record<string, string | number | boolean | undefined>;

export async function fetcher<T>(
  url: string,
  params?: HttpParams,
  options?: RequestInit
): Promise<T> {
  const endpoint = new URL(url, httpConfig.baseURL);

  if (params) {
    Object.entries(params).forEach(([k, v]) => {
      if (v !== undefined && v !== null) endpoint.searchParams.set(k, String(v));
    });
  }

  const res = await fetch(endpoint.toString(), { method: 'GET', ...options });

  if (!res.ok) throw new Error(`HTTP ${res.status}`);

  return res.json() as Promise<T>;
}
