import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Open Source Project Templates",

  description:
    "Browse production-ready open-source project templates for React, Next.js, Vue, Angular, Node.js, Tailwind CSS, and other modern technologies. Build faster with professionally structured starter templates.",

  keywords: [
    "project templates",
    "Next.js templates",
    "React templates",
    "Vue templates",
    "Node.js templates",
    "Tailwind templates",
    "open source templates",
    "website templates",
    "developer templates",
    "coding templates",
    "Tool Stack",
  ],

  alternates: {
    canonical: "https://tool-stack-kappa.vercel.app/resources/templates",
  },

  openGraph: {
    title: "Open Source Project Templates | Tool Stack",
    description:
      "Discover production-ready templates for modern web development.",
    url: "https://tool-stack-kappa.vercel.app/resources/templates",
    type: "website",
  },
};

export default function TemplatesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}