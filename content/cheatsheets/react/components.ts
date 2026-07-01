import { CheatsheetSection } from "../types";

export const componentsSection: CheatsheetSection = {
  title: "Components",
  language: "typescript",
  snippets: [
    {
      code: `function Greeting({ name }: { name: string }) {\n  return <p>Hello, {name}</p>;\n}`,
      description: "Functional component with props",
    },
    {
      code: `function Card({ children }: { children: React.ReactNode }) {\n  return <div className="card">{children}</div>;\n}`,
      description: "Component accepting children",
    },
    {
      code: `const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => (\n  <button ref={ref} {...props} />\n));`,
      description: "forwardRef component",
    },
    {
      code: `export default function Page() {\n  return <div>Page content</div>;\n}`,
      description: "Default export component",
    },
  ],
};
