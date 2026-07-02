import { Link2 } from "lucide-react";
import { Tool } from "../types";

export const base64Url: Tool = {
  id: "base64-url",
  name: "Base64 / URL",
  description:
    "Encode and decode binary string fragments, escape special URL query variables, and test strings.",
  icon: Link2,
  category: "Encoding",
  href: "/tools/base64-url",
  status: "ACTIVE",
  seo: {
    title: "Base64 & URL Encoder / Decoder Online ",
    description:
      "Encode and decode Base64 strings and URL-encode or decode query parameters instantly in your browser. No data leaves your machine.",
    keywords: ["base64 encoder", "base64 decoder", "url encoder", "url decoder", "encoding tools"],
  },
};
