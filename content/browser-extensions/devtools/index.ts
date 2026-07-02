import { BrowserExtension } from "../types";
import { reactDevtools } from "./react-devtools";
import { reduxDevtools } from "./redux-devtools";
import { wappalyzer } from "./wappalyzer";
import { jsonFormatter } from "./json-formatter";

export const devtoolsExtensions: BrowserExtension[] = [
  reactDevtools,
  reduxDevtools,
  wappalyzer,
  jsonFormatter,
];
