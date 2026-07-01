import { CheatsheetSection } from "../types";

export const genericsSection: CheatsheetSection = {
  title: "Generics",
  language: "typescript",
  snippets: [
    {
      code: `function identity<T>(arg: T): T {\n  return arg;\n}`,
      description: "Generic function",
    },
    {
      code: `interface Box<T> {\n  value: T;\n}`,
      description: "Generic interface",
    },
    {
      code: `function first<T>(arr: T[]): T {\n  return arr[0];\n}`,
      description: "Generic with array",
    },
  ],
};
