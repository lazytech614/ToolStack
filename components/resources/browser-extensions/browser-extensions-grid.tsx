import { BrowserExtension } from "@/constants/resources/browser-extensions";
import { BrowserExtCard } from "./browser-extension-card";

export function BrowserExtGrid({
  extensions,
}: {
  extensions: BrowserExtension[];
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {extensions.map((ext) => (
        <BrowserExtCard key={ext.id} extension={ext} />
      ))}
    </div>
  );
}