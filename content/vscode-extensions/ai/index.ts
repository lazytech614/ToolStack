import type { VSCodeExtension } from "../types";
import { githubCopilot } from "./github-copilot";
import { cursor } from "./cursor";
import { claudeCode } from "./claude-code";
import { cody } from "./cody";

export { githubCopilot, cursor, claudeCode, cody };

export const aiExtensions: VSCodeExtension[] = [githubCopilot, cursor, claudeCode, cody];
