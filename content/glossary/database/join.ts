import { GlossaryTerm } from "../types";

export const joinTerm: GlossaryTerm = {
  id: "join",
  term: "Join",
  definition:
    "A SQL operation that combines rows from two or more tables based on a related column. Common types include INNER JOIN (only matching rows), LEFT JOIN (all left rows plus matches), and FULL OUTER JOIN.",
  category: "database",
  related: ["normalization", "indexing"],
};
