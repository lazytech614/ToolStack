import { GlossaryTerm } from "../types";

export const dockerTerm: GlossaryTerm = {
  id: "docker",
  term: "Docker",
  definition:
    "A platform for packaging applications and their dependencies into lightweight, portable containers that run consistently across different environments, from a developer's laptop to production servers.",
  category: "devops",
  related: ["kubernetes", "ci-cd"],
};
