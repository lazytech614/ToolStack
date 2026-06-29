import { VSCodeExtension } from '@/constants/resources/vs-code-extensions';
import { Star, Download, ExternalLink, BadgeCheck } from 'lucide-react';

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

export default function VSCodeCard({
  extension,
}: {
  extension: VSCodeExtension;
}) {
  return (
    <div className="rounded-xl border bg-card p-5 hover:border-primary transition-colors flex flex-col gap-4">

      {/* Header */}
      <div className="flex items-start gap-3">
        {/* Icon placeholder */}
        <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center shrink-0 text-lg">
          🧩
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1.5">
            <h3 className="font-semibold truncate">{extension.name}</h3>
            {extension.isVerified && (
              <BadgeCheck className="w-4 h-4 text-blue-500 shrink-0" />
            )}
          </div>
          <p className="text-xs text-muted-foreground">{extension.publisher}</p>
        </div>
        {!extension.isFree && (
          <span className="text-xs px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-500 font-medium shrink-0">
            Paid
          </span>
        )}
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

      {/* Footer */}
      <div className="flex items-center justify-between mt-auto pt-2 border-t border-border">
        {extension.repoUrl && (
          <a
            href={extension.repoUrl}
            target="_blank"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Source
          </a>
        )}
        <a
          href={extension.marketplaceUrl}
          target="_blank"
          className="flex items-center gap-1 text-sm text-primary hover:underline ml-auto"
        >
          Install <ExternalLink className="w-3 h-3" />
        </a>
      </div>

    </div>
  );
}