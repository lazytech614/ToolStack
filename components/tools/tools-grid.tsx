import { Tool } from "@/constants/tools"
import { ToolCard } from "./tool-card"

interface ToolsGridProps {
  tools: Tool[]
  pinnedIds: string[]
  onTogglePin: (id: string) => void
  emptyMessage?: string
}

export function ToolsGrid({
  tools,
  pinnedIds,
  onTogglePin,
  emptyMessage = "No tools found.",
}: ToolsGridProps) {
  if (tools.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <p className="text-sm text-zinc-500 dark:text-zinc-500">{emptyMessage}</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {tools.map((tool) => (
        <ToolCard
          key={tool.id}
          tool={tool}
          isPinned={pinnedIds.includes(tool.id)}
          onTogglePin={onTogglePin}
        />
      ))}
    </div>
  )
}