import type { CacheEntry } from '../types/interfaces';

function getCacheKey(cachePrefix: string, cacheValue: string) {
  return `${cachePrefix}:${cacheValue}`;
}

function saveCacheEntry<T>(key: string, data: T, ttlMs?: number): void {
  try {
    const entry: CacheEntry<T> = {
      data,
      expiresAt: ttlMs ? Date.now() + ttlMs : null,
    };

    localStorage.setItem(key, JSON.stringify(entry));
  } catch {
    return;
  }
}

function removeCacheEntry(key: string) {
  localStorage.removeItem(key);
}

function loadCacheEntry<T>(key: string): T | null {
  try {
    const raw = localStorage.getItem(key);

    if (!raw) return null;

    const entry = JSON.parse(raw) as CacheEntry<T>;

    if (entry.expiresAt && entry.expiresAt < Date.now()) {
      localStorage.removeItem(key);

      return null;
    }

    return entry.data;
  } catch {
    return null;
  }
}

const Cache = {
  getKey: getCacheKey,
  save: saveCacheEntry,
  remove: removeCacheEntry,
  load: loadCacheEntry,
};

export { Cache };
