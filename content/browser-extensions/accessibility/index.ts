import { BrowserExtension } from "../types";
import { axeDevtools } from "./axe-devtools";
import { wave } from "./wave";

export const accessibilityExtensions: BrowserExtension[] = [axeDevtools, wave];
