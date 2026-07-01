import { CheatsheetSection } from "../types";

export const formsSection: CheatsheetSection = {
  title: "Forms",
  language: "typescript",
  snippets: [
    {
      code: `const [value, setValue] = useState("");\n\n<input value={value} onChange={(e) => setValue(e.target.value)} />`,
      description: "Controlled input",
    },
    {
      code: `function handleSubmit(e: React.FormEvent) {\n  e.preventDefault();\n  // submit logic\n}`,
      description: "Prevent default form submission",
    },
    {
      code: `<select value={selected} onChange={(e) => setSelected(e.target.value)}>\n  <option value="a">A</option>\n</select>`,
      description: "Controlled select",
    },
    {
      code: `<input type="checkbox" checked={checked} onChange={(e) => setChecked(e.target.checked)} />`,
      description: "Controlled checkbox",
    },
  ],
};
