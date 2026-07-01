import { GlossaryTerm } from "../types";

export const closureTerm: GlossaryTerm = {
  id: "closure",
  term: "Closure",
  definition:
    "A function that retains access to variables from its enclosing lexical scope even after that outer function has finished executing. Closures are how JavaScript functions 'remember' the environment in which they were created.",
  category: "javascript",
  related: ["event-loop", "hoisting"],
};
