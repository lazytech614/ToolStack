import type { CLITool } from "../types";
import { httpie } from "./httpie";
import { curlie } from "./curlie";

export { httpie, curlie };

export const networkTools: CLITool[] = [httpie, curlie];
