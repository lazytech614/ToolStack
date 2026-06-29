import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Open Source Boilerplates",

  description:
    "Explore scalable open-source boilerplates with authentication, database integration, API setup, testing, deployment configuration, and best practices for modern application development.",

  keywords: [
    "boilerplates",
    "Next.js boilerplate",
    "React boilerplate",
    "Node.js boilerplate",
    "Express boilerplate",
    "TypeScript boilerplate",
    "starter project",
    "project architecture",
    "developer boilerplates",
    "Tool Stack",
  ],

  alternates: {
    canonical: "https://tool-stack-kappa.vercel.app/resources/boilerplates",
  },

  openGraph: {
    title: "Developer Boilerplates | Tool Stack",
    description:
      "Kickstart projects using scalable, production-ready boilerplates.",
    url: "https://tool-stack-kappa.vercel.app/resources/boilerplates",
    type: "website",
  },
};

export default function BoilerplatesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}