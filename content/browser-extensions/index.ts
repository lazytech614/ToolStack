import { BrowserExtension } from "./types";
import { productivityExtensions } from "./productivity";
import { devtoolsExtensions } from "./devtools";
import { aiExtensions } from "./ai";
import { designExtensions } from "./design";
import { privacyExtensions } from "./privacy";
import { accessibilityExtensions } from "./accessibility";

export const browserExtensions: BrowserExtension[] = [
  ...productivityExtensions,
  ...devtoolsExtensions,
  ...aiExtensions,
  ...designExtensions,
  ...privacyExtensions,
  ...accessibilityExtensions,
];

export * from "./types";
export * from "./categories";
export * from "./browsers";
