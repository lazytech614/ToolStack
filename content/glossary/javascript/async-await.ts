import { GlossaryTerm } from "../types";

export const asyncAwaitTerm: GlossaryTerm = {
  id: "async-await",
  term: "Async/Await",
  definition:
    "Syntactic sugar built on top of Promises that lets asynchronous code be written and read like synchronous code. An `async` function always returns a Promise, and `await` pauses execution until that Promise settles.",
  category: "javascript",
  related: ["promise", "event-loop"],
};
