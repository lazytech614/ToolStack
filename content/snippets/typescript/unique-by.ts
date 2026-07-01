import { Snippet } from "../types";

export const uniqueBySnippet: Snippet = {
  id: "ts-unique-by",
  title: "uniqueBy",
  description: "Removes duplicate items from an array based on a key selector function.",
  language: "typescript",
  tags: ["arrays", "utils"],
  difficulty: "Beginner",
  category: "Utilities",

  code: `function uniqueBy<T, K>(arr: T[], keyFn: (item: T) => K): T[] {
  const seen = new Set<K>();

  return arr.filter((item) => {
    const key = keyFn(item);
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

// Usage
const orders = [
  { id: 1, customerId: "a" },
  { id: 2, customerId: "a" },
  { id: 3, customerId: "b" },
];
const uniqueCustomers = uniqueBy(orders, (o) => o.customerId);`,
};
