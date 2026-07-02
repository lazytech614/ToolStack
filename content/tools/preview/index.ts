import { Tool } from "../types";
import { csvViewer } from "./csv-viewer";
import { htmlPreview } from "./html-preview";
import { markdownPreview } from "./markdown-preview";

export const previewTools: Tool[] = [csvViewer, htmlPreview, markdownPreview];
