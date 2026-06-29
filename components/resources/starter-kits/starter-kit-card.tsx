import { StarterKit } from '@/constants/resources/starter-kits';
import { Star, ExternalLink, Check, X } from 'lucide-react';

const pricingColor = {
  Free: 'bg-green-500/10 text-green-500',
  Paid: 'bg-blue-500/10 text-blue-500',
  Freemium: 'bg-yellow-500/10 text-yellow-500',
};

const FEATURE_LABELS: Record<keyof StarterKit['features'], string> = {
  authentication: 'Auth',
  database: 'Database',
  payments: 'Payments',
  email: 'Email',
  storage: 'Storage',
  analytics: 'Analytics',
  testing: 'Testing',
  docker: 'Docker',
};

export default function StarterKitCard({ kit }: { kit: StarterKit }) {
  return (
    <div className="rounded-xl border bg-card p-5 hover:border-primary transition-colors flex flex-col gap-4">

      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <h3 className="font-semibold">{kit.name}</h3>
          <p className="text-xs text-muted-foreground mt-0.5">by {kit.author}</p>
        </div>
        <span className={`text-xs px-2 py-1 rounded-full font-medium ${pricingColor[kit.pricing]}`}>
          {kit.pricing}
        </span>
      </div>

      {/* Description */}
      <p className="text-sm text-muted-foreground">{kit.description}</p>

      {/* Stack */}
      <div>
        <p className="text-xs font-medium text-muted-foreground mb-2">STACK</p>
        <div className="flex flex-wrap gap-1.5">
          {kit.stack.map((tech) => (
            <span
              key={tech}
              className="text-xs px-2 py-0.5 rounded bg-primary/10 text-primary font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Features Grid - key differentiator for starter kits */}
      <div>
        <p className="text-xs font-medium text-muted-foreground mb-2">WHAT'S INCLUDED</p>
        <div className="grid grid-cols-2 gap-y-1.5 gap-x-2">
          {(Object.keys(kit.features) as Array<keyof StarterKit['features']>).map((feature) => (
            <div key={feature} className="flex items-center gap-1.5 text-xs">
              {kit.features[feature] ? (
                <Check className="w-3.5 h-3.5 text-green-500 shrink-0" />
              ) : (
                <X className="w-3.5 h-3.5 text-muted-foreground/40 shrink-0" />
              )}
              <span className={kit.features[feature] ? 'text-foreground' : 'text-muted-foreground/40'}>
                {FEATURE_LABELS[feature]}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Tech Details - shows specific libs used */}
      {Object.keys(kit.techDetails).length > 0 && (
        <div className="rounded-lg bg-muted/50 p-3 text-xs space-y-1">
          {kit.techDetails.auth && (
            <div className="flex justify-between">
              <span className="text-muted-foreground">Auth</span>
              <span className="font-medium">{kit.techDetails.auth}</span>
            </div>
          )}
          {kit.techDetails.database && (
            <div className="flex justify-between">
              <span className="text-muted-foreground">Database</span>
              <span className="font-medium">{kit.techDetails.database}</span>
            </div>
          )}
          {kit.techDetails.payments && (
            <div className="flex justify-between">
              <span className="text-muted-foreground">Payments</span>
              <span className="font-medium">{kit.techDetails.payments}</span>
            </div>
          )}
          {kit.techDetails.email && (
            <div className="flex justify-between">
              <span className="text-muted-foreground">Email</span>
              <span className="font-medium">{kit.techDetails.email}</span>
            </div>
          )}
        </div>
      )}

      {/* Footer */}
      <div className="flex items-center justify-between mt-auto pt-2 border-t border-border">
        <span className="flex items-center gap-1 text-sm text-muted-foreground">
          <Star className="w-4 h-4" />
          {kit.stars.toLocaleString()}
        </span>
        <div className="flex items-center gap-3">
          {kit.demoUrl && (
            <a
              href={kit.demoUrl}
              target="_blank"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Demo
            </a>
          )}
          <a
            href={kit.repoUrl}
            target="_blank"
            className="flex items-center gap-1 text-sm text-primary hover:underline"
          >
            View Repo <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>

    </div>
  );
}