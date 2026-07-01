import { databaseTerms } from "./database";
import { devopsTerms } from "./devops";
import { javascriptTerms } from "./javascript";
import { networkingTerms } from "./networking";
import { patternsTerms } from "./patterns";

export const glossaryTerms = [
  ...networkingTerms,
  ...javascriptTerms,
  ...devopsTerms,
  ...databaseTerms,
  ...patternsTerms,
];

export * from "./types";
export * from "./categories";
