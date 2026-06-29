import { Boilerplate } from '@/constants/resources/boilerplates';
import { Star, ExternalLink, Shield } from 'lucide-react';

const difficultyColor = {
  Beginner: 'bg-green-500/10 text-green-500',
  Intermediate: 'bg-yellow-500/10 text-yellow-500',
  Advanced: 'bg-red-500/10 text-red-500',
};

export function BoilerplateCard({
  boilerplate,
}: {
  boilerplate: Boilerplate;
}) {
  return (
    <div className="rounded-xl border bg-card p-5 hover:border-primary transition-colors flex flex-col gap-4">

      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <h3 className="font-semibold">{boilerplate.name}</h3>
          <p className="text-xs text-muted-foreground mt-0.5">by {boilerplate.author}</p>
        </div>
        <span className={`text-xs px-2 py-1 rounded-full font-medium ${difficultyColor[boilerplate.difficulty]}`}>
          {boilerplate.difficulty}
        </span>
      </div>

      {/* Description */}
      <p className="text-sm text-muted-foreground">{boilerplate.description}</p>

      {/* Stack */}
      <div>
        <p className="text-xs font-medium text-muted-foreground mb-2">STACK</p>
        <div className="flex flex-wrap gap-2">
          {boilerplate.stack.map((tech) => (
            <span
              key={tech}
              className="text-xs px-2 py-0.5 rounded bg-primary/10 text-primary font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Includes */}
      <div>
        <p className="text-xs font-medium text-muted-foreground mb-2">INCLUDES</p>
        <div className="flex flex-wrap gap-2">
          {boilerplate.includes.map((feature) => (
            <span
              key={feature}
              className="text-xs px-2 py-0.5 rounded border border-border text-muted-foreground"
            >
              ✓ {feature}
            </span>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between mt-auto pt-2 border-t border-border">
        <div className="flex items-center gap-3 text-sm text-muted-foreground">
          <span className="flex items-center gap-1">
            <Star className="w-4 h-4" />
            {boilerplate.stars.toLocaleString()}
          </span>
          <span className="flex items-center gap-1">
            <Shield className="w-3 h-3" />
            {boilerplate.license}
          </span>
        </div>
        <a
          href={boilerplate.repoUrl}
          target="_blank"
          className="flex items-center gap-1 text-sm text-primary hover:underline"
        >
          View Repo <ExternalLink className="w-3 h-3" />
        </a>
      </div>

    </div>
  );
}