import type { CLITool } from "../types";
import { gh } from "./gh";
import { lazygit } from "./lazygit";
import { gitui } from "./git-ui";

export { gh, lazygit, gitui };

export const gitTools: CLITool[] = [gh, lazygit, gitui];
