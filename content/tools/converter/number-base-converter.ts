import { Calculator } from "lucide-react";
import { Tool } from "../types";

export const numberBaseConverter: Tool = {
  id: "number-base-converter",
  name: "Number Base Converter",
  description: "Convert numbers between binary, octal, decimal, and hexadecimal bases.",
  icon: Calculator,
  category: "Converter",
  href: "/tools/number-base-converter",
  seo: {
    title: "Number Base Converter – Binary, Octal, Hex ",
    description:
      "Convert numbers between binary, octal, decimal, and hexadecimal instantly. Ideal for programmers working with low-level data or bitwise operations.",
    keywords: [
      "number base converter",
      "binary to decimal",
      "hex converter",
      "octal converter",
      "base conversion tool",
    ],
  },
};
