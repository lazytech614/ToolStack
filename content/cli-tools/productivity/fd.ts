import type { CLITool } from "../types";

export const fd: CLITool = {
  id: "fd",
  name: "fd",
  description:
    "A simple, fast, and user-friendly alternative to find, with sensible defaults and colorized output",
  category: ["Productivity", "Search", "File Management"],
  installCommands: {
    brew: "brew install fd",
    apt: "sudo apt install fd-find",
    winget: "winget install sharkdp.fd",
    scoop: "scoop install fd",
    cargo: "cargo install fd-find",
  },
  shells: ["bash", "zsh", "fish", "powershell"],
  os: ["Mac", "Linux", "Windows"],
  tags: ["find", "search", "files", "fast"],
  repoUrl: "https://github.com/sharkdp/fd",
  stars: 35000,
  version: "10.2.0",
  isFree: true,
  isOpenSource: true,
  lastUpdated: "2025-07-19",
};
