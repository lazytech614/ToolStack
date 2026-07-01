import { CheatsheetSection } from "../types";

export const utilityTypesSection: CheatsheetSection = {
  title: "Utility Types",
  language: "typescript",
  snippets: [
    { code: `Partial<User>`, description: "All fields optional" },
    { code: `Required<User>`, description: "All fields required" },
    { code: `Readonly<User>`, description: "All fields readonly" },
    { code: `Pick<User, 'id' | 'name'>`, description: "Pick specific fields" },
    { code: `Omit<User, 'password'>`, description: "Omit specific fields" },
    { code: `Record<string, number>`, description: "Key-value map" },
    { code: `ReturnType<typeof fn>`, description: "Infer return type" },
    { code: `Parameters<typeof fn>`, description: "Infer parameter types" },
  ],
};
