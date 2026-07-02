import type { Shell } from "./types";

export const SHELLS: { id: Shell; label: string }[] = [
  { id: "bash", label: "Bash" },
  { id: "zsh", label: "Zsh" },
  { id: "fish", label: "Fish" },
  { id: "powershell", label: "PowerShell" },
];

export const allShells: Shell[] = SHELLS.map((s) => s.id);
