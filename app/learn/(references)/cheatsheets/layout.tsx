import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Developer Cheatsheets | Tool Stack",

  description:
    "Free programming cheatsheets covering JavaScript, TypeScript, React, Next.js, CSS, Git, SQL, HTML, and other modern development technologies. Quick syntax references and practical examples.",

  keywords: [
    "programming cheatsheets",
    "developer cheatsheets",
    "JavaScript cheatsheet",
    "TypeScript cheatsheet",
    "React cheatsheet",
    "Next.js cheatsheet",
    "CSS cheatsheet",
    "Git cheatsheet",
    "SQL cheatsheet",
    "HTML cheatsheet",
    "coding reference",
    "developer reference",
    "syntax guide",
    "Tool Stack",
  ],

  alternates: {
    canonical: "https://tool-stack-kappa.vercel.app/cheatsheets",
  },

  openGraph: {
    title: "Programming Cheatsheets | Tool Stack",
    description:
      "Quick syntax references and command guides for modern developers.",
    url: "https://tool-stack-kappa.vercel.app/cheatsheets",
    type: "website",
  },
};

export default function CheatSheetsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}