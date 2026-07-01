import { CheatsheetSection } from "../types";

export const assertionsSection: CheatsheetSection = {
  title: "Type Assertions & Guards",
  language: "typescript",
  snippets: [
    {
      code: `const el = document.getElementById("app") as HTMLDivElement;`,
      description: "Type assertion",
    },
    {
      code: `function isString(val: unknown): val is string {\n  return typeof val === "string";\n}`,
      description: "Type guard",
    },
    { code: `const len = (val as string).length;`, description: "Inline assertion" },
  ],
};
