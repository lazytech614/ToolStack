import { CLITool } from "@/constants/resources/cli-tools";
import { CLIToolCard } from "./cli-tool-card";

export function CLIToolsGrid({ tools }: { tools: CLITool[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {tools.map((tool) => (
        <CLIToolCard key={tool.id} tool={tool} />
      ))}
    </div>
  );
}