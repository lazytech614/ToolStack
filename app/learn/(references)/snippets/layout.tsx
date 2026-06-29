import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Code Snippets | Tool Stack",

  description:
    "Discover reusable JavaScript, TypeScript, React, Next.js, CSS, Node.js, SQL, and Git code snippets to speed up development and improve productivity.",

  keywords: [
    "code snippets",
    "JavaScript snippets",
    "TypeScript snippets",
    "React snippets",
    "Next.js snippets",
    "Node.js snippets",
    "CSS snippets",
    "developer snippets",
    "programming examples",
    "Tool Stack",
  ],

  alternates: {
    canonical: "https://tool-stack-kappa.vercel.app/snippets",
  },

  openGraph: {
    title: "Developer Code Snippets | Tool Stack",
    description:
      "Reusable code examples for modern web development.",
    url: "https://tool-stack-kappa.vercel.app/snippets",
  },
};

export default function SnippetsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}