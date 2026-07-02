import { Regex } from "lucide-react";
import { Tool } from "../types";

export const regexTester: Tool = {
  id: "regex-tester",
  name: "Regex Tester",
  description:
    "Test regular expressions with live match highlighting, group captures, and flag toggles.",
  icon: Regex,
  category: "Utilities",
  href: "/tools/regex-tester",
  isFeatured: true,
  status: "ACTIVE",
  seo: {
    title: "Regex Tester – Live Match Highlighting & Group Captures ",
    description:
      "Test and debug regular expressions in real-time with live match highlighting, capture group inspection, and flag toggles (g, i, m, s).",
    keywords: [
      "regex tester",
      "regular expression tester",
      "regex debugger",
      "regex online",
      "regex match highlighter",
    ],
  },
};
