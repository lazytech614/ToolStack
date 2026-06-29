export type Browser = 'Chrome' | 'Firefox' | 'Safari' | 'Edge' | 'Arc';

export interface BrowserExtension {
  id: string;
  name: string;
  description: string;
  publisher: string;
  category: string[];       // ['Productivity', 'DevTools', 'Privacy', 'AI', 'Design']
  browsers: Browser[];      // which browsers are supported
  storeUrls: Partial<Record<Browser, string>>;  // per-browser install links
  installs: number;
  rating: number;
  ratingCount: number;
  tags: string[];
  repoUrl?: string;
  isFree: boolean;
  isOpenSource: boolean;
  lastUpdated: string;
}

export const browserExtensions: BrowserExtension[] = [
  {
    id: '1',
    name: 'uBlock Origin',
    description: 'An efficient wide-spectrum content blocker. Easy on CPU and memory.',
    publisher: 'Raymond Hill',
    category: ['Privacy', 'Productivity'],
    browsers: ['Chrome', 'Firefox', 'Edge'],
    storeUrls: {
      Chrome: 'https://chrome.google.com/webstore/detail/ublock-origin/...',
      Firefox: 'https://addons.mozilla.org/en-US/firefox/addon/ublock-origin/',
      Edge: 'https://microsoftedge.microsoft.com/addons/detail/ublock-origin/...',
    },
    installs: 40000000,
    rating: 4.8,
    ratingCount: 52000,
    tags: ['ad-blocker', 'privacy', 'security'],
    repoUrl: 'https://github.com/gorhill/uBlock',
    isFree: true,
    isOpenSource: true,
    lastUpdated: '2024-02-05',
  },
  {
    id: '2',
    name: 'React Developer Tools',
    description: 'Adds React debugging tools to Chrome DevTools',
    publisher: 'Meta',
    category: ['DevTools'],
    browsers: ['Chrome', 'Firefox', 'Edge'],
    storeUrls: {
      Chrome: 'https://chrome.google.com/webstore/detail/react-developer-tools/...',
      Firefox: 'https://addons.mozilla.org/en-US/firefox/addon/react-devtools/',
      Edge: 'https://microsoftedge.microsoft.com/addons/detail/react-developer-tools/...',
    },
    installs: 4000000,
    rating: 4.5,
    ratingCount: 8200,
    tags: ['react', 'debugging', 'devtools'],
    repoUrl: 'https://github.com/facebook/react',
    isFree: true,
    isOpenSource: true,
    lastUpdated: '2024-01-20',
  },
  {
    id: '3',
    name: 'Wappalyzer',
    description: 'Identify technologies used on any website instantly',
    publisher: 'Wappalyzer',
    category: ['DevTools', 'Productivity'],
    browsers: ['Chrome', 'Firefox', 'Edge', 'Safari'],
    storeUrls: {
      Chrome: 'https://chrome.google.com/webstore/detail/wappalyzer/...',
      Firefox: 'https://addons.mozilla.org/en-US/firefox/addon/wappalyzer/',
    },
    installs: 2000000,
    rating: 4.3,
    ratingCount: 4100,
    tags: ['tech-stack', 'detection', 'research'],
    isFree: true,
    isOpenSource: false,
    lastUpdated: '2024-01-10',
  },
  // add more...
];