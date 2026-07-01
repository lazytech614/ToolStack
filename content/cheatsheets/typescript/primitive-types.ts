import { CheatsheetSection } from "../types";

export const primitiveTypesSection: CheatsheetSection = {
  title: "Primitive Types",
  language: "typescript",
  snippets: [
    { code: `let name: string = "Alice";`, description: "String" },
    { code: `let age: number = 30;`, description: "Number" },
    { code: `let active: boolean = true;`, description: "Boolean" },
    { code: `let data: null = null;`, description: "Null" },
    { code: `let value: undefined = undefined;`, description: "Undefined" },
    { code: `let id: string | number = 1;`, description: "Union type" },
  ],
};
