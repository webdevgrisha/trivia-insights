function saveSessionEntry<T>(key: string, data: T): void {
  try {
    sessionStorage.setItem(key, JSON.stringify(data));
  } catch {
    return;
  }
}

function loadSessionEntry<T>(key: string): T | null {
  try {
    const raw = sessionStorage.getItem(key);
    if (!raw) return null;

    return JSON.parse(raw) as T;
  } catch {
    return null;
  }
}

function removeSessionEntry(key: string): void {
  try {
    sessionStorage.removeItem(key);
  } catch {
    return;
  }
}

const SessionStore = {
  save: saveSessionEntry,
  load: loadSessionEntry,
  remove: removeSessionEntry,
};

export { SessionStore };
