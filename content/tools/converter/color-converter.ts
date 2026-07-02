import { Palette } from "lucide-react";
import { Tool } from "../types";

export const colorConverter: Tool = {
  id: "color-converter",
  name: "Color Converter",
  description: "Convert between HEX, RGB, HSL, and HSV color formats with a visual picker.",
  icon: Palette,
  category: "Converter",
  href: "/tools/color-converter",
  isFeatured: true,
  seo: {
    title: "Color Converter – HEX, RGB, HSL & HSV Online ",
    description:
      "Convert colors between HEX, RGB, HSL, and HSV formats instantly with a visual color picker. Great for designers and frontend developers.",
    keywords: [
      "color converter",
      "hex to rgb",
      "rgb to hsl",
      "color format converter",
      "color picker tool",
    ],
  },
};
