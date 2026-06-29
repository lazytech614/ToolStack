import BrowserExtFilter from "@/components/resources/browser-extensions/browser-extension-filter";
import { BrowserExtGrid } from "@/components/resources/browser-extensions/browser-extensions-grid";
import { browserExtensions } from "@/constants/resources/browser-extensions";

export const metadata = {
  title: 'Browser Extensions | Tool Stack',
  description: 'Useful browser extensions for debugging and productivity',
};

export default function BrowserExtensionsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Browser Extensions</h1>
        <p className="text-muted-foreground mt-2">
          Useful browser extensions for debugging and productivity
        </p>
      </div>

      <BrowserExtFilter />
      <BrowserExtGrid extensions={browserExtensions} />
    </div>
  );
}