import { Tool } from "../types";
import { colorConverter } from "./color-converter";
import { imageConverter } from "./image-converter";
import { numberBaseConverter } from "./number-base-converter";
import { unixTimestamp } from "./unix-timestamp";

export const converterTools: Tool[] = [
  colorConverter,
  imageConverter,
  numberBaseConverter,
  unixTimestamp,
];
