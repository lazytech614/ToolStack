export type Framework = "Next.js" | "React" | "Remix" | "SvelteKit" | "Astro" | "Nuxt";

export type Pricing = "Free" | "Paid" | "Freemium";

export type FeatureKey =
  | "authentication"
  | "database"
  | "payments"
  | "email"
  | "storage"
  | "analytics"
  | "testing"
  | "docker";

export interface StarterKit {
  id: string;
  name: string;
  description: string;
  framework: Framework;
  stack: string[];
  features: Record<FeatureKey, boolean>;
  techDetails: {
    auth?: string; // 'NextAuth' | 'Clerk' | 'Supabase Auth'
    database?: string; // 'Prisma + PostgreSQL' | 'Drizzle + MySQL'
    payments?: string; // 'Stripe' | 'Paddle'
    email?: string; // 'Resend' | 'SendGrid'
    storage?: string; // 'S3' | 'Cloudinary'
  };
  stars: number;
  repoUrl: string;
  demoUrl?: string;
  author: string;
  pricing: Pricing;
  lastUpdated: string;
}
