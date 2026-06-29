import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Programming Glossary | Tool Stack",

  description:
    "Understand programming terms, web development concepts, algorithms, networking, databases, and computer science terminology with concise explanations.",

  keywords: [
    "programming glossary",
    "developer glossary",
    "computer science terms",
    "web development glossary",
    "frontend glossary",
    "backend glossary",
    "coding dictionary",
    "developer dictionary",
    "technical glossary",
    "Tool Stack",
  ],

  alternates: {
    canonical: "https://tool-stack-kappa.vercel.app/glossary",
  },

  openGraph: {
    title: "Programming Glossary | Tool Stack",
    description:
      "Definitions of programming and computer science concepts.",
    url: "https://tool-stack-kappa.vercel.app/glossary",
  },
};

export default function GlossaryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}