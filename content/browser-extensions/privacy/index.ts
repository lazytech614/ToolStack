import { BrowserExtension } from "../types";
import { privacyBadger } from "./privacy-badger";
import { clearUrls } from "./clearurls";

export const privacyExtensions: BrowserExtension[] = [privacyBadger, clearUrls];
