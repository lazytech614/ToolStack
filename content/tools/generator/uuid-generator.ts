import { Shuffle } from "lucide-react";
import { Tool } from "../types";

export const uuidGenerator: Tool = {
  id: "uuid-generator",
  name: "UUID Generator",
  description: "Generate v1, v4, and v5 UUIDs in bulk with formatting options.",
  icon: Shuffle,
  category: "Generator",
  href: "/tools/uuid-generator",
  seo: {
    title: "UUID Generator – v1, v4 & v5 in Bulk ",
    description:
      "Generate RFC-compliant UUIDs in v1, v4, and v5 formats. Bulk generation and formatting options included — all client-side.",
    keywords: [
      "uuid generator",
      "guid generator",
      "v4 uuid",
      "unique id generator",
      "bulk uuid generator",
    ],
  },
};
