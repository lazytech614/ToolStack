import { SectionHeading } from "../shared/section-heading";
import { FeatureCard } from "./feature-card";
import {
  Zap,
  Shield,
  Code2,
  Sparkles,
} from "lucide-react";

export function Features() {
  return (
    <section className="py-24 bg-linear-to-b from-white via-purple-50/30 to-white dark:from-black dark:via-purple-950/10 dark:to-black">
      <div className="container mx-auto px-6">
        <SectionHeading
          badge="BUILT FOR DEVELOPERS"
          title="Everything you need in one place"
          description="Modern AI-powered GitHub workflow tools for developers who ship every day."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <FeatureCard
            title="Save Time"
            description="Automate repetitive tasks and focus on what matters."
            icon={<Zap />}
            iconColor="yellow"
          />

          <FeatureCard
            title="Secure by Default"
            description="Your code and data are never stored. 100% privacy-first."
            icon={<Shield />}
            iconColor="emerald"
          />

          <FeatureCard
            title="Developer First"
            description="Built by developers, for developers."
            icon={<Code2 />}
            iconColor="cyan"
          />

          <FeatureCard
            title="AI-Powered"
            description="Leverage advanced AI to write better, faster."
            icon={<Sparkles />}
            iconColor="purple"
          />
        </div>
      </div>
    </section>
  );
}