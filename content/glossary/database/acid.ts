import { GlossaryTerm } from "../types";

export const acidTerm: GlossaryTerm = {
  id: "acid",
  term: "ACID",
  definition:
    "A set of properties guaranteeing reliable database transactions: Atomicity (all-or-nothing), Consistency (valid state transitions), Isolation (concurrent transactions don't interfere), and Durability (committed changes persist).",
  category: "database",
  related: ["normalization"],
};
