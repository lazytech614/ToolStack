import { StarterKit } from "@/constants/resources/starter-kits"
import { CardModel } from "@/types/content-card.types"

export function starterKitToContentCard(
    kit: StarterKit
): CardModel {

    return {
        id: kit.id,
        title: kit.name,
        description: kit.description,
        href: kit.repoUrl,
        badges: [
            {
                label: kit.framework,
                color: "blue",
            },
            {
                label: kit.pricing,
                color:
                    kit.pricing === "Free"
                        ? "green"
                        : kit.pricing === "Paid"
                        ? "orange"
                        : "purple",
            },
        ],
        footerLabel: "Open Starter Kit",
        content: (
            <div className="flex items-center justify-between text-xs text-zinc-500">
                <span>⭐ {kit.stars.toLocaleString()}</span>

                <span>
                    {kit.stack.slice(0,2).join(" • ")}
                </span>
            </div>
        ),
    };
}