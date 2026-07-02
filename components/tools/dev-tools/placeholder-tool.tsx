import { ALL_TOOLS } from "@/content/tools";
import { Wrench } from "lucide-react";

interface PlaceholderToolProps {
  toolId: string;
}

export function PlaceholderTool({ toolId }: PlaceholderToolProps) {
  const tool = ALL_TOOLS.find((t) => t.id === toolId);

  return (
    <div className="flex flex-col items-center justify-center gap-4 rounded-xl border border-dashed border-zinc-200 py-24 text-center dark:border-zinc-800">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-100 text-zinc-400 dark:bg-zinc-900 dark:text-zinc-600">
        <Wrench className="h-5 w-5" />
      </div>
      <div>
        <p className="text-sm font-semibold text-zinc-900 dark:text-white">
          {tool?.name ?? toolId} is coming soon
        </p>
        <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-500">
          This tool hasn&apos;t been built out yet.
        </p>
      </div>
    </div>
  );
}
