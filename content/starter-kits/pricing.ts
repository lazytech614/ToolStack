import type { Pricing } from "./types";

export interface PricingMeta {
  id: Pricing;
  label: string;
  description: string;
}

export const PRICING_TIERS: PricingMeta[] = [
  { id: "Free", label: "Free", description: "Free and open-source, no license required" },
  {
    id: "Freemium",
    label: "Freemium",
    description: "Free core version with a paid pro tier or add-ons",
  },
  { id: "Paid", label: "Paid", description: "One-time or subscription license required" },
];

export const allPricing: Pricing[] = PRICING_TIERS.map((p) => p.id);
