'use client';
import { useState } from 'react';

const CATEGORIES = [
  'All', 'AI', 'Linting', 'Formatting', 'Themes',
  'Git', 'Snippets', 'Debugging', 'Productivity',
];
const PRICING = ['All', 'Free', 'Paid'];
const SORT_OPTIONS = ['Most Installed', 'Top Rated', 'Recently Updated'];

export default function VSCodeFilter() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [activePricing, setActivePricing] = useState('All');
  const [activeSort, setActiveSort] = useState('Most Installed');
  const [search, setSearch] = useState('');

  return (
    <div className="flex flex-col gap-4 mb-8">

      {/* Search */}
      <input
        type="text"
        placeholder="Search extensions..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full max-w-sm px-4 py-2 rounded-lg border border-border bg-background
          text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary"
      />

      {/* Category */}
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

      {/* Pricing + Sort row */}
      <div className="flex flex-wrap gap-6">
        <div>
          <p className="text-xs font-medium text-muted-foreground mb-2">PRICING</p>
          <div className="flex gap-2">
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

        <div>
          <p className="text-xs font-medium text-muted-foreground mb-2">SORT BY</p>
          <div className="flex gap-2">
            {SORT_OPTIONS.map((s) => (
              <button
                key={s}
                onClick={() => setActiveSort(s)}
                className={`px-3 py-1 rounded-full text-sm border transition-colors
                  ${activeSort === s
                    ? 'bg-primary text-primary-foreground border-primary'
                    : 'border-border hover:border-primary'}`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}