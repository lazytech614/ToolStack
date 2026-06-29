import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Browser Extensions",

  description:
    "Discover powerful browser extensions for Chrome, Edge, Firefox, and Brave. Improve debugging, accessibility testing, API development, performance analysis, security, productivity, and frontend development.",

  keywords: [
    "browser extensions",
    "Chrome extensions",
    "Firefox extensions",
    "Edge extensions",
    "Brave extensions",
    "developer browser extensions",
    "frontend tools",
    "web debugging",
    "accessibility tools",
    "performance tools",
    "API testing",
    "developer productivity",
    "Tool Stack",
  ],

  alternates: {
    canonical:
      "https://tool-stack-kappa.vercel.app/resources/browser-extensions",
  },

  openGraph: {
    title: "Developer Browser Extensions | Tool Stack",
    description:
      "Useful browser extensions for debugging, testing, and productivity.",
    url:
      "https://tool-stack-kappa.vercel.app/resources/browser-extensions",
  },
};

export default function BrowserExtensionsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}