import { Snippet } from "../types";

export const memoizeSnippet: Snippet = {
  id: "ts-memoize",
  title: "memoize",
  description:
    "Caches the result of a function call based on its arguments to avoid redundant computation.",
  language: "typescript",
  tags: ["performance", "utils"],
  difficulty: "Intermediate",
  category: "Utilities",

  code: `function memoize<Args extends unknown[], R>(
  fn: (...args: Args) => R
): (...args: Args) => R {
  const cache = new Map<string, R>();

  return (...args: Args): R => {
    const key = JSON.stringify(args);

    if (cache.has(key)) {
      return cache.get(key)!;
    }

    const result = fn(...args);
    cache.set(key, result);
    return result;
  };
}

// Usage
const slowSquare = (n: number) => {
  for (let i = 0; i < 1e6; i++) {}
  return n * n;
};
const fastSquare = memoize(slowSquare);`,
};
