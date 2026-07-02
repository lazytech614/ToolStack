import { Columns } from "lucide-react";
import { Tool } from "../types";

export const sideBySide: Tool = {
  id: "side-by-side",
  name: "Side-by-Side View",
  description: "Open two tools simultaneously in a resizable split-pane layout.",
  icon: Columns,
  category: "Utilities",
  href: "/tools/side-by-side",
  seo: {
    title: "Side-by-Side Tool View – Split Pane Layout ",
    description:
      "Run two developer tools simultaneously in a resizable split-pane layout. Perfect for comparing outputs or multitasking across tools.",
    keywords: [
      "side by side view",
      "split pane tools",
      "dual tool view",
      "developer tools layout",
      "compare tools",
    ],
  },
};
