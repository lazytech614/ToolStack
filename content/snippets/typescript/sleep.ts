import { Snippet } from "../types";

export const sleepSnippet: Snippet = {
  id: "ts-sleep",
  title: "sleep",
  description: "Pauses async execution for a given number of milliseconds.",
  language: "typescript",
  tags: ["async", "utils"],
  difficulty: "Beginner",
  category: "Utilities",

  code: `function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Usage
async function run() {
  console.log("start");
  await sleep(1000);
  console.log("one second later");
}`,
};
