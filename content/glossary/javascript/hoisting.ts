import { GlossaryTerm } from "../types";

export const hoistingTerm: GlossaryTerm = {
  id: "hoisting",
  term: "Hoisting",
  definition:
    "JavaScript's default behavior of moving variable and function declarations to the top of their containing scope during the compile phase, before code execution. Only declarations are hoisted, not initializations.",
  category: "javascript",
  related: ["closure"],
};
