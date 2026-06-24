import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  description?: string;
  className?: string;
}

export function SectionHeading({
  badge,
  title,
  description,
  className
}: SectionHeadingProps) {
  return (
    <div className={cn("space-y-4 text-center", className)}>
      {badge && (
        <span className="inline-flex items-center rounded-full border border-purple-300 dark:border-purple-500/30 bg-purple-50 dark:bg-purple-500/10 px-4 py-2 text-xs font-bold tracking-widest text-purple-700 dark:text-purple-400 uppercase">
          {badge}
        </span>
      )}

      <h2 className="text-4xl font-black tracking-tight text-zinc-900 dark:text-white md:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mx-auto max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
          {description}
        </p>
      )}
    </div>
  );
}