import type { Difficulty } from "./types";

export interface DifficultyMeta {
  label: Difficulty;
  description: string;
  colorClass: string;
}

export const difficulties: DifficultyMeta[] = [
  {
    label: "Beginner",
    description:
      "Minimal configuration and small surface area — good for learning or quick prototypes.",
    colorClass: "text-emerald-500 bg-emerald-500/10",
  },
  {
    label: "Intermediate",
    description:
      "Assumes familiarity with the core stack and a few manual setup steps (env vars, DB provisioning).",
    colorClass: "text-amber-500 bg-amber-500/10",
  },
  {
    label: "Advanced",
    description:
      "Production-grade tooling with many moving pieces — expect a learning curve before shipping.",
    colorClass: "text-rose-500 bg-rose-500/10",
  },
];

export function getDifficultyMeta(label: Difficulty): DifficultyMeta {
  return difficulties.find((d) => d.label === label)!;
}
