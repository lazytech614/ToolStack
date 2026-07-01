import { backendBoilerplates } from "./backend";
import { frontendBoilerplates } from "./frontend";
import { fullStackBoilerplates } from "./full-stack";
import { mobileBoilerplates } from "./mobile";
import { Boilerplate } from "./types";

export * from "./types";
export * from "./categories";
export * from "./stacks";
export * from "./features";
export * from "./difficulties";
export * from "./helpers";

export { fullStackBoilerplates } from "./full-stack";
export { frontendBoilerplates } from "./frontend";
export { backendBoilerplates } from "./backend";
export { mobileBoilerplates } from "./mobile";

export const boilerplates: Boilerplate[] = [
  ...fullStackBoilerplates,
  ...frontendBoilerplates,
  ...backendBoilerplates,
  ...mobileBoilerplates,
];
