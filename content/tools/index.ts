import { Tool } from "./types";

import { comparisonTools } from "./comparison";
import { converterTools } from "./converter";
import { encodingTools } from "./encoding";
import { formattingTools } from "./formatting";
import { generatorTools } from "./generator";
import { previewTools } from "./preview";
import { utilitiesTools } from "./utilities";

export const ALL_TOOLS: Tool[] = [
  ...generatorTools,
  ...comparisonTools,
  ...encodingTools,
  ...formattingTools,
  ...converterTools,
  ...previewTools,
  ...utilitiesTools,
];

export * from "./types";
export * from "./categories";
export * from "./helpers";
