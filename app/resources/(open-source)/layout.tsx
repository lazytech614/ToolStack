import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | Developer Resources | Tool Stack",
    default: "Resources",
  },

  description:
    "Curated resources for modern developers including open-source projects, developer tools, assets, and AI-powered resources.",

  keywords: [
    "developer resources",
    "open source",
    "software development",
    "Tool Stack",
  ],
};

export default function ResourcesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}