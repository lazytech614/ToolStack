'use client';
import { useState } from 'react';

const FRAMEWORKS = ['All', 'Next.js', 'React', 'Nuxt', 'SvelteKit'];
const PRICING = ['All', 'Free', 'Paid', 'Freemium'];
const FEATURES = [
  'authentication',
  'database',
  'payments',
  'email',
  'storage',
  'docker',
];

export default function StarterKitsFilter() {
  const [activeFramework, setActiveFramework] = useState('All');
  const [activePricing, setActivePricing] = useState('All');
  const [requiredFeatures, setRequiredFeatures] = useState<string[]>([]);

  const toggleFeature = (feature: string) => {
    setRequiredFeatures((prev) =>
      prev.includes(feature)
        ? prev.filter((f) => f !== feature)
        : [...prev, feature]
    );
  };

  return (
    <div className="flex flex-col gap-4 mb-8">

      {/* Framework */}
      <div>
        <p className="text-xs font-medium text-muted-foreground mb-2">FRAMEWORK</p>
        <div className="flex gap-2 flex-wrap">
          {FRAMEWORKS.map((fw) => (
            <button
              key={fw}
              onClick={() => setActiveFramework(fw)}
              className={`px-3 py-1 rounded-full text-sm border transition-colors
                ${activeFramework === fw
                  ? 'bg-primary text-primary-foreground border-primary'
                  : 'border-border hover:border-primary'}`}
            >
              {fw}
            </button>
          ))}
        </div>
      </div>

      {/* Pricing */}
      <div>
        <p className="text-xs font-medium text-muted-foreground mb-2">PRICING</p>
        <div className="flex gap-2 flex-wrap">
          {PRICING.map((p) => (
            <button
              key={p}
              onClick={() => setActivePricing(p)}
              className={`px-3 py-1 rounded-full text-sm border transition-colors
                ${activePricing === p
                  ? 'bg-primary text-primary-foreground border-primary'
                  : 'border-border hover:border-primary'}`}
            >
              {p}
            </button>
          ))}
        </div>
      </div>

      {/* Must-have Features */}
      <div>
        <p className="text-xs font-medium text-muted-foreground mb-2">
          MUST INCLUDE
        </p>
        <div className="flex gap-2 flex-wrap">
          {FEATURES.map((feature) => (
            <button
              key={feature}
              onClick={() => toggleFeature(feature)}
              className={`px-3 py-1 rounded-full text-sm border transition-colors capitalize
                ${requiredFeatures.includes(feature)
                  ? 'bg-primary text-primary-foreground border-primary'
                  : 'border-border hover:border-primary'}`}
            >
              {feature}
            </button>
          ))}
        </div>
      </div>

    </div>
  );
}