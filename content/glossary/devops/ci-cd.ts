import { GlossaryTerm } from "../types";

export const ciCdTerm: GlossaryTerm = {
  id: "ci-cd",
  term: "CI/CD",
  definition:
    "Continuous Integration/Continuous Deployment. A set of practices where code changes are automatically built, tested (CI), and released to production (CD), reducing manual steps and enabling faster, more reliable releases.",
  category: "devops",
  related: ["docker", "kubernetes"],
};
