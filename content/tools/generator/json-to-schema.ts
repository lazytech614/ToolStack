import { FileJson } from "lucide-react";
import { Tool } from "../types";

export const jsonToSchema: Tool = {
  id: "json-to-schema",
  name: "JSON → Schema",
  description: "Automatically infer a JSON Schema from any JSON document you paste in.",
  icon: FileJson,
  category: "Generator",
  href: "/tools/json-to-schema",
  isNew: true,
  seo: {
    title: "JSON to JSON Schema Generator Online ",
    description:
      "Paste any JSON document and automatically generate a valid JSON Schema. Ideal for API documentation, validation, and TypeScript type generation.",
    keywords: [
      "json schema generator",
      "json to schema",
      "generate json schema",
      "json schema tool",
      "api schema generator",
    ],
  },
};
