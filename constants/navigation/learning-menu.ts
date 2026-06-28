import { BookOpen, GraduationCap } from "lucide-react";
import { LEARNING } from "@/constants/configs/configs";

export const learningSections = [
  {
    id: "reference",
    title: "Reference",
    icon: BookOpen,

    items: LEARNING.filter(
      (l) => l.category === "reference"
    ),
  },

  {
    id: "guides",
    title: "Guides",
    icon: GraduationCap,

    items: LEARNING.filter(
      (l) => l.category === "guides"
    ),
  },
];