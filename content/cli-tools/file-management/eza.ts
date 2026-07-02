import type { CLITool } from "../types";

export const eza: CLITool = {
  id: "eza",
  name: "eza",
  description:
    "A modern, maintained replacement for ls with colors, icons, git status, and tree views built in",
  category: ["File Management"],
  installCommands: {
    brew: "brew install eza",
    apt: "sudo apt install eza",
    winget: "winget install eza-community.eza",
    scoop: "scoop install eza",
    cargo: "cargo install eza",
  },
  shells: ["bash", "zsh", "fish", "powershell"],
  os: ["Mac", "Linux", "Windows"],
  tags: ["ls", "files", "modern", "icons", "git-status"],
  repoUrl: "https://github.com/eza-community/eza",
  stars: 18000,
  version: "0.20.2",
  isFree: true,
  isOpenSource: true,
  lastUpdated: "2025-09-30",
};
