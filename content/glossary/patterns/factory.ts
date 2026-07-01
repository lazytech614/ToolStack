import { GlossaryTerm } from "../types";

export const factoryTerm: GlossaryTerm = {
  id: "factory",
  term: "Factory",
  definition:
    "A creational design pattern that provides an interface for creating objects without specifying their exact class, delegating the instantiation logic to a separate function or method.",
  category: "patterns",
  related: ["singleton"],
};
