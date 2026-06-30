import { CardModel } from "@/types/content-card.types";
import { Template } from "@/constants/resources/templates";

export function templateToContentCard(
  template: Template
): CardModel {
  return {
    id: template.id,
    title: template.name,
    description: template.description,
    href: template.repoUrl,

    badges: [
      {
        label: template.category,
        color: "blue",
      },
      {
        label: template.framework,
        color: "purple",
      },
    ],

    footerLabel: "Open Template",
  };
}