import { CardModel } from "@/types/content-card.types";
import { VSCodeExtension } from "@/constants/resources/vs-code-extensions";

export function vscodeExtensionToContentCard(
  extension: VSCodeExtension
): CardModel {
  return {
    id: extension.id,
    title: extension.name,
    description: extension.description,
    href: extension.marketplaceUrl,
    badges: [
      {
        label: extension.category[0],
        color: "blue",
      },
      {
        label: extension.isFree ? "Free" : "Paid",
        color: extension.isFree ? "green" : "orange",
      },
      ...(extension.isVerified
        ? [
            {
              label: "Verified",
              color: "purple" as const,
            },
          ]
        : []),
    ],

    footerLabel: "Open Extension",

    content: (
      <div className="flex items-center justify-between text-xs text-zinc-500">
        <span>⭐ {extension.rating}</span>

        <span>
          {Intl.NumberFormat("en", {
            notation: "compact",
          }).format(extension.installs)}{" "}
          installs
        </span>
      </div>
    ),
  };
}