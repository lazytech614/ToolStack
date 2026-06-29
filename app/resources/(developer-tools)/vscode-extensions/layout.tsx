import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "VS Code Extensions",

  description:
    "Explore the best Visual Studio Code extensions for JavaScript, TypeScript, React, Next.js, Tailwind CSS, Git, Docker, Python, debugging, formatting, testing, AI coding assistants, and developer productivity.",

  keywords: [
    "VS Code extensions",
    "Visual Studio Code extensions",
    "best VS Code extensions",
    "JavaScript extension",
    "React extension",
    "TypeScript extension",
    "Tailwind CSS extension",
    "Git extension",
    "Docker extension",
    "ESLint",
    "Prettier",
    "developer productivity",
    "code editor extensions",
    "Tool Stack",
  ],

  alternates: {
    canonical:
      "https://tool-stack-kappa.vercel.app/resources/vscode-extensions",
  },

  openGraph: {
    title: "Best VS Code Extensions | Tool Stack",
    description:
      "Curated Visual Studio Code extensions to boost developer productivity.",
    url:
      "https://tool-stack-kappa.vercel.app/resources/vscode-extensions",
  },
};

export default function VscodeExtensionsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}