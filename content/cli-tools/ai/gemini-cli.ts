import type { CLITool } from "../types";

export const geminiCli: CLITool = {
  id: "gemini-cli",
  name: "Gemini CLI",
  description:
    "Google's open-source AI agent that brings Gemini directly into the terminal for coding, reasoning, and multi-step tasks",
  category: ["AI", "Productivity"],
  installCommands: {
    npm: "npm install -g @google/gemini-cli",
    brew: "brew install gemini-cli",
  },
  shells: ["bash", "zsh", "fish", "powershell"],
  os: ["Mac", "Linux", "Windows"],
  tags: ["ai", "coding-assistant", "google", "agentic"],
  repoUrl: "https://github.com/google-gemini/gemini-cli",
  docsUrl: "https://github.com/google-gemini/gemini-cli/blob/main/docs/index.md",
  stars: 27000,
  version: "0.3.4",
  isFree: true,
  isOpenSource: true,
  lastUpdated: "2025-10-22",
};
