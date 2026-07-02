import { Tool } from "../types";
import { commitGenerator } from "./commit-generator";
import { hashGenerator } from "./hash-generator";
import { jsonToSchema } from "./json-to-schema";
import { loremIpsum } from "./lorem-ipsum";
import { markdownTable } from "./markdown-table";
import { readmeGenerator } from "./readme-generator";
import { uuidGenerator } from "./uuid-generator";

export const generatorTools: Tool[] = [
  commitGenerator,
  hashGenerator,
  jsonToSchema,
  loremIpsum,
  markdownTable,
  readmeGenerator,
  uuidGenerator,
];
