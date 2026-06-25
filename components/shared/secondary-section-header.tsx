import { cn } from "@/lib/utils"

interface SecondarySectionHeaderProps {
  title: string
  description?: string
  count?: number
  className?: string
}

export function SecondarySectionHeader({
  title,
  description,
  count,
  className,
}: SecondarySectionHeaderProps) {
  return (
    <div className={cn("flex items-end justify-between gap-4", className)}>
      <div>
        <h2 className="text-sm font-semibold uppercase tracking-widest text-zinc-900 dark:text-white">
          {title}
        </h2>
        {description && (
          <p className="mt-0.5 text-xs text-zinc-500 dark:text-zinc-500">
            {description}
          </p>
        )}
      </div>
      {count !== undefined && (
        <span className="shrink-0 text-xs font-medium text-zinc-400 dark:text-zinc-600 tabular-nums">
          {count} {count === 1 ? "item" : "items"}
        </span>
      )}
    </div>
  )
}