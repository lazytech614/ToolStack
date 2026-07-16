import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Learn",
  description:
    "Master web development with comprehensive learning resources. Explore programming cheatsheets, technical documentation, developer glossaries, and reusable code snippets for JavaScript, TypeScript, React, Next.js, CSS, Git, and more.",

  keywords: [
    "developer learning",
    "programming tutorials",
    "web development",
    "frontend development",
    "backend development",
    "coding resources",
    "developer guides",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "CSS",
    "Git",
    "Tool Stack",
  ],

  alternates: {
    canonical: "https://tool-stack-kappa.vercel.app/learn",
  },

  openGraph: {
    title: "Developer Learning Resources | Tool Stack",
    description:
      "Explore programming cheatsheets, documentation, glossaries, and reusable code snippets in one place.",
    url: "https://tool-stack-kappa.vercel.app/learn",
    siteName: "Tool Stack",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Developer Learning Resources | Tool Stack",
    description: "Programming resources for modern web developers.",
  },
};

export default function LearnLayout({ children }: { children: React.ReactNode }) {
  return children;
}
