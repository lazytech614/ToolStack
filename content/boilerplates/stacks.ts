export interface StackMeta {
  name: string;
  /** brand color, used for badge accents */
  color: string;
}

export const stacks: StackMeta[] = [
  { name: "Next.js", color: "#000000" },
  { name: "React", color: "#61DAFB" },
  { name: "React Native", color: "#61DAFB" },
  { name: "TypeScript", color: "#3178C6" },
  { name: "Tailwind CSS", color: "#06B6D4" },
  { name: "shadcn/ui", color: "#18181B" },
  { name: "Prisma", color: "#2D3748" },
  { name: "Drizzle ORM", color: "#C5F74F" },
  { name: "PostgreSQL", color: "#4169E1" },
  { name: "MongoDB", color: "#47A248" },
  { name: "SQLite", color: "#003B57" },
  { name: "tRPC", color: "#398CCB" },
  { name: "NextAuth.js", color: "#7C3AED" },
  { name: "Payload CMS", color: "#000000" },
  { name: "Vite", color: "#646CFF" },
  { name: "Astro", color: "#FF5D01" },
  { name: "Express", color: "#000000" },
  { name: "NestJS", color: "#E0234E" },
  { name: "Expo", color: "#000020" },
  { name: "Expo Router", color: "#000020" },
  { name: "Storybook", color: "#FF4785" },
  { name: "MDX", color: "#1B1F24" },
];

export function getStackMeta(name: string): StackMeta | undefined {
  return stacks.find((s) => s.name.toLowerCase() === name.toLowerCase());
}
