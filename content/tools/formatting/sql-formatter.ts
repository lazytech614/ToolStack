import { Database } from "lucide-react";
import { Tool } from "../types";

export const sqlFormatter: Tool = {
  id: "sql-formatter",
  name: "SQL Formatter",
  description: "Format and beautify SQL queries with keyword highlighting and indentation control.",
  icon: Database,
  category: "Formatting",
  href: "/tools/sql-formatter",
  seo: {
    title: "SQL Formatter & Beautifier Online ",
    description:
      "Instantly format and beautify SQL queries with proper indentation and keyword highlighting. Supports MySQL, PostgreSQL, and more.",
    keywords: [
      "sql formatter",
      "sql beautifier",
      "format sql online",
      "sql query formatter",
      "sql indenter",
    ],
  },
};
