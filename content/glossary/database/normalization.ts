import { GlossaryTerm } from "../types";

export const normalizationTerm: GlossaryTerm = {
  id: "normalization",
  term: "Normalization",
  definition:
    "The process of organizing relational database tables to reduce data redundancy and improve data integrity, typically by splitting large tables into smaller ones and defining relationships between them via foreign keys.",
  category: "database",
  related: ["join", "acid"],
};
