import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Developer Documentation",

  description:
    "Browse structured documentation for programming languages, frameworks, libraries, and developer tools. Learn concepts with practical examples and clear explanations.",

  keywords: [
    "developer documentation",
    "programming docs",
    "JavaScript documentation",
    "TypeScript docs",
    "React documentation",
    "Next.js docs",
    "web development documentation",
    "frontend docs",
    "backend docs",
    "Tool Stack",
  ],

  alternates: {
    canonical: "https://tool-stack-kappa.vercel.app/docs",
  },

  openGraph: {
    title: "Developer Documentation | Tool Stack",
    description:
      "Comprehensive documentation for modern web development.",
    url: "https://tool-stack-kappa.vercel.app/docs",
  },
};

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}