'use client';
import { OS, Shell } from '@/constants/resources/cli-tools';
import { useState } from 'react';

const CATEGORIES = [
  'All', 'Git', 'Productivity', 'File Management',
  'Network', 'AI', 'Search', 'Monitoring',
];

const OS_OPTIONS: OS[] = ['Mac', 'Windows', 'Linux'];
const OS_ICONS: Record<OS, string> = {
  Mac: '🍎',
  Windows: '🪟',
  Linux: '🐧',
};

const SHELL_OPTIONS: Shell[] = ['bash', 'zsh', 'fish', 'powershell'];

const INSTALL_METHODS = ['npm', 'brew', 'curl', 'pip', 'cargo', 'apt', 'winget'];

const SORT_OPTIONS = ['Most Stars', 'Recently Updated', 'Name A-Z'];

export function CLIToolsFilter() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeOS, setActiveOS] = useState<OS[]>([]);
  const [activeShells, setActiveShells] = useState<Shell[]>([]);
  const [activeMethod, setActiveMethod] = useState('All');
  const [activeSort, setActiveSort] = useState('Most Stars');
  const [search, setSearch] = useState('');

  const toggleOS = (os: OS) =>
    setActiveOS((prev) =>
      prev.includes(os) ? prev.filter((o) => o !== os) : [...prev, os]
    );

  const toggleShell = (shell: Shell) =>
    setActiveShells((prev) =>
      prev.includes(shell) ? prev.filter((s) => s !== shell) : [...prev, shell]
    );

  return (
    <div className="flex flex-col gap-4 mb-8">

      {/* Search */}
      <input
        type="text"
        placeholder="Search CLI tools..."
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

      <div className="flex flex-wrap gap-8">

        {/* OS Filter */}
        <div>
          <p className="text-xs font-medium text-muted-foreground mb-2">OS</p>
          <div className="flex gap-2">
            {OS_OPTIONS.map((os) => (
              <button
                key={os}
                onClick={() => toggleOS(os)}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-sm
                  border transition-colors
                  ${activeOS.includes(os)
                    ? 'bg-primary text-primary-foreground border-primary'
                    : 'border-border hover:border-primary'}`}
              >
                {OS_ICONS[os]} {os}
              </button>
            ))}
          </div>
        </div>

        {/* Shell Filter */}
        <div>
          <p className="text-xs font-medium text-muted-foreground mb-2">SHELL</p>
          <div className="flex gap-2 flex-wrap">
            {SHELL_OPTIONS.map((shell) => (
              <button
                key={shell}
                onClick={() => toggleShell(shell)}
                className={`px-3 py-1 rounded-full text-sm border font-mono transition-colors
                  ${activeShells.includes(shell)
                    ? 'bg-primary text-primary-foreground border-primary'
                    : 'border-border hover:border-primary'}`}
              >
                {shell}
              </button>
            ))}
          </div>
        </div>

      </div>

      {/* Install Method + Sort */}
      <div className="flex flex-wrap gap-8">
        <div>
          <p className="text-xs font-medium text-muted-foreground mb-2">
            INSTALL VIA
          </p>
          <div className="flex gap-2 flex-wrap">
            {['All', ...INSTALL_METHODS].map((method) => (
              <button
                key={method}
                onClick={() => setActiveMethod(method)}
                className={`px-3 py-1 rounded-full text-sm border font-mono transition-colors
                  ${activeMethod === method
                    ? 'bg-primary text-primary-foreground border-primary'
                    : 'border-border hover:border-primary'}`}
              >
                {method}
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