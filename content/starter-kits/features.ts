import type { FeatureKey } from "./types";

export interface FeatureMeta {
  id: FeatureKey;
  label: string;
  icon: string; // lucide-react icon name
}

export const FEATURES: FeatureMeta[] = [
  { id: "authentication", label: "Authentication", icon: "KeyRound" },
  { id: "database", label: "Database", icon: "Database" },
  { id: "payments", label: "Payments", icon: "CreditCard" },
  { id: "email", label: "Email", icon: "Mail" },
  { id: "storage", label: "File Storage", icon: "HardDrive" },
  { id: "analytics", label: "Analytics", icon: "BarChart3" },
  { id: "testing", label: "Testing", icon: "FlaskConical" },
  { id: "docker", label: "Docker", icon: "Container" },
];

export const allFeatureKeys: FeatureKey[] = FEATURES.map((f) => f.id);
