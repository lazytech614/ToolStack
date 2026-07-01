import { Snippet } from "../types";

export const deepCloneSnippet: Snippet = {
  id: "ts-deep-clone",
  title: "deepClone",
  description: "Creates a deep copy of an object or array, avoiding shared references.",
  language: "typescript",
  tags: ["objects", "utils"],
  difficulty: "Beginner",
  category: "Utilities",

  code: `function deepClone<T>(value: T): T {
  return structuredClone(value);
}

// Usage
const original = { a: 1, nested: { b: 2 } };
const copy = deepClone(original);
copy.nested.b = 99;
console.log(original.nested.b); // 2`,
};
