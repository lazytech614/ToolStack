import { CheatsheetSection } from "../types";

export const arraysTuplesSection: CheatsheetSection = {
  title: "Arrays & Tuples",
  language: "typescript",
  snippets: [
    { code: `let nums: number[] = [1, 2, 3];`, description: "Array shorthand" },
    { code: `let strs: Array<string> = ["a", "b"];`, description: "Generic array" },
    { code: `let pair: [string, number] = ["age", 30];`, description: "Tuple" },
    {
      code: `let rgb: readonly [number, number, number] = [255, 0, 0];`,
      description: "Readonly tuple",
    },
  ],
};
