import type { CLITool } from "./types";

import { aiTools } from "./ai";
import { dockerTools } from "./docker";
import { fileManagementTools } from "./file-management";
import { gitTools } from "./git";
import { networkTools } from "./network";
import { productivityTools } from "./productivity";

export * from "./types";
export * from "./ai";
export * from "./docker";
export * from "./file-management";
export * from "./git";
export * from "./network";
export * from "./productivity";

export { gitTools, productivityTools, fileManagementTools, networkTools, aiTools, dockerTools };

export const cliTools: CLITool[] = [
  ...gitTools,
  ...productivityTools,
  ...fileManagementTools,
  ...networkTools,
  ...aiTools,
  ...dockerTools,
];
