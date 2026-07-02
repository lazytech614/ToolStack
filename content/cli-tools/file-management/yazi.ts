import type { CLITool } from "../types";

export const yazi: CLITool = {
  id: "yazi",
  name: "yazi",
  description:
    "A blazing fast terminal file manager written in Rust, based on async I/O with built-in image and video previews",
  category: ["File Management"],
  installCommands: {
    brew: "brew install yazi",
    winget: "winget install sxyazi.yazi",
    scoop: "scoop install yazi",
    cargo: "cargo install --locked yazi-fm yazi-cli",
  },
  shells: ["bash", "zsh", "fish", "powershell"],
  os: ["Mac", "Linux", "Windows"],
  tags: ["file-manager", "tui", "rust", "preview"],
  repoUrl: "https://github.com/sxyazi/yazi",
  stars: 24000,
  version: "0.4.2",
  isFree: true,
  isOpenSource: true,
  lastUpdated: "2025-11-05",
};
