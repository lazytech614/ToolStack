import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Developer Tools",
    template: "%s | Developer Tools | Tool Stack",
  },

  description:
    "Discover the best developer tools to improve your productivity. Explore VS Code extensions, browser extensions, command-line utilities, debugging tools, automation software, and workflow-enhancing resources for modern web development.",

  keywords: [
    "developer tools",
    "software development tools",
    "developer productivity",
    "coding tools",
    "programming tools",
    "developer workflow",
    "frontend tools",
    "backend tools",
    "web development",
    "Tool Stack",
  ],

  alternates: {
    canonical: "https://tool-stack-kappa.vercel.app/resources",
  },

  openGraph: {
    title: "Developer Tools | Tool Stack",
    description: "Curated developer tools, extensions, CLI utilities and productivity resources.",
    url: "https://tool-stack-kappa.vercel.app/resources",
    siteName: "Tool Stack",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Developer Tools | Tool Stack",
    description: "Discover the best tools to improve your development workflow.",
  },
};

export default function DeveloperToolsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
