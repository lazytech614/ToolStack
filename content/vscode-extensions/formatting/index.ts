import type { VSCodeExtension } from "../types";
import { prettier } from "./prettier";
import { prettierEslint } from "./prettier-eslint";

export { prettier, prettierEslint };

export const formattingExtensions: VSCodeExtension[] = [prettier, prettierEslint];
