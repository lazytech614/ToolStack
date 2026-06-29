export type Shell = 'bash' | 'zsh' | 'fish' | 'powershell';
export type OS = 'Mac' | 'Windows' | 'Linux';
export type InstallMethod = 'npm' | 'brew' | 'curl' | 'pip' | 'cargo' | 'apt' | 'winget';

export interface CLITool {
  id: string;
  name: string;
  description: string;
  category: string[];        // ['Git', 'Productivity', 'File Management', 'Network', 'AI']
  installCommands: Partial<Record<InstallMethod, string>>;
  shells: Shell[];
  os: OS[];
  tags: string[];
  repoUrl?: string;
  docsUrl?: string;
  stars: number;
  version: string;
  isFree: boolean;
  isOpenSource: boolean;
  lastUpdated: string;
}

export const cliTools: CLITool[] = [
  {
    id: '1',
    name: 'fzf',
    description: 'A command-line fuzzy finder that integrates with any list',
    category: ['Productivity', 'Search'],
    installCommands: {
      brew: 'brew install fzf',
      apt: 'sudo apt install fzf',
      npm: 'npm install -g fzf',
    },
    shells: ['bash', 'zsh', 'fish'],
    os: ['Mac', 'Linux', 'Windows'],
    tags: ['fuzzy-search', 'productivity', 'terminal'],
    repoUrl: 'https://github.com/junegunn/fzf',
    stars: 58000,
    version: '0.46.1',
    isFree: true,
    isOpenSource: true,
    lastUpdated: '2024-02-01',
  },
  {
    id: '2',
    name: 'exa',
    description: 'A modern replacement for ls with colors and icons',
    category: ['File Management'],
    installCommands: {
      brew: 'brew install exa',
      apt: 'sudo apt install exa',
      cargo: 'cargo install exa',
    },
    shells: ['bash', 'zsh', 'fish'],
    os: ['Mac', 'Linux'],
    tags: ['ls', 'files', 'modern'],
    repoUrl: 'https://github.com/ogham/exa',
    stars: 22000,
    version: '0.10.1',
    isFree: true,
    isOpenSource: true,
    lastUpdated: '2024-01-10',
  },
  {
    id: '3',
    name: 'gh',
    description: 'GitHub CLI — work with GitHub from your terminal',
    category: ['Git', 'Productivity'],
    installCommands: {
      brew: 'brew install gh',
      winget: 'winget install GitHub.cli',
      apt: 'sudo apt install gh',
    },
    shells: ['bash', 'zsh', 'fish', 'powershell'],
    os: ['Mac', 'Linux', 'Windows'],
    tags: ['github', 'git', 'pr', 'issues'],
    repoUrl: 'https://github.com/cli/cli',
    docsUrl: 'https://cli.github.com/manual',
    stars: 35000,
    version: '2.43.0',
    isFree: true,
    isOpenSource: true,
    lastUpdated: '2024-02-10',
  },
  // add more...
];