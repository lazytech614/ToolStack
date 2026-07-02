export type Shell = "bash" | "zsh" | "fish" | "powershell";
export type OS = "Mac" | "Windows" | "Linux";
export type InstallMethod =
  "npm" | "brew" | "curl" | "pip" | "cargo" | "apt" | "winget" | "scoop" | "go";

export type Category =
  "Git" | "Productivity" | "File Management" | "Network" | "AI" | "Docker" | "Search";

export interface CLITool {
  id: string;
  name: string;
  description: string;
  category: Category[];
  installCommands: Partial<Record<InstallMethod, string>>;
  shells: Shell[];
  os: OS[];
  tags: string[];
  repoUrl?: string;
  docsUrl?: string;
  stars: number;
  version: string;
  isFree: boolean;
  isOpenSource: boolean;
  lastUpdated: string;
}
