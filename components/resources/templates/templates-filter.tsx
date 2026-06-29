'use client';
import { useState } from 'react';

const FRAMEWORKS = ['All', 'Next.js', 'React', 'Vue', 'Svelte', 'Astro'];

export function TemplatesFilter() {
  const [activeFramework, setActiveFramework] = useState('All');

  return (
    <div className="flex flex-wrap gap-4 mb-8">
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
  );
}