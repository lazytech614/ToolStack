import { BrowserExtension } from "../types";
import { chatgptSidebar } from "./chatgpt-sidebar";
import { claudeHelper } from "./claude-helper";
import { perplexity } from "./perplexity";

export const aiExtensions: BrowserExtension[] = [chatgptSidebar, claudeHelper, perplexity];
