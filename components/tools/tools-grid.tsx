import { Tool } from "@/constants/configs/tools"
import { ContentCard } from "../shared/content-card"
import { toolToContentCard } from "@/lib/tool-to-content"
import { ContentGrid } from "../shared/content-grid"

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
  return (
    <ContentGrid
      items={tools}
      emptyMessage={emptyMessage}
      renderItem={(tool) => (
        <ContentCard
          key={tool.id}
          item={toolToContentCard(tool)}
          pin={{
            pinned: pinnedIds.includes(tool.id),
            onToggle: () => onTogglePin(tool.id),
          }}
        />
      )}
    />
  );
}