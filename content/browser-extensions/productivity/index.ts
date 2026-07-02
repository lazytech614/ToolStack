import { BrowserExtension } from "../types";
import { ublockOrigin } from "./ublock-origin";
import { darkReader } from "./dark-reader";
import { bitwarden } from "./bitwarden";
import { oneTab } from "./one-tab";

export const productivityExtensions: BrowserExtension[] = [
  ublockOrigin,
  darkReader,
  bitwarden,
  oneTab,
];
