import { GlossaryTerm } from "../types";

export const eventLoopTerm: GlossaryTerm = {
  id: "event-loop",
  term: "Event Loop",
  definition:
    "The mechanism that allows JavaScript to perform non-blocking asynchronous operations despite being single-threaded. It continuously checks the call stack and task queues, pushing queued callbacks onto the stack once it's empty.",
  category: "javascript",
  related: ["promise", "async-await"],
};
