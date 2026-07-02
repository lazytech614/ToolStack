import type { CLITool } from "../types";
import { fzf } from "./fzf";
import { zoxide } from "./zoxide";
import { bat } from "./bat";
import { ripgrep } from "./ripgrep";
import { fd } from "./fd";

export { fzf, zoxide, bat, ripgrep, fd };

export const productivityTools: CLITool[] = [fzf, zoxide, bat, ripgrep, fd];
