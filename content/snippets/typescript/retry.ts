import { Snippet } from "../types";

export const retrySnippet: Snippet = {
  id: "ts-retry",
  title: "retry",
  description:
    "Retries an async function a set number of times with an optional delay between attempts.",
  language: "typescript",
  tags: ["async", "utils"],
  difficulty: "Intermediate",
  category: "Utilities",

  code: `async function retry<T>(
  fn: () => Promise<T>,
  attempts: number,
  delayMs = 0
): Promise<T> {
  try {
    return await fn();
  } catch (err) {
    if (attempts <= 1) throw err;
    if (delayMs) await new Promise((r) => setTimeout(r, delayMs));
    return retry(fn, attempts - 1, delayMs);
  }
}

// Usage
const data = await retry(() => fetch("/api/data").then((r) => r.json()), 3, 500);`,
};
