import { Snippet } from "../types";

export const pickSnippet: Snippet = {
  id: "ts-pick",
  title: "pick",
  description: "Creates a new object composed of only the specified keys from the source object.",
  language: "typescript",
  tags: ["objects", "utils"],
  difficulty: "Beginner",
  category: "Utilities",

  code: `function pick<T extends object, K extends keyof T>(
  obj: T,
  keys: K[]
): Pick<T, K> {
  const result = {} as Pick<T, K>;

  for (const key of keys) {
    if (key in obj) result[key] = obj[key];
  }

  return result;
}

// Usage
const user = { id: 1, name: "Alice", password: "secret" };
const safeUser = pick(user, ["id", "name"]);`,
};
