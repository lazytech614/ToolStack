import { LucideIcon } from "lucide-react";

export type ToolCategory =
  "Encoding" | "Formatting" | "Comparison" | "Generator" | "Converter" | "Preview" | "Utilities";

export type ToolStatus = "COMING_SOON" | "DEPRECATED" | "MAINTENANCE" | "BETA" | "ACTIVE";

export interface ToolSEO {
  title: string;
  description: string;
  keywords: string[];
}

export interface Tool {
  id: string;
  name: string;
  description: string;
  icon: LucideIcon;
  category: ToolCategory;
  href: string;
  isNew?: boolean;
  isFeatured?: boolean;
  status?: ToolStatus;
  seo: ToolSEO;
}
