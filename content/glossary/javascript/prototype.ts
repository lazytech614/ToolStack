import { GlossaryTerm } from "../types";

export const prototypeTerm: GlossaryTerm = {
  id: "prototype",
  term: "Prototype",
  definition:
    "The mechanism by which JavaScript objects inherit properties and methods from one another. Every object has an internal link to a prototype object, forming a prototype chain that's traversed when a property isn't found directly on the object.",
  category: "javascript",
  related: ["closure"],
};
