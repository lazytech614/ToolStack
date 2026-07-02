import type { Framework } from "./types";

export interface FrameworkMeta {
  id: Framework;
  label: string;
  color: string; // brand color, for UI badges
  docsUrl: string;
}

export const FRAMEWORKS: FrameworkMeta[] = [
  { id: "Next.js", label: "Next.js", color: "#000000", docsUrl: "https://nextjs.org/docs" },
  { id: "React", label: "React", color: "#61DAFB", docsUrl: "https://react.dev" },
  { id: "Remix", label: "Remix", color: "#3992FF", docsUrl: "https://remix.run/docs" },
  { id: "SvelteKit", label: "SvelteKit", color: "#FF3E00", docsUrl: "https://kit.svelte.dev/docs" },
  { id: "Astro", label: "Astro", color: "#FF5D01", docsUrl: "https://docs.astro.build" },
  { id: "Nuxt", label: "Nuxt", color: "#00DC82", docsUrl: "https://nuxt.com/docs" },
];

export const allFrameworks: Framework[] = FRAMEWORKS.map((f) => f.id);
