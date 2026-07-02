import { boilerplates } from "@/content/boilerplates";
import { browserExtensions } from "@/content/browser-extensions";
import { cheatsheets } from "@/content/cheatsheets";
import { cliTools } from "@/content/cli-tools";
import { glossaryTerms } from "@/content/glossary";
import { snippets } from "@/content/snippets";
import { starterKits } from "@/content/starter-kits";
import { allTemplates } from "@/content/templates";
import { tools } from "@/content/tools";
import { vscodeExtensions } from "@/content/vscode-extensions";
import { SearchItem } from "@/types/search-types";

const toolItems: SearchItem[] = tools.map((tool) => ({
  id: tool.id,
  title: tool.name,
  description: tool.description,
  href: tool.href,
  category: "Tools",
  keywords: tool.seo.keywords,
}));

const snippetItems: SearchItem[] = snippets.map((snippet) => ({
  id: snippet.id,
  title: snippet.title,
  description: snippet.description,
  href: `/learn/snippets/${snippet.id}`,
  category: "Learn",
  tags: snippet.tags,
  keywords: [snippet.language],
}));

const cheatsheetItems: SearchItem[] = cheatsheets.map((sheet) => ({
  id: sheet.title,
  title: sheet.title,
  description: sheet.description,
  href: `/learn/snippets/${sheet.slug}`,
  category: "Learn",
  tags: [sheet.tag],
}));

const starterKitItems: SearchItem[] = starterKits.map((kit) => ({
  id: kit.id,
  title: kit.name,
  description: kit.description,
  href: kit.repoUrl,
  category: "Resources",
  tags: kit.stack,
}));

const templateItems: SearchItem[] = allTemplates.map((template) => ({
  id: template.id,
  title: template.name,
  description: template.description,
  href: template.repoUrl,
  category: "Resources",
  tags: template.tags,
}));

const browserExtensionItems: SearchItem[] = browserExtensions.map((ext) => ({
  id: ext.id,
  title: ext.name,
  description: ext.description,
  href: ext.storeUrls.Chrome ?? "",
  category: "Resources",
  tags: ext.tags,
}));

const vscodeExtensionItems: SearchItem[] = vscodeExtensions.map((ext) => ({
  id: ext.id,
  title: ext.name,
  description: ext.description,
  href: ext.marketplaceUrl,
  category: "Resources",
  tags: ext.tags,
}));

const cliItems: SearchItem[] = cliTools.map((tool) => ({
  id: tool.id,
  title: tool.name,
  description: tool.description,
  href: tool.docsUrl ?? tool.repoUrl ?? "",
  category: "Resources",
  tags: tool.tags,
}));

const glossaryItems: SearchItem[] = glossaryTerms.map((item) => ({
  id: item.id,
  title: item.term,
  description: item.definition,
  href: `/learn/glossary`,
  category: "Learn",
}));

const boilerplateItems: SearchItem[] = boilerplates.map((boilerplate) => ({
  id: boilerplate.id,
  title: boilerplate.name,
  description: boilerplate.description,
  href: boilerplate.repoUrl,
  category: "Resources",
  keywords: [...boilerplate.stack, ...boilerplate.includes],
}));

export const SEARCH_INDEX: SearchItem[] = [
  ...toolItems,
  ...snippetItems,
  ...cheatsheetItems,
  ...starterKitItems,
  ...templateItems,
  ...browserExtensionItems,
  ...vscodeExtensionItems,
  ...cliItems,
  ...glossaryItems,
  ...boilerplateItems,
];
