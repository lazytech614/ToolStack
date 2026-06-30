import type { CardModel } from "@/types/content-card.types";
import type { CLITool } from "@/constants/resources/cli-tools";

export function cliToolToContentCard(tool: CLITool): CardModel {
  return {
    id: tool.id,
    title: tool.name,
    description: tool.description,
    href: tool.docsUrl ?? tool.repoUrl ?? "#",
    badges: [
      {
        label: tool.category[0],
        color: "blue",
      },
      {
        label: tool.isOpenSource ? "Open Source" : "Closed Source",
        color: tool.isOpenSource ? "green" : "orange",
      },
      {
        label: `v${tool.version}`,
        color: "purple",
      },
    ],

    footerLabel: "Open CLI Tool",

    content: (
      <div className="space-y-2 text-xs">
        <div className="flex items-center justify-between text-zinc-500">
          <span>⭐ {tool.stars.toLocaleString()}</span>
          <span>{tool.os.join(" • ")}</span>
        </div>

        <div className="flex flex-wrap gap-1">
          {tool.shells.map((shell) => (
            <span
              key={shell}
              className="rounded bg-zinc-100 px-2 py-0.5 dark:bg-zinc-800"
            >
              {shell}
            </span>
          ))}
        </div>
      </div>
    ),
  };
}