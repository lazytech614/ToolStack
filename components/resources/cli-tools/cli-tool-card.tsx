'use client';
import { useState } from 'react';
import { useCopy } from '@/hooks/useCopy';
import { Star, Copy, Check, ExternalLink, BookOpen } from 'lucide-react';
import { CLITool, InstallMethod } from '@/constants/resources/cli-tools';

const OS_ICONS: Record<string, string> = {
  Mac: '🍎',
  Windows: '🪟',
  Linux: '🐧',
};

const SHELL_COLORS: Record<string, string> = {
  bash: 'bg-orange-500/10 text-orange-500',
  zsh: 'bg-blue-500/10 text-blue-500',
  fish: 'bg-cyan-500/10 text-cyan-500',
  powershell: 'bg-purple-500/10 text-purple-500',
};

const METHOD_LABELS: Record<InstallMethod, string> = {
  npm: 'npm',
  brew: 'brew',
  curl: 'curl',
  pip: 'pip',
  cargo: 'cargo',
  apt: 'apt',
  winget: 'winget',
};

function CopyButton({ text }: { text: string }) {
  const { copied, copy } = useCopy();

  const handleCopy = () => {
    copy(text);
  };

  return (
    <button
      onClick={handleCopy}
      className="p-1.5 rounded-md hover:bg-muted transition-colors shrink-0"
      title="Copy command"
    >
      {copied ? (
        <Check className="w-3.5 h-3.5 text-green-500" />
      ) : (
        <Copy className="w-3.5 h-3.5 text-muted-foreground" />
      )}
    </button>
  );
}

export function CLIToolCard({ tool }: { tool: CLITool }) {
  const installMethods = Object.keys(tool.installCommands) as InstallMethod[];
  const [activeMethod, setActiveMethod] = useState<InstallMethod>(
    installMethods[0]
  );

  const activeCommand = tool.installCommands[activeMethod] ?? '';

  return (
    <div className="rounded-xl border bg-card p-5 hover:border-primary transition-colors flex flex-col gap-4">

      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <div className="flex items-center gap-2">
            <h3 className="font-semibold font-mono">{tool.name}</h3>
            <span className="text-xs px-1.5 py-0.5 rounded bg-muted text-muted-foreground font-mono">
              v{tool.version}
            </span>
          </div>
          <div className="flex items-center gap-1.5 mt-1">
            {tool.os.map((os) => (
              <span key={os} title={os} className="text-sm">
                {OS_ICONS[os]}
              </span>
            ))}
          </div>
        </div>
        {tool.isOpenSource && (
          <span className="text-xs px-2 py-0.5 rounded-full bg-green-500/10 text-green-500 font-medium">
            Open Source
          </span>
        )}
      </div>

      {/* Description */}
      <p className="text-sm text-muted-foreground">{tool.description}</p>

      {/* Categories + Tags */}
      <div className="flex flex-wrap gap-1.5">
        {tool.category.map((cat) => (
          <span
            key={cat}
            className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary font-medium"
          >
            {cat}
          </span>
        ))}
        {tool.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs px-2 py-0.5 rounded bg-muted text-muted-foreground"
          >
            #{tag}
          </span>
        ))}
      </div>

      {/* Shell Compatibility */}
      <div>
        <p className="text-xs font-medium text-muted-foreground mb-2">SHELLS</p>
        <div className="flex gap-1.5 flex-wrap">
          {tool.shells.map((shell) => (
            <span
              key={shell}
              className={`text-xs px-2 py-0.5 rounded font-mono font-medium ${SHELL_COLORS[shell]}`}
            >
              {shell}
            </span>
          ))}
        </div>
      </div>

      {/* Install Command — KEY differentiator */}
      <div>
        <p className="text-xs font-medium text-muted-foreground mb-2">
          INSTALL
        </p>

        {/* Method tabs */}
        <div className="flex gap-1.5 mb-2 flex-wrap">
          {installMethods.map((method) => (
            <button
              key={method}
              onClick={() => setActiveMethod(method)}
              className={`text-xs px-2.5 py-1 rounded font-mono border transition-colors
                ${activeMethod === method
                  ? 'bg-primary text-primary-foreground border-primary'
                  : 'border-border hover:border-primary text-muted-foreground'}`}
            >
              {METHOD_LABELS[method]}
            </button>
          ))}
        </div>

        {/* Command block with copy */}
        <div className="flex items-center gap-2 bg-muted rounded-lg px-3 py-2">
          <code className="text-xs font-mono flex-1 overflow-x-auto text-foreground whitespace-nowrap">
            {activeCommand}
          </code>
          <CopyButton text={activeCommand} />
        </div>
      </div>

      {/* Stars + Links */}
      <div className="flex items-center justify-between mt-auto pt-2 border-t border-border">
        <span className="flex items-center gap-1 text-sm text-muted-foreground">
          <Star className="w-4 h-4" />
          {tool.stars.toLocaleString()}
        </span>
        <div className="flex items-center gap-3">
          {tool.docsUrl && (
            <a
              href={tool.docsUrl}
              target="_blank"
              className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <BookOpen className="w-3.5 h-3.5" />
              Docs
            </a>
          )}
          {tool.repoUrl && (
            <a
              href={tool.repoUrl}
              target="_blank"
              className="flex items-center gap-1 text-sm text-primary hover:underline"
            >
              Repo <ExternalLink className="w-3 h-3" />
            </a>
          )}
        </div>
      </div>

    </div>
  );
}