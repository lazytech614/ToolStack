import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | Developer Resources | Tool Stack",
    default: "Developer Resources",
  },
  description:
    "Discover curated developer resources including open-source templates, boilerplates, starter kits, VS Code extensions, browser extensions, CLI tools, design assets, AI tools, prompt libraries, and more to accelerate modern web development.",

  keywords: [
    "developer resources",
    "web development resources",
    "open source resources",
    "developer toolkit",
    "frontend resources",
    "backend resources",
    "software development",
    "VS Code extensions",
    "CLI tools",
    "AI developer tools",
    "starter kits",
    "boilerplates",
    "templates",
    "Tool Stack",
  ],

  alternates: {
    canonical: "https://tool-stack-kappa.vercel.app/resources",
  },

  openGraph: {
    title: "Developer Resources | Tool Stack",
    description:
      "Curated resources for developers including templates, boilerplates, starter kits, AI tools, extensions, assets, and more.",
    url: "https://tool-stack-kappa.vercel.app/resources",
    siteName: "Tool Stack",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Developer Resources | Tool Stack",
    description: "The ultimate collection of resources for modern developers.",
  },
};

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default async function ResourcesLayout({ children }: { children: React.ReactNode }) {
  await delay(4000);

  return <>{children}</>;
}
