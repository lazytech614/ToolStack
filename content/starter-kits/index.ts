import type { StarterKit } from "./types";

import { astroKits } from "./astro";
import { nextjsKits } from "./nextjs";
import { nuxtKits } from "./nuxt";
import { reactKits } from "./react";
import { remixKits } from "./remix";
import { sveltekitKits } from "./sveltekit";

export { nextjsKits, reactKits, remixKits, sveltekitKits, astroKits, nuxtKits };

export * from "./types";
export * from "./features";
export * from "./frameworks";
export * from "./pricing";

export const starterKits: StarterKit[] = [
  ...nextjsKits,
  ...reactKits,
  ...remixKits,
  ...sveltekitKits,
  ...astroKits,
  ...nuxtKits,
];
