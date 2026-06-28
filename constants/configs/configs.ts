import { 
  BookMarked, 
  Code2, 
  FileText, 
  GraduationCap, 
  Layers, 
  Search 
} from "lucide-react";

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Tools", href: "/tools" },
];

export const LEGAL = [
  { name: "Privacy", href: "/privacy" },
  { name: "Terms", href: "/terms" },
];

export const LEARNING = [
  {
    label: "Snippets",
    href: "/snippets",
    category: "reference",
    icon: Code2,
    description: "Copy-paste code patterns for everyday tasks",
  },
  {
    label: "Cheatsheets",
    href: "/cheatsheets",
    category: "reference",
    icon: FileText,
    description: "Quick syntax references for your favourite languages",
  },
  {
    label: "Glossary",
    href: "/glossary",
    category: "reference",
    icon: Search,
    description: "Plain-English definitions for dev terminology",
  },
  {
    label: "Docs",
    href: "/docs",
    category: "guides",
    icon: BookMarked,
    description: "Full API and integration documentation",
  },
  {
    label: "Tutorials",
    href: "/tutorials",
    category: "guides",
    icon: GraduationCap,
    description: "Step-by-step walkthroughs for common workflows",
  },
  {
    label: "Examples",
    href: "/examples",
    category: "guides",
    icon: Layers,
    description: "Real-world projects you can fork and extend",
  },
];