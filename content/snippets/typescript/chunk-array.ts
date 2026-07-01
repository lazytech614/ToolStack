import { Snippet } from "../types";

export const chunkArraySnippet: Snippet = {
  id: "ts-chunk-array",
  title: "chunk",
  description: "Splits an array into smaller arrays (chunks) of a specified size.",
  language: "typescript",
  tags: ["arrays", "utils"],
  difficulty: "Beginner",
  category: "Utilities",

  code: `function chunk<T>(arr: T[], size: number): T[][] {
  if (size <= 0) throw new Error("size must be greater than 0");

  const result: T[][] = [];

  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }

  return result;
}

// Usage
const pages = chunk([1, 2, 3, 4, 5, 6, 7], 3);
// [[1, 2, 3], [4, 5, 6], [7]]`,
};
