import { Globe } from "lucide-react";
import { Tool } from "../types";

export const urlParser: Tool = {
  id: "url-parser",
  name: "URL Parser",
  description:
    "Dissect any URL into its components: protocol, host, path, query params, and fragment.",
  icon: Globe,
  category: "Utilities",
  href: "/tools/url-parser",
  seo: {
    title: "URL Parser & Dissector Online ",
    description:
      "Break down any URL into its individual components — protocol, hostname, path, query parameters, and fragment. Useful for debugging and API work.",
    keywords: [
      "url parser",
      "url dissector",
      "parse url online",
      "query parameter parser",
      "url components",
    ],
  },
};
