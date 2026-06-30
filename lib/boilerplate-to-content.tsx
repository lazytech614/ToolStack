import { Boilerplate } from "@/constants/resources/boilerplates";
import { CardModel } from "@/types/content-card.types";

export function boilerplateToContentCard(
  boilerplate: Boilerplate
): CardModel {
  return {
    id: boilerplate.id,
    title: boilerplate.name,
    description: boilerplate.description,
    href: boilerplate.repoUrl,

    badges: [
      {
        label: boilerplate.category,
        color: "blue",
      },
      {
        label: boilerplate.difficulty,
        color:
          boilerplate.difficulty === "Beginner"
            ? "green"
            : boilerplate.difficulty === "Intermediate"
            ? "orange"
            : "purple",
      },
    ],

    footerLabel: "Open Boilerplate",

    content: (
      <div className="flex items-center justify-between text-xs text-zinc-500 dark:text-zinc-400">
        <span>⭐ {boilerplate.stars.toLocaleString()}</span>

        <span>
          {boilerplate.stack.slice(0, 2).join(" • ")}
        </span>
      </div>
    ),
  };
}