type Params = Record<string, string | number | boolean | undefined>;

export async function fetcher<T>(url: string, params?: Params): Promise<T> {
    const baseURL = "https://opentdb.com/";
    const endpoint = new URL(url, baseURL);

    if (params) {
        Object.entries(params).forEach(([k, v]) => {
            if (v !== undefined && v !== null) endpoint.searchParams.set(k, String(v));
        });
    }

    const res = await fetch(endpoint.toString(), { method: "GET" });

    if (!res.ok) throw new Error(`HTTP ${res.status}`);

    return res.json() as Promise<T>;
}
