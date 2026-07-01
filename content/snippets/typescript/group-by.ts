import { Snippet } from "../types";

export const groupBySnippet: Snippet = {
  id: "ts-group-by",
  title: "groupBy",
  description: "Groups array items into an object keyed by the result of a callback function.",
  language: "typescript",
  tags: ["arrays", "utils"],
  difficulty: "Beginner",
  category: "Utilities",

  code: `function groupBy<T, K extends string | number>(
  items: T[],
  keyFn: (item: T) => K
): Record<K, T[]> {
  return items.reduce((acc, item) => {
    const key = keyFn(item);
    (acc[key] ??= []).push(item);
    return acc;
  }, {} as Record<K, T[]>);
}

// Usage
const users = [
  { name: "Alice", role: "admin" },
  { name: "Bob", role: "user" },
  { name: "Carol", role: "admin" },
];
const grouped = groupBy(users, (u) => u.role);`,
};
