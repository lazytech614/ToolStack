import { CheatsheetSection } from "../types";

export const renderingSection: CheatsheetSection = {
  title: "Rendering Patterns",
  language: "typescript",
  snippets: [
    { code: `{isVisible && <Modal />}`, description: "Conditional rendering" },
    { code: `{isLoggedIn ? <Dashboard /> : <Login />}`, description: "Ternary rendering" },
    {
      code: `{items.map((item) => (\n  <li key={item.id}>{item.name}</li>\n))}`,
      description: "List rendering with key",
    },
    {
      code: `<Suspense fallback={<Spinner />}>\n  <LazyComponent />\n</Suspense>`,
      description: "Suspense boundary",
    },
    {
      code: `const LazyComponent = lazy(() => import("./LazyComponent"));`,
      description: "Code-split component",
    },
  ],
};
