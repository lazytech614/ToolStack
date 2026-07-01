import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Developer Tools",
  description:
    "Browse free online developer tools including JSON Formatter, SQL Formatter, Regex Tester, Markdown Preview, JWT Debugger, Base64 Encoder, Diff Checker, and more.",
  keywords: [
    "developer tools",
    "json formatter",
    "sql formatter",
    "regex tester",
    "markdown preview",
    "jwt debugger",
    "base64",
    "tool stack",
  ],
  alternates: {
    canonical: "https://tool-stack-kappa.vercel.app/tools",
  },
};

export default function ToolsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}