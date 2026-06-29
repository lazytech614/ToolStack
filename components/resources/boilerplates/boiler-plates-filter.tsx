'use client';

import { useState } from 'react';

const CATEGORIES = ['All', 'Full Stack', 'Frontend', 'Backend', 'Mobile'];
const DIFFICULTIES = ['All', 'Beginner', 'Intermediate', 'Advanced'];
const INCLUDES = ['Authentication', 'Database', 'Docker', 'CI/CD', 'Testing'];

export function BoilerplatesFilter() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeDifficulty, setActiveDifficulty] = useState('All');
  const [activeFeatures, setActiveFeatures] = useState<string[]>([]);

  const toggleFeature = (feature: string) => {
    setActiveFeatures((prev) =>
      prev.includes(feature)
        ? prev.filter((f) => f !== feature)
        : [...prev, feature]
    );
  };

  return (
    <div className="flex flex-col gap-4 mb-8">

      {/* Category Filter */}
      <div>
        <p className="text-xs font-medium text-muted-foreground mb-2">CATEGORY</p>
        <div className="flex gap-2 flex-wrap">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1 rounded-full text-sm border transition-colors
                ${activeCategory === cat
                  ? 'bg-primary text-primary-foreground border-primary'
                  : 'border-border hover:border-primary'}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Difficulty Filter */}
      <div>
        <p className="text-xs font-medium text-muted-foreground mb-2">DIFFICULTY</p>
        <div className="flex gap-2 flex-wrap">
          {DIFFICULTIES.map((d) => (
            <button
              key={d}
              onClick={() => setActiveDifficulty(d)}
              className={`px-3 py-1 rounded-full text-sm border transition-colors
                ${activeDifficulty === d
                  ? 'bg-primary text-primary-foreground border-primary'
                  : 'border-border hover:border-primary'}`}
            >
              {d}
            </button>
          ))}
        </div>
      </div>

      {/* Includes Filter (multi-select) */}
      <div>
        <p className="text-xs font-medium text-muted-foreground mb-2">INCLUDES</p>
        <div className="flex gap-2 flex-wrap">
          {INCLUDES.map((feature) => (
            <button
              key={feature}
              onClick={() => toggleFeature(feature)}
              className={`px-3 py-1 rounded-full text-sm border transition-colors
                ${activeFeatures.includes(feature)
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