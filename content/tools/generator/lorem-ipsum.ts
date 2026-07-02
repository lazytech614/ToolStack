import { Type } from "lucide-react";
import { Tool } from "../types";

export const loremIpsum: Tool = {
  id: "lorem-ipsum",
  name: "Lorem Ipsum",
  description: "Generate placeholder text in paragraphs, sentences, or words with custom length.",
  icon: Type,
  category: "Generator",
  href: "/tools/lorem-ipsum",
  seo: {
    title: "Lorem Ipsum Generator – Placeholder Text ",
    description:
      "Generate Lorem Ipsum placeholder text by paragraphs, sentences, or words. Customize length and copy instantly for mockups and design work.",
    keywords: [
      "lorem ipsum generator",
      "placeholder text",
      "dummy text generator",
      "lorem ipsum",
      "filler text tool",
    ],
  },
};
