import { BundledLanguage } from "shiki";

export interface Snippet {
  id: string;
  title: string;
  description: string;
  language: BundledLanguage;
  tags: string[];
  code: string;
  difficulty?: "Beginner" | "Intermediate" | "Advanced";
  category?: string;
  createdAt?: string;
  updatedAt?: string;
}
