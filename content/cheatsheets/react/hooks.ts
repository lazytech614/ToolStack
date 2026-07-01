import { CheatsheetSection } from "../types";

export const hooksSection: CheatsheetSection = {
  title: "Hooks",
  language: "typescript",
  snippets: [
    { code: `const [count, setCount] = useState(0);`, description: "useState" },
    {
      code: `useEffect(() => {\n  // side effect\n  return () => {\n    // cleanup\n  };\n}, [dep]);`,
      description: "useEffect with cleanup",
    },
    {
      code: `const value = useMemo(() => computeExpensive(a, b), [a, b]);`,
      description: "useMemo",
    },
    {
      code: `const handleClick = useCallback(() => doSomething(id), [id]);`,
      description: "useCallback",
    },
    { code: `const ref = useRef<HTMLInputElement>(null);`, description: "useRef" },
    {
      code: `const [state, dispatch] = useReducer(reducer, initialState);`,
      description: "useReducer",
    },
    { code: `const theme = useContext(ThemeContext);`, description: "useContext" },
  ],
};
