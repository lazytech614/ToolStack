import { GlossaryTerm } from "../types";

export const restTerm: GlossaryTerm = {
  id: "rest",
  term: "REST",
  definition:
    "Representational State Transfer. An architectural style for designing networked applications using stateless HTTP requests. Resources are identified by URLs and manipulated using standard HTTP methods (GET, POST, PUT, DELETE).",
  category: "networking",
  related: ["graphql", "websocket", "cors"],
};
