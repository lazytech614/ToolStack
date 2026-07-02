import type { CLITool } from "../types";

export const httpie: CLITool = {
  id: "httpie",
  name: "HTTPie",
  description:
    "A modern, user-friendly command-line HTTP client with intuitive syntax, JSON support, and colorized output",
  category: ["Network"],
  installCommands: {
    brew: "brew install httpie",
    apt: "sudo apt install httpie",
    pip: "pip install httpie",
    winget: "winget install HTTPie.HTTPie",
    scoop: "scoop install httpie",
  },
  shells: ["bash", "zsh", "fish", "powershell"],
  os: ["Mac", "Linux", "Windows"],
  tags: ["http", "api", "rest", "curl-alternative"],
  repoUrl: "https://github.com/httpie/cli",
  docsUrl: "https://httpie.io/docs/cli",
  stars: 34000,
  version: "3.2.4",
  isFree: true,
  isOpenSource: true,
  lastUpdated: "2025-03-14",
};
