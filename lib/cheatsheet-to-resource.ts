import { FileCode2 } from "lucide-react";

import { Cheatsheet } from "@/constants/learnings/cheatsheets";
import { CardColor, ResourceCardItem } from "@/types/resource-card.types";

const TAG_COLORS: Record<Cheatsheet["tag"], CardColor> = {
  language: "blue",
  framework: "purple",
  tool: "green",
  styling: "orange",
};

export function cheatsheetToResourceCard(
  cheatsheet: Cheatsheet
): ResourceCardItem {
  return {
    id: cheatsheet.slug,

    title: cheatsheet.title,

    description: cheatsheet.description,

    href: `/cheatsheets/${cheatsheet.slug}`,

    icon: FileCode2,

    badges: [
      {
        label: cheatsheet.tag,
        color: TAG_COLORS[cheatsheet.tag],
      },
    ],

    footerLabel: "Open Cheatsheet",
  };
}