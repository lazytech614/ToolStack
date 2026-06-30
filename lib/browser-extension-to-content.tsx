import { BrowserExtension } from "@/constants/resources/browser-extensions";
import { CardModel } from "@/types/content-card.types";

export function browserExtensionToContentCard(
  extension: BrowserExtension
): CardModel {
  return {
    id: extension.id,

    title: extension.name,

    description: extension.description,

    href:
      extension.storeUrls.Chrome ??
      extension.storeUrls.Firefox ??
      extension.storeUrls.Edge ??
      extension.storeUrls.Safari ??
      extension.storeUrls.Arc ??
      extension.repoUrl ??
      "#",

    badges: [
      {
        label: extension.category[0],
        color: "blue",
      },
      {
        label: extension.isFree ? "Free" : "Paid",
        color: extension.isFree ? "green" : "orange",
      },
      ...(extension.isOpenSource
        ? [
            {
              label: "Open Source",
              color: "purple" as const,
            },
          ]
        : []),
    ],

    footerLabel: "View Extension",

    content: (
      <div className="flex items-center justify-between text-xs text-zinc-500 dark:text-zinc-400">
        <span>⭐ {extension.rating}</span>

        <span>
          {extension.browsers.slice(0, 2).join(" • ")}
          {extension.browsers.length > 2 &&
            ` +${extension.browsers.length - 2}`}
        </span>
      </div>
    ),
  };
}