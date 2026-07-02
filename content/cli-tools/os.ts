import type { OS } from "./types";

export const OPERATING_SYSTEMS: { id: OS; label: string }[] = [
  { id: "Mac", label: "macOS" },
  { id: "Linux", label: "Linux" },
  { id: "Windows", label: "Windows" },
];

export const allOS: OS[] = OPERATING_SYSTEMS.map((o) => o.id);
