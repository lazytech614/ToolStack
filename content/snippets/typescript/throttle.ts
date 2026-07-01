import { Snippet } from "../types";

export const throttleSnippet: Snippet = {
  id: "ts-throttle",
  title: "throttle",
  description: "Ensures a function is called at most once every specified time interval.",
  language: "typescript",
  tags: ["performance", "utils"],
  difficulty: "Intermediate",
  category: "Utilities",

  code: `function throttle<T extends (...args: unknown[]) => void>(
  fn: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle = false;

  return (...args) => {
    if (!inThrottle) {
      fn(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

// Usage
const onScroll = throttle(() => {
  console.log("scrolled");
}, 200);`,
};
