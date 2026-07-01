import { GlossaryTerm } from "../types";

export const promiseTerm: GlossaryTerm = {
  id: "promise",
  term: "Promise",
  definition:
    "An object representing the eventual completion or failure of an asynchronous operation. A Promise exists in one of three states: pending, fulfilled, or rejected, and lets you chain `.then()`/`.catch()` handlers.",
  category: "javascript",
  related: ["async-await", "event-loop"],
};
