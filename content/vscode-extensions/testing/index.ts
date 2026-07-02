import type { VSCodeExtension } from "../types";
import { jest } from "./jest";
import { playwright } from "./playwright";

export { jest, playwright };

export const testingExtensions: VSCodeExtension[] = [jest, playwright];
