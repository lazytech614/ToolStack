import { tools } from "./index";
import { Tool, ToolCategory, ToolStatus } from "./types";

export const getToolsByCategory = (category: ToolCategory): Tool[] =>
  tools.filter((tool) => tool.category === category);

export const getFeaturedTools = (): Tool[] => tools.filter((tool) => tool.isFeatured);

export const getNewTools = (): Tool[] => tools.filter((tool) => tool.isNew);

export const getToolById = (id: string): Tool | undefined => tools.find((tool) => tool.id === id);

export const getToolByHref = (href: string): Tool | undefined =>
  tools.find((tool) => tool.href === href);

export const getToolsByStatus = (status: ToolStatus): Tool[] =>
  tools.filter((tool) => tool.status === status);

export const getActiveTools = (): Tool[] =>
  tools.filter((tool) => tool.status !== "COMING_SOON" && tool.status !== "DEPRECATED");

export const searchTools = (query: string): Tool[] => {
  const q = query.trim().toLowerCase();
  if (!q) return tools;

  return tools.filter(
    (tool) =>
      tool.name.toLowerCase().includes(q) ||
      tool.description.toLowerCase().includes(q) ||
      tool.seo.keywords.some((keyword) => keyword.toLowerCase().includes(q)),
  );
};
