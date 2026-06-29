import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Open Source Starter Kits",

  description:
    "Find complete starter kits for Next.js, React, Node.js, SaaS applications, authentication systems, databases, payments, dashboards, and full-stack development projects.",

  keywords: [
    "starter kits",
    "Next.js starter kit",
    "React starter kit",
    "SaaS starter kit",
    "full stack starter",
    "authentication starter",
    "dashboard starter",
    "developer starter kits",
    "open source starter kit",
    "Tool Stack",
  ],

  alternates: {
    canonical:
      "https://tool-stack-kappa.vercel.app/resources/starter-kits",
  },

  openGraph: {
    title: "Developer Starter Kits | Tool Stack",
    description:
      "Complete starter kits for building modern web applications faster.",
    url: "https://tool-stack-kappa.vercel.app/resources/starter-kits",
    type: "website",
  },
};

export default function StarterKitsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}