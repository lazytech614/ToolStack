import { GlossaryTerm } from "../types";

export const graphqlTerm: GlossaryTerm = {
  id: "graphql",
  term: "GraphQL",
  definition:
    "A query language for APIs and a runtime for executing those queries. Unlike REST, clients request exactly the data they need in a single request, reducing over-fetching and under-fetching.",
  category: "networking",
  related: ["rest", "websocket"],
};
