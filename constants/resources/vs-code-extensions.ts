export interface VSCodeExtension {
  id: string;
  name: string;
  description: string;
  publisher: string;
  category: string[];        // ['Linting', 'Formatting', 'Themes', 'AI', 'Git']
  installs: number;
  rating: number;            // 1-5
  ratingCount: number;
  tags: string[];
  marketplaceUrl: string;
  repoUrl?: string;
  isVerified: boolean;
  isFree: boolean;
  lastUpdated: string;
  icon?: string;
}

export const vscodeExtensions: VSCodeExtension[] = [
  {
    id: '1',
    name: 'ESLint',
    description: 'Integrates ESLint JavaScript into VS Code',
    publisher: 'Microsoft',
    category: ['Linting'],
    installs: 32000000,
    rating: 4.5,
    ratingCount: 1200,
    tags: ['javascript', 'typescript', 'linting'],
    marketplaceUrl: 'https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint',
    repoUrl: 'https://github.com/Microsoft/vscode-eslint',
    isVerified: true,
    isFree: true,
    lastUpdated: '2024-02-01',
  },
  {
    id: '2',
    name: 'Prettier',
    description: 'Code formatter using prettier',
    publisher: 'Prettier',
    category: ['Formatting'],
    installs: 38000000,
    rating: 4.4,
    ratingCount: 980,
    tags: ['formatting', 'javascript', 'typescript', 'css'],
    marketplaceUrl: 'https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode',
    repoUrl: 'https://github.com/prettier/prettier-vscode',
    isVerified: true,
    isFree: true,
    lastUpdated: '2024-01-15',
  },
  {
    id: '3',
    name: 'GitHub Copilot',
    description: 'AI-powered code completion and chat assistant',
    publisher: 'GitHub',
    category: ['AI'],
    installs: 15000000,
    rating: 4.7,
    ratingCount: 3400,
    tags: ['ai', 'autocomplete', 'productivity'],
    marketplaceUrl: 'https://marketplace.visualstudio.com/items?itemName=GitHub.copilot',
    isVerified: true,
    isFree: false,
    lastUpdated: '2024-02-10',
  },
  // add more...
];