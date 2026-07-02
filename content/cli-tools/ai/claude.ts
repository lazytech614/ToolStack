import type { CLITool } from "../types";

export const claude: CLITool = {
  id: "claude",
  name: "Claude Code",
  description:
    "Anthropic's agentic coding tool that lives in your terminal, understands your codebase, and helps you code faster through natural language",
  category: ["AI", "Productivity"],
  installCommands: {
    npm: "npm install -g @anthropic-ai/claude-code",
  },
  shells: ["bash", "zsh", "fish", "powershell"],
  os: ["Mac", "Linux", "Windows"],
  tags: ["ai", "coding-assistant", "agentic", "anthropic"],
  repoUrl: "https://github.com/anthropics/claude-code",
  docsUrl: "https://docs.claude.com/en/docs/claude-code",
  stars: 33000,
  version: "1.5.0",
  isFree: false,
  isOpenSource: false,
  lastUpdated: "2025-12-01",
};
