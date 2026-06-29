import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CLI Tools",

  description:
    "Browse essential command-line tools for developers including Git utilities, Docker CLI, Node.js tools, package managers, terminal productivity apps, DevOps utilities, automation tools, and shell enhancements.",

  keywords: [
    "CLI tools",
    "command line tools",
    "terminal tools",
    "developer CLI",
    "Git CLI",
    "Docker CLI",
    "Node.js CLI",
    "npm tools",
    "pnpm",
    "bun",
    "shell tools",
    "terminal productivity",
    "DevOps tools",
    "Tool Stack",
  ],

  alternates: {
    canonical:
      "https://tool-stack-kappa.vercel.app/resources/cli-tools",
  },

  openGraph: {
    title: "Developer CLI Tools | Tool Stack",
    description:
      "Essential command-line tools and terminal utilities for developers.",
    url:
      "https://tool-stack-kappa.vercel.app/resources/cli-tools",
  },
};

export default function CliToolsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}