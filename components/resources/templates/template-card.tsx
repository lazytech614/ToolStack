import { Template } from '@/constants/configs/resources';
import { Star, ExternalLink } from 'lucide-react';

export function TemplateCard({ template }: { template: Template }) {
  return (
    <div className="rounded-xl border bg-card p-5 hover:border-primary transition-colors">
      {/* Thumbnail */}
      <div className="w-full h-40 rounded-lg bg-muted mb-4" />

      {/* Framework Badge */}
      <span className="text-xs font-medium px-2 py-1 rounded-full bg-primary/10 text-primary">
        {template.framework}
      </span>

      <h3 className="font-semibold mt-3 mb-1">{template.name}</h3>
      <p className="text-sm text-muted-foreground mb-4">{template.description}</p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {template.tags.map((tag) => (
          <span key={tag} className="text-xs px-2 py-0.5 rounded bg-muted text-muted-foreground">
            #{tag}
          </span>
        ))}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between">
        <span className="flex items-center gap-1 text-sm text-muted-foreground">
          <Star className="w-4 h-4" />
          {template.stars.toLocaleString()}
        </span>
        <a
          href={template.repoUrl}
          target="_blank"
          className="flex items-center gap-1 text-sm text-primary hover:underline"
        >
          View Repo <ExternalLink className="w-3 h-3" />
        </a>
      </div>
    </div>
  );
}