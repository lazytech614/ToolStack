import type { VSCodeExtension } from "./types";

import { aiExtensions } from "./ai";
import { dockerExtensions } from "./docker";
import { formattingExtensions } from "./formatting";
import { gitExtensions } from "./git";
import { lintingExtensions } from "./linitng";
import { snippetExtensions } from "./snippets";
import { testingExtensions } from "./testing";
import { themeExtensions } from "./themes";

export * from "./types";
export * from "./categories";

export {
  lintingExtensions,
  formattingExtensions,
  aiExtensions,
  gitExtensions,
  themeExtensions,
  snippetExtensions,
  dockerExtensions,
  testingExtensions,
};

export const vscodeExtensions: VSCodeExtension[] = [
  ...lintingExtensions,
  ...formattingExtensions,
  ...aiExtensions,
  ...gitExtensions,
  ...themeExtensions,
  ...snippetExtensions,
  ...dockerExtensions,
  ...testingExtensions,
];
