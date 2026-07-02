import type { VSCodeExtension } from "../types";
import { catppuccin } from "./catppuccin";
import { oneDarkPro } from "./one-dark-pro";
import { githubTheme } from "./github-theme";

export { catppuccin, oneDarkPro, githubTheme };

export const themeExtensions: VSCodeExtension[] = [catppuccin, oneDarkPro, githubTheme];
