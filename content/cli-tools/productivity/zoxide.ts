import type { CLITool } from "../types";

export const zoxide: CLITool = {
  id: "zoxide",
  name: "zoxide",
  description:
    "A smarter cd command that learns your habits and lets you jump to frequently used directories with a few keystrokes",
  category: ["Productivity", "File Management"],
  installCommands: {
    brew: "brew install zoxide",
    apt: "sudo apt install zoxide",
    winget: "winget install ajeetdsouza.zoxide",
    scoop: "scoop install zoxide",
    cargo: "cargo install zoxide --locked",
  },
  shells: ["bash", "zsh", "fish", "powershell"],
  os: ["Mac", "Linux", "Windows"],
  tags: ["navigation", "cd", "directories", "productivity"],
  repoUrl: "https://github.com/ajeetdsouza/zoxide",
  stars: 25000,
  version: "0.9.6",
  isFree: true,
  isOpenSource: true,
  lastUpdated: "2025-08-05",
};
