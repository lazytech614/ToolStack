import { Cheatsheet } from "../types";
import { cssMeta } from "./meta";
import { flexboxSection } from "./flexbox";
import { gridSection } from "./grid";
import { positioningSection } from "./positioning";
import { animationSection } from "./animation";

export const cssCheatsheet: Cheatsheet = {
  ...cssMeta,
  sections: [flexboxSection, gridSection, positioningSection, animationSection],
};
