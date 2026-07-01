import { cssSnippets } from "./css";
import { reactSnippets } from "./react";
import { typescriptSnippets } from "./typescript";

export const snippets = [...typescriptSnippets, ...reactSnippets, ...cssSnippets];
