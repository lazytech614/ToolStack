import { Snippet } from "../types";

export const debounceSnippet: Snippet = {
  id: "ts-debounce",
  title: "debounce",
  description:
    "Delays invoking a function until after a wait period has elapsed since the last call.",
  language: "typescript",
  tags: ["performance", "utils"],
  difficulty: "Intermediate",
  category: "Utilities",

  code: `function debounce<T extends (...args: unknown[]) => void>(
  fn: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timer: ReturnType<typeof setTimeout>;

  return (...args) => {
    clearTimeout(timer);

    timer = setTimeout(() => fn(...args), wait);
  };
}

// Usage
const onSearch = debounce((query: string) => {
  console.log(query);
}, 300);`,
};
