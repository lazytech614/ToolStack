import { Doc } from "../types";

export const installation: Doc = {
  slug: "installation",
  title: "Installation",
  description: "Set up ToolStack locally for development or self-hosting.",
  category: "getting-started",
  order: 3,
  content: [
    {
      type: "paragraph",
      text: "ToolStack is a static Next.js application with no database dependency. Cloning and running it locally takes a few minutes.",
    },
    {
      type: "heading",
      level: 2,
      text: "Requirements",
    },
    {
      type: "list",
      items: ["Node.js 18 or later", "pnpm (recommended) or npm", "Git"],
    },
    {
      type: "heading",
      level: 2,
      text: "Clone and install",
    },
    {
      type: "code",
      language: "bash",
      filename: "terminal",
      code: `git clone https://github.com/toolstack/toolstack.git
cd toolstack
pnpm install`,
    },
    {
      type: "heading",
      level: 2,
      text: "Run the dev server",
    },
    {
      type: "code",
      language: "bash",
      filename: "terminal",
      code: `pnpm dev`,
    },
    {
      type: "callout",
      variant: "info",
      title: "Default port",
      text: "The dev server runs on http://localhost:3000 by default.",
    },
    {
      type: "heading",
      level: 2,
      text: "Build for production",
    },
    {
      type: "code",
      language: "bash",
      filename: "terminal",
      code: `pnpm build
pnpm start`,
    },
    {
      type: "callout",
      variant: "tip",
      title: "No environment variables required",
      text: "Since all content is statically defined in TypeScript, ToolStack runs out of the box with zero configuration.",
    },
  ],
};
