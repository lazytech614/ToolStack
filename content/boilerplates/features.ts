export interface FeatureMeta {
  name: string;
  /** lucide-react icon name */
  icon: string;
}

export const features: FeatureMeta[] = [
  { name: "Authentication", icon: "Lock" },
  { name: "Database", icon: "Database" },
  { name: "ORM", icon: "Table" },
  { name: "Type Safety", icon: "ShieldCheck" },
  { name: "Testing", icon: "TestTube" },
  { name: "CI/CD", icon: "GitBranch" },
  { name: "Docker", icon: "Container" },
  { name: "Admin Panel", icon: "LayoutDashboard" },
  { name: "File-based Routing", icon: "FolderTree" },
  { name: "Content Collections", icon: "FileText" },
  { name: "API Routes", icon: "Route" },
  { name: "Monorepo", icon: "FolderKanban" },
  { name: "SEO Optimized", icon: "Search" },
  { name: "Observability", icon: "Activity" },
  { name: "Validation", icon: "CheckCircle2" },
];

export function getFeatureMeta(name: string): FeatureMeta | undefined {
  return features.find((f) => f.name.toLowerCase() === name.toLowerCase());
}
