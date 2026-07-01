import { GlossaryTerm } from "../types";

export const singletonTerm: GlossaryTerm = {
  id: "singleton",
  term: "Singleton",
  definition:
    "A design pattern that restricts a class to a single instance and provides a global point of access to it, commonly used for shared resources like configuration objects or connection pools.",
  category: "patterns",
  related: ["factory"],
};
