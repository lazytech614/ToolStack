import { Cheatsheet } from "../types";
import { typescriptMeta } from "./meta";
import { primitiveTypesSection } from "./primitive-types";
import { arraysTuplesSection } from "./arrays-tuples";
import { interfacesSection } from "./interfaces";
import { genericsSection } from "./generics";
import { utilityTypesSection } from "./utility-types";
import { assertionsSection } from "./assertions";

export const typescriptCheatsheet: Cheatsheet = {
  ...typescriptMeta,
  sections: [
    primitiveTypesSection,
    arraysTuplesSection,
    interfacesSection,
    genericsSection,
    utilityTypesSection,
    assertionsSection,
  ],
};
