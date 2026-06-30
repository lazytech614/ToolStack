import { CardColor } from "@/types/content-card.types";

export const CARD_COLORS: Record<
  CardColor,
  {
    badge: string;
    iconBg: string;
    iconColor: string;
  }
> = {
  blue: {
    badge:
      "bg-blue-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-400",
    iconBg: "bg-blue-100 dark:bg-blue-500/10",
    iconColor: "text-blue-600 dark:text-blue-400",
  },

  green: {
    badge:
      "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-400",
    iconBg: "bg-emerald-100 dark:bg-emerald-500/10",
    iconColor: "text-emerald-600 dark:text-emerald-400",
  },

  purple: {
    badge:
      "bg-purple-100 text-purple-700 dark:bg-purple-500/20 dark:text-purple-400",
    iconBg: "bg-purple-100 dark:bg-purple-500/10",
    iconColor: "text-purple-600 dark:text-purple-400",
  },

  orange: {
    badge:
      "bg-orange-100 text-orange-700 dark:bg-orange-500/20 dark:text-orange-400",
    iconBg: "bg-orange-100 dark:bg-orange-500/10",
    iconColor: "text-orange-600 dark:text-orange-400",
  },

  yellow: {
    badge:
      "bg-yellow-100 text-yellow-700 dark:bg-yellow-500/20 dark:text-yellow-400",
    iconBg: "bg-yellow-100 dark:bg-yellow-500/10",
    iconColor: "text-yellow-600 dark:text-yellow-400",
  },

  cyan: {
    badge:
      "bg-cyan-100 text-cyan-700 dark:bg-cyan-500/20 dark:text-cyan-400",
    iconBg: "bg-cyan-100 dark:bg-cyan-500/10",
    iconColor: "text-cyan-600 dark:text-cyan-400",
  },

  gray: {
    badge:
      "bg-zinc-100 text-zinc-700 dark:bg-zinc-500/20 dark:text-zinc-400",
    iconBg: "bg-zinc-100 dark:bg-zinc-800",
    iconColor: "text-zinc-600 dark:text-zinc-400",
  },
};