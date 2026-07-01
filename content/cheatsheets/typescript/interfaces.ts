import { CheatsheetSection } from "../types";

export const interfacesSection: CheatsheetSection = {
  title: "Interfaces & Types",
  language: "typescript",
  snippets: [
    {
      code: `interface User {\n  id: number;\n  name: string;\n  email?: string;\n}`,
      description: "Interface with optional field",
    },
    {
      code: `type Point = {\n  x: number;\n  y: number;\n};`,
      description: "Type alias",
    },
    {
      code: `interface Admin extends User {\n  role: "admin";\n}`,
      description: "Interface extension",
    },
    {
      code: `type ID = string | number;`,
      description: "Union type alias",
    },
  ],
};
