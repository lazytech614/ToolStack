import type { CLITool } from "../types";
import { claude } from "./claude";
import { geminiCli } from "./gemini-cli";
import { aider } from "./aider";

export { claude, geminiCli, aider };

export const aiTools: CLITool[] = [claude, geminiCli, aider];
