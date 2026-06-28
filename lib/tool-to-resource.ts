import { Tool, ToolCategory } from "@/constants/configs/tools";
import { CardColor, ResourceCardItem } from "@/types/resource-card.types";

const TOOL_CATEGORY_COLORS: Record<ToolCategory, CardColor> = {
  Encoding: "blue",
  Formatting: "green",
  Comparison: "orange",
  Generator: "purple",
  Converter: "cyan",
  Preview: "yellow",
  Utilities: "gray",
};

export function toolToResourceCard(tool: Tool): ResourceCardItem {
  return {
    id: tool.id,
    title: tool.name,
    description: tool.description,
    href: tool.href,
    icon: tool.icon,

    badges: [
      {
        label: tool.category,
        color: TOOL_CATEGORY_COLORS[tool.category],
      },
    ],

    isNew: tool.isNew,

    status: tool.status
      ? {
          label: tool.status,
          color: "purple",
        }
      : undefined,

    footerLabel: "Use Tool",
  };
}