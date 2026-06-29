'use client';
import { useState } from 'react';
import { Star, Download, ExternalLink, GitBranch } from 'lucide-react';
import { Browser, BrowserExtension } from '@/constants/resources/browser-extensions';

// Browser icons as emoji fallback — swap with real SVGs if you have them
const BROWSER_ICONS: Record<Browser, string> = {
  Chrome: '🌐',
  Firefox: '🦊',
  Safari: '🧭',
  Edge: '🔷',
  Arc: '🌈',
};

const BROWSER_COLORS: Record<Browser, string> = {
  Chrome: 'bg-yellow-500/10 text-yellow-600 border-yellow-500/20',
  Firefox: 'bg-orange-500/10 text-orange-500 border-orange-500/20',
  Safari: 'bg-blue-500/10 text-blue-500 border-blue-500/20',
  Edge: 'bg-cyan-500/10 text-cyan-500 border-cyan-500/20',
  Arc: 'bg-purple-500/10 text-purple-500 border-purple-500/20',
};

function formatInstalls(n: number): string {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 1_000) return `${(n / 1_000).toFixed(0)}K`;
  return n.toString();
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`w-3 h-3 ${
            star <= Math.round(rating)
              ? 'fill-yellow-400 text-yellow-400'
              : 'text-muted-foreground/30'
          }`}
        />
      ))}
      <span className="text-xs text-muted-foreground ml-1">{rating}</span>
    </div>
  );
}

export function BrowserExtCard({
  extension,
}: {
  extension: BrowserExtension;
}) {
  // Track which browser's store link to open
  const [activeBrowser, setActiveBrowser] = useState<Browser>(
    extension.browsers[0]
  );

  return (
    <div className="rounded-xl border bg-card p-5 hover:border-primary transition-colors flex flex-col gap-4">

      {/* Header */}
      <div className="flex items-start gap-3">
        <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-xl shrink-0">
          🧩
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <h3 className="font-semibold">{extension.name}</h3>
            {extension.isOpenSource && (
              <span className="text-xs px-1.5 py-0.5 rounded bg-green-500/10 text-green-500 font-medium">
                Open Source
              </span>
            )}
            {!extension.isFree && (
              <span className="text-xs px-1.5 py-0.5 rounded bg-blue-500/10 text-blue-500 font-medium">
                Paid
              </span>
            )}
          </div>
          <p className="text-xs text-muted-foreground">{extension.publisher}</p>
        </div>
      </div>

      {/* Description */}
      <p className="text-sm text-muted-foreground line-clamp-2">
        {extension.description}
      </p>

      {/* Categories */}
      <div className="flex flex-wrap gap-1.5">
        {extension.category.map((cat) => (
          <span
            key={cat}
            className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary font-medium"
          >
            {cat}
          </span>
        ))}
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5">
        {extension.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs px-2 py-0.5 rounded bg-muted text-muted-foreground"
          >
            #{tag}
          </span>
        ))}
      </div>

      {/* Stats */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1 text-sm text-muted-foreground">
          <Download className="w-3.5 h-3.5" />
          <span>{formatInstalls(extension.installs)}</span>
        </div>
        <StarRating rating={extension.rating} />
        <span className="text-xs text-muted-foreground">
          ({extension.ratingCount.toLocaleString()})
        </span>
      </div>

      {/* Browser Selector — KEY differentiator */}
      <div>
        <p className="text-xs font-medium text-muted-foreground mb-2">
          AVAILABLE ON
        </p>
        <div className="flex gap-2 flex-wrap">
          {extension.browsers.map((browser) => (
            <button
              key={browser}
              onClick={() => setActiveBrowser(browser)}
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs
                border font-medium transition-colors
                ${activeBrowser === browser
                  ? BROWSER_COLORS[browser]
                  : 'border-border text-muted-foreground hover:border-primary'
                }`}
            >
              <span>{BROWSER_ICONS[browser]}</span>
              {browser}
            </button>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between mt-auto pt-2 border-t border-border">
        {extension.repoUrl && (
          <a
            href={extension.repoUrl}
            target="_blank"
            className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <GitBranch className="w-3.5 h-3.5" />
            Source
          </a>
        )}
        {extension.storeUrls[activeBrowser] ? (
          <a
            href={extension.storeUrls[activeBrowser]}
            target="_blank"
            className="flex items-center gap-1 text-sm text-primary hover:underline ml-auto"
          >
            Install on {activeBrowser} <ExternalLink className="w-3 h-3" />
          </a>
        ) : (
          <span className="text-xs text-muted-foreground ml-auto">
            Not available on {activeBrowser}
          </span>
        )}
      </div>

    </div>
  );
}