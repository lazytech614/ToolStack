"use client";

import Link from "next/link";
import { Pin, PinOff } from "lucide-react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

import { cn } from "@/lib/utils";
import { CardColor, ContentCardProps } from "@/types/content-card.types";

const CARD_COLORS: Record<
  CardColor,
  {
    badge: string;
    iconBg: string;
    iconColor: string;
  }
> = {
  blue: {
    badge: "bg-blue-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-400",
    iconBg: "bg-blue-100 dark:bg-blue-500/10",
    iconColor: "text-blue-600 dark:text-blue-400",
  },

  green: {
    badge: "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-400",
    iconBg: "bg-emerald-100 dark:bg-emerald-500/10",
    iconColor: "text-emerald-600 dark:text-emerald-400",
  },

  purple: {
    badge: "bg-purple-100 text-purple-700 dark:bg-purple-500/20 dark:text-purple-400",
    iconBg: "bg-purple-100 dark:bg-purple-500/10",
    iconColor: "text-purple-600 dark:text-purple-400",
  },

  orange: {
    badge: "bg-orange-100 text-orange-700 dark:bg-orange-500/20 dark:text-orange-400",
    iconBg: "bg-orange-100 dark:bg-orange-500/10",
    iconColor: "text-orange-600 dark:text-orange-400",
  },

  yellow: {
    badge: "bg-yellow-100 text-yellow-700 dark:bg-yellow-500/20 dark:text-yellow-400",
    iconBg: "bg-yellow-100 dark:bg-yellow-500/10",
    iconColor: "text-yellow-600 dark:text-yellow-400",
  },

  cyan: {
    badge: "bg-cyan-100 text-cyan-700 dark:bg-cyan-500/20 dark:text-cyan-400",
    iconBg: "bg-cyan-100 dark:bg-cyan-500/10",
    iconColor: "text-cyan-600 dark:text-cyan-400",
  },

  gray: {
    badge: "bg-zinc-100 text-zinc-700 dark:bg-zinc-500/20 dark:text-zinc-400",
    iconBg: "bg-zinc-100 dark:bg-zinc-800",
    iconColor: "text-zinc-600 dark:text-zinc-400",
  },
};

export function ContentCard({ item, clickable = true, pin }: ContentCardProps) {
  const Icon = item.icon || MdKeyboardDoubleArrowRight;

  const primaryColor = CARD_COLORS[item.badges[0]?.color ?? "gray"];

  return (
    <div
      className={cn(
        "group relative flex h-full flex-col rounded-xl border",
        "border-zinc-200 dark:border-zinc-800",
        "bg-white dark:bg-zinc-900/60",
        "p-5",
        "transition-all duration-200",
        "hover:border-purple-300",
        "dark:hover:border-purple-500/30",
        "hover:shadow-lg",
        "dark:hover:shadow-purple-500/10",
      )}
    >
      {pin && (
        <button
          onClick={pin.onToggle}
          aria-label={pin.pinned ? "Unpin" : "Pin"}
          className={cn(
            "absolute top-4 right-4 rounded-full p-1.5 transition-all duration-200",
            pin.pinned
              ? "bg-purple-100 text-purple-600 dark:bg-purple-500/10 dark:text-purple-400"
              : "text-zinc-400 group-hover:opacity-100 hover:bg-zinc-100 hover:text-zinc-700 sm:opacity-0 dark:hover:bg-zinc-800 dark:hover:text-zinc-300",
          )}
        >
          {pin.pinned ? <PinOff className="h-4 w-4" /> : <Pin className="h-4 w-4" />}
        </button>
      )}

      <Link
        href={item.href}
        className={`flex flex-1 flex-col gap-4 ${!clickable && "cursor-default"}`}
      >
        {/* Header */}

        <div className="flex items-start gap-3">
          <div
            className={cn(
              "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg",
              primaryColor.iconBg,
              primaryColor.iconColor,
            )}
          >
            <Icon className="h-5 w-5" />
          </div>

          <div className="flex flex-wrap gap-1.5 pt-0.5">
            {item.badges.map((badge) => {
              const colors = CARD_COLORS[badge.color];

              return (
                <span
                  key={badge.label}
                  className={cn(
                    "inline-flex items-center rounded-md px-2 py-0.5 text-xs font-medium",
                    colors.badge,
                  )}
                >
                  {badge.label}
                </span>
              );
            })}

            {item.isNew && (
              <span className="rounded-md bg-purple-100 px-2 py-0.5 text-xs font-medium text-purple-700 dark:bg-purple-500/20 dark:text-purple-400">
                New
              </span>
            )}

            {item.status && (
              <span
                className={cn(
                  "rounded-md px-2 py-0.5 text-xs font-medium",
                  CARD_COLORS[item.status.color].badge,
                )}
              >
                {item.status.label}
              </span>
            )}
          </div>
        </div>

        {/* Main */}

        <div className="space-y-2">
          <h3 className="text-lg leading-tight font-extrabold text-zinc-900 uppercase sm:text-xl dark:text-white">
            {item.title}
          </h3>

          <p className="line-clamp-2 text-xs leading-relaxed text-zinc-500 dark:text-zinc-400">
            {item.description}
          </p>
        </div>

        {/* Page specific content */}

        {item.content && <div className="mt-2">{item.content}</div>}

        <div className="flex-1" />
      </Link>

      {/* Optional actions */}
      {item.actions && <div className="mt-3">{item.actions}</div>}

      {/* Footer */}

      {clickable && (
        <div className="mt-4 flex translate-y-1 items-center gap-2 text-[10px] text-zinc-900 uppercase opacity-0 transition-all duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-80 dark:text-white">
          <span>{item.footerLabel ?? "Open"}</span>

          <MdKeyboardDoubleArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
        </div>
      )}
    </div>
  );
}
