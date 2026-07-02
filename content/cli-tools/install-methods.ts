import type { InstallMethod } from "./types";

export const CLI_TOOL_INSTALL_METHODS: { id: InstallMethod; label: string; os: string[] }[] = [
  { id: "brew", label: "Homebrew", os: ["Mac", "Linux"] },
  { id: "apt", label: "APT", os: ["Linux"] },
  { id: "npm", label: "npm", os: ["Mac", "Linux", "Windows"] },
  { id: "pip", label: "pip", os: ["Mac", "Linux", "Windows"] },
  { id: "cargo", label: "Cargo", os: ["Mac", "Linux", "Windows"] },
  { id: "go", label: "Go install", os: ["Mac", "Linux", "Windows"] },
  { id: "curl", label: "curl script", os: ["Mac", "Linux"] },
  { id: "winget", label: "winget", os: ["Windows"] },
  { id: "scoop", label: "Scoop", os: ["Windows"] },
];

export const allInstallMethods: InstallMethod[] = CLI_TOOL_INSTALL_METHODS.map((m) => m.id);
