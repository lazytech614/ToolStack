import { ClipboardCheck } from "lucide-react";
import { Tool } from "../types";

export const clipboardManager: Tool = {
  id: "clipboard-manager",
  name: "Clipboard Manager",
  description:
    "Store and quickly access frequently used text snippets without leaving your workflow.",
  icon: ClipboardCheck,
  category: "Utilities",
  href: "/tools/clipboard-manager",
  seo: {
    title: "Online Clipboard Manager – Save Text Snippets ",
    description:
      "Store, organize, and instantly recall frequently used text snippets. A lightweight clipboard manager that lives in your browser.",
    keywords: [
      "clipboard manager",
      "text snippets",
      "copy paste tool",
      "snippet manager",
      "clipboard tool",
    ],
  },
};
