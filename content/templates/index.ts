import type { Template } from "./types";

import { astroTemplates } from "./astro";
import { nextjsTemplates } from "./nextjs";
import { reactTemplates } from "./react";
import { svelteTemplates } from "./svelte";
import { vueTemplates } from "./vue";

export { nextjsTemplates, reactTemplates, svelteTemplates, astroTemplates, vueTemplates };

export * from "./types";
export * from "./categories";
export * from "./tags";

export const allTemplates: Template[] = [
  ...nextjsTemplates,
  ...reactTemplates,
  ...svelteTemplates,
  ...astroTemplates,
  ...vueTemplates,
];
