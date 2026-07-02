import type { CLITool } from "../types";
import { eza } from "./eza";
import { yazi } from "./yazi";
import { dust } from "./dust";

export { eza, yazi, dust };

export const fileManagementTools: CLITool[] = [eza, yazi, dust];
