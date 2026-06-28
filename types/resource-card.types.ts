import { LucideIcon } from "lucide-react";

export type CardColor =
  | "blue"
  | "green"
  | "purple"
  | "orange"
  | "yellow"
  | "cyan"
  | "gray";

export interface CardBadge {
  label: string;
  color: CardColor;
}

export interface CardStatus {
  label: string;
  color: CardColor;
}

export interface ResourceCardItem {
  id: string;
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
  badges: CardBadge[];
  footerLabel?: string;
  isNew?: boolean;
  status?: CardStatus;
}

export interface ResourceCardProps {
  item: ResourceCardItem;
  pin?: {
    pinned: boolean;
    onToggle: () => void;
  };
}