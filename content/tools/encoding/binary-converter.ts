import { Binary } from "lucide-react";
import { Tool } from "../types";

export const binaryConverter: Tool = {
  id: "binary-converter",
  name: "Binary Converter",
  description: "Encode text to binary and decode binary strings back to plain text.",
  icon: Binary,
  category: "Encoding",
  href: "/tools/binary-converter",
  seo: {
    title: "Binary to Text Converter – Encode & Decode ",
    description:
      "Convert plain text to binary (0s and 1s) and decode binary strings back to readable text. Fast, offline, and no data stored.",
    keywords: [
      "binary converter",
      "text to binary",
      "binary to text",
      "binary encoder",
      "binary decoder",
    ],
  },
};
