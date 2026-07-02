import { FileText } from "lucide-react";
import { Tool } from "../types";

export const csvViewer: Tool = {
  id: "csv-viewer",
  name: "CSV Viewer",
  description: "Paste or upload a CSV file and browse it as a sortable, filterable table.",
  icon: FileText,
  category: "Preview",
  href: "/tools/csv-viewer",
  seo: {
    title: "Online CSV Viewer – Sortable & Filterable Table ",
    description:
      "Paste or upload a CSV file and instantly view it as a sortable, filterable table. No server upload — everything runs in the browser.",
    keywords: [
      "csv viewer",
      "csv table viewer",
      "view csv online",
      "csv file reader",
      "csv parser",
    ],
  },
};
