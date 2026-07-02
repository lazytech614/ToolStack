import { Tool } from "../types";
import { clipboardManager } from "./clipboard-manager";
import { ipLookup } from "./ip-lookup";
import { jwtDebugger } from "./jwt-debugger";
import { minifier } from "./minifier";
import { regexTester } from "./regex-tester";
import { sideBySide } from "./side-by-side";
import { urlParser } from "./url-parser";

export const utilitiesTools: Tool[] = [
  clipboardManager,
  ipLookup,
  jwtDebugger,
  minifier,
  regexTester,
  sideBySide,
  urlParser,
];
