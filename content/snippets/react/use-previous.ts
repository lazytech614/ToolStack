import { Snippet } from "../types";

export const usePreviousSnippet: Snippet = {
  id: "react-use-previous",
  title: "usePrevious",
  description: "Stores and returns the previous value of a variable from the last render.",
  language: "typescript",
  tags: ["hooks", "state"],
  difficulty: "Beginner",
  category: "React Hooks",

  code: `import { useEffect, useRef } from "react";

function usePrevious<T>(value: T): T | undefined {
  const ref = useRef<T>();

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
}

// Usage
function Counter({ count }: { count: number }) {
  const previousCount = usePrevious(count);

  return (
    <p>
      Now: {count}, before: {previousCount ?? "N/A"}
    </p>
  );
}`,
};
