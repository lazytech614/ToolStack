import type { VSCodeExtension } from "../types";
import { eslint } from "./eslint";
import { biome } from "./biome";
import { stylelint } from "./style-lint";

export { eslint, biome, stylelint };

export const lintingExtensions: VSCodeExtension[] = [eslint, biome, stylelint];
