import type { VSCodeExtension } from "../types";
import { es7React } from "./es7-react";
import { tailwindSnippets } from "./tailwind-snippets";

export { es7React, tailwindSnippets };

export const snippetExtensions: VSCodeExtension[] = [es7React, tailwindSnippets];
