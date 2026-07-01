import { Snippet } from "../types";

export const useFetchSnippet: Snippet = {
  id: "react-use-fetch",
  title: "useFetch",
  description:
    "Fetches data from a URL and tracks loading and error state, re-fetching when the URL changes.",
  language: "typescript",
  tags: ["hooks", "async", "data-fetching"],
  difficulty: "Intermediate",
  category: "React Hooks",

  code: `import { useEffect, useState } from "react";

function useFetch<T>(url: string) {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    setError(null);

    fetch(url, { signal: controller.signal })
      .then((res) => {
        if (!res.ok) throw new Error(\`Request failed: \${res.status}\`);
        return res.json();
      })
      .then((json: T) => setData(json))
      .catch((err) => {
        if (err.name !== "AbortError") setError(err);
      })
      .finally(() => setLoading(false));

    return () => controller.abort();
  }, [url]);

  return { data, error, loading };
}

// Usage
function UserProfile({ userId }: { userId: string }) {
  const { data, error, loading } = useFetch<{ name: string }>(\`/api/users/\${userId}\`);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return <p>{data?.name}</p>;
}`,
};
