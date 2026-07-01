import { Snippet } from "../types";

export const useDebounceSnippet: Snippet = {
  id: "react-use-debounce",
  title: "useDebounce",
  description:
    "Returns a debounced version of a value that only updates after a wait period has elapsed.",
  language: "typescript",
  tags: ["hooks", "performance"],
  difficulty: "Intermediate",
  category: "React Hooks",

  code: `import { useEffect, useState } from "react";

function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(timer);
  }, [value, delay]);

  return debouncedValue;
}

// Usage
function SearchInput() {
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query, 300);

  useEffect(() => {
    if (debouncedQuery) console.log("Searching for:", debouncedQuery);
  }, [debouncedQuery]);

  return <input value={query} onChange={(e) => setQuery(e.target.value)} />;
}`,
};
