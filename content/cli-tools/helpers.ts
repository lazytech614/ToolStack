import type { CLITool, Category, InstallMethod, OS, Shell } from "./types";

/** Filter tools by a single category */
export function getToolsByCategory(tools: CLITool[], category: Category): CLITool[] {
  return tools.filter((tool) => tool.category.includes(category));
}

/** Filter tools that support a given OS */
export function getToolsByOS(tools: CLITool[], os: OS): CLITool[] {
  return tools.filter((tool) => tool.os.includes(os));
}

/** Filter tools that support a given shell */
export function getToolsByShell(tools: CLITool[], shell: Shell): CLITool[] {
  return tools.filter((tool) => tool.shells.includes(shell));
}

/** Get the install command for a tool given a preferred method, falling back to the first available */
export function getInstallCommand(tool: CLITool, method?: InstallMethod): string | undefined {
  if (method && tool.installCommands[method]) {
    return tool.installCommands[method];
  }
  const firstAvailable = Object.values(tool.installCommands)[0];
  return firstAvailable;
}

/** Simple case-insensitive search across name, description, and tags */
export function searchTools(tools: CLITool[], query: string): CLITool[] {
  const q = query.trim().toLowerCase();
  if (!q) return tools;
  return tools.filter(
    (tool) =>
      tool.name.toLowerCase().includes(q) ||
      tool.description.toLowerCase().includes(q) ||
      tool.tags.some((tag) => tag.toLowerCase().includes(q)),
  );
}

/** Sort tools by GitHub stars, descending */
export function sortByStars(tools: CLITool[]): CLITool[] {
  return [...tools].sort((a, b) => b.stars - a.stars);
}

/** Sort tools by most recently updated */
export function sortByLastUpdated(tools: CLITool[]): CLITool[] {
  return [...tools].sort(
    (a, b) => new Date(b.lastUpdated).getTime() - new Date(a.lastUpdated).getTime(),
  );
}

/** Lookup a single tool by its id (name-based) */
export function getToolById(tools: CLITool[], id: string): CLITool | undefined {
  return tools.find((tool) => tool.id === id);
}
