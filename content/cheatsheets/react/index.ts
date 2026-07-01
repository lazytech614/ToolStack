import { Cheatsheet } from "../types";
import { reactMeta } from "./meta";
import { hooksSection } from "./hooks";
import { componentsSection } from "./components";
import { renderingSection } from "./rendering";
import { formsSection } from "./forms";

export const reactCheatsheet: Cheatsheet = {
  ...reactMeta,
  sections: [hooksSection, componentsSection, renderingSection, formsSection],
};
