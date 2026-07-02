import type { CLITool } from "../types";
import { lazydocker } from "./lazy-docker";
import { dive } from "./dive";

export { lazydocker, dive };

export const dockerTools: CLITool[] = [lazydocker, dive];
