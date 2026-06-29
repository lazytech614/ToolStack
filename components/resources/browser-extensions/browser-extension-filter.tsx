'use client';
import { Browser } from '@/constants/resources/browser-extensions';
import { useState } from 'react';

const CATEGORIES = [
  'All', 'Productivity', 'DevTools', 'Privacy',
  'AI', 'Design', 'Security', 'Accessibility',
];

const BROWSERS: Browser[] = ['Chrome', 'Firefox', 'Safari', 'Edge', 'Arc'];

const BROWSER_ICONS: Record<Browser, string> = {
  Chrome: '🌐',
  Firefox: '🦊',
  Safari: '🧭',
  Edge: '🔷',
  Arc: '🌈',
};

const SORT_OPTIONS = ['Most Installed', 'Top Rated', 'Recently Updated'];

export default function BrowserExtFilter() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeBrowsers, setActiveBrowsers] = useState<Browser[]>([]);
  const [showOpenSource, setShowOpenSource] = useState(false);
  const [activeSort, setActiveSort] = useState('Most Installed');
  const [search, setSearch] = useState('');

  const toggleBrowser = (browser: Browser) => {
    setActiveBrowsers((prev) =>
      prev.includes(browser)
        ? prev.filter((b) => b !== browser)
        : [...prev, browser]
    );
  };

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

      {/* Browser Compatibility Filter */}
      <div>
        <p className="text-xs font-medium text-muted-foreground mb-2">
          WORKS ON
        </p>
        <div className="flex gap-2 flex-wrap">
          {BROWSERS.map((browser) => (
            <button
              key={browser}
              onClick={() => toggleBrowser(browser)}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-sm
                border transition-colors
                ${activeBrowsers.includes(browser)
                  ? 'bg-primary text-primary-foreground border-primary'
                  : 'border-border hover:border-primary'}`}
            >
              {BROWSER_ICONS[browser]} {browser}
            </button>
          ))}
        </div>
      </div>

      {/* Bottom row — Sort + Open Source toggle */}
      <div className="flex flex-wrap items-center gap-6">
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

        {/* Open Source toggle */}
        <div className="flex items-center gap-2 mt-4">
          <button
            onClick={() => setShowOpenSource(!showOpenSource)}
            className={`relative w-9 h-5 rounded-full transition-colors
              ${showOpenSource ? 'bg-primary' : 'bg-muted'}`}
          >
            <span
              className={`absolute top-0.5 left-0.5 w-4 h-4 rounded-full bg-white
                transition-transform ${showOpenSource ? 'translate-x-4' : ''}`}
            />
          </button>
          <span className="text-sm text-muted-foreground">Open Source only</span>
        </div>
      </div>

    </div>
  );
}