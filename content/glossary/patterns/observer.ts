import { GlossaryTerm } from "../types";

export const observerTerm: GlossaryTerm = {
  id: "observer",
  term: "Observer",
  definition:
    "A behavioral design pattern where an object (the subject) maintains a list of dependents (observers) and notifies them automatically of any state changes, commonly used to implement event handling systems.",
  category: "patterns",
  related: ["factory"],
};
