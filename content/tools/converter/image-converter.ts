import { Image } from "lucide-react";
import { Tool } from "../types";

export const imageConverter: Tool = {
  id: "image-converter",
  name: "Image Converter",
  description: "Convert images between PNG, JPEG, WebP, and SVG formats directly in the browser.",
  icon: Image,
  category: "Converter",
  href: "/tools/image-converter",
  isNew: true,
  seo: {
    title: "Online Image Converter – PNG, JPEG, WebP, SVG ",
    description:
      "Convert images between PNG, JPEG, WebP, and SVG formats directly in your browser. No upload required — all processing is done client-side.",
    keywords: [
      "image converter",
      "png to webp",
      "jpeg to png",
      "convert image online",
      "webp converter",
    ],
  },
};
