import type { CLITool } from "../types";

export const bat: CLITool = {
  id: "bat",
  name: "bat",
  description:
    "A cat clone with syntax highlighting, Git integration, and automatic paging for viewing files in the terminal",
  category: ["Productivity", "File Management"],
  installCommands: {
    brew: "brew install bat",
    apt: "sudo apt install bat",
    winget: "winget install sharkdp.bat",
    scoop: "scoop install bat",
    cargo: "cargo install --locked bat",
  },
  shells: ["bash", "zsh", "fish", "powershell"],
  os: ["Mac", "Linux", "Windows"],
  tags: ["cat", "syntax-highlighting", "pager", "viewer"],
  repoUrl: "https://github.com/sharkdp/bat",
  stars: 51000,
  version: "0.24.0",
  isFree: true,
  isOpenSource: true,
  lastUpdated: "2025-06-12",
};
