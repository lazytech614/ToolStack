import type { CLITool } from "../types";

export const aider: CLITool = {
  id: "aider",
  name: "aider",
  description:
    "AI pair programming in your terminal that edits code in your local git repo, works with multiple LLM providers, and auto-commits changes",
  category: ["AI", "Productivity", "Git"],
  installCommands: {
    pip: "pip install aider-install && aider-install",
    brew: "brew install aider",
    curl: "curl -LsSf https://aider.chat/install.sh | sh",
  },
  shells: ["bash", "zsh", "fish", "powershell"],
  os: ["Mac", "Linux", "Windows"],
  tags: ["ai", "pair-programming", "git", "llm"],
  repoUrl: "https://github.com/Aider-AI/aider",
  docsUrl: "https://aider.chat/docs/",
  stars: 33000,
  version: "0.68.0",
  isFree: true,
  isOpenSource: true,
  lastUpdated: "2025-11-18",
};
