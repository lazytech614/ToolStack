import { Hash } from "lucide-react";
import { Tool } from "../types";

export const hashGenerator: Tool = {
  id: "hash-generator",
  name: "Hash Generator",
  description: "Generate MD5, SHA-1, SHA-256, and SHA-512 hashes from text or files instantly.",
  icon: Hash,
  category: "Generator",
  href: "/tools/hash-generator",
  seo: {
    title: "MD5, SHA-1, SHA-256 & SHA-512 Hash Generator ",
    description:
      "Generate cryptographic hashes from any text or file. Supports MD5, SHA-1, SHA-256, and SHA-512 — all computed offline in your browser.",
    keywords: [
      "hash generator",
      "md5 generator",
      "sha256 generator",
      "sha512 generator",
      "checksum tool",
    ],
  },
};
