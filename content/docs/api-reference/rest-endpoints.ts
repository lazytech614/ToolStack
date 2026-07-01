import { Doc } from "../types";

export const restEndpoints: Doc = {
  slug: "rest-endpoints",
  title: "REST Endpoints",
  description: "All available API endpoints, their parameters, and example responses.",
  category: "api-reference",
  order: 1,
  content: [
    {
      type: "paragraph",
      text: "ToolStack exposes a read-only REST API for accessing content programmatically. All endpoints return JSON and require no authentication for public content.",
    },
    {
      type: "callout",
      variant: "info",
      title: "Base URL",
      text: "All endpoints are relative to https://toolstack.dev/api/v1",
    },
    {
      type: "heading",
      level: 2,
      text: "Snippets",
    },
    {
      type: "table",
      headers: ["Method", "Endpoint", "Description"],
      rows: [
        ["GET", "/snippets", "List all snippets"],
        ["GET", "/snippets/:id", "Get a single snippet by ID"],
      ],
    },
    {
      type: "code",
      language: "bash",
      filename: "GET /snippets",
      code: `curl https://toolstack.dev/api/v1/snippets`,
    },
    {
      type: "code",
      language: "json",
      filename: "Response",
      code: `{
  "data": [
    {
      "id": "ts-debounce",
      "title": "debounce",
      "language": "typescript",
      "tags": ["performance", "utils"]
    }
  ],
  "total": 15
}`,
    },
    {
      type: "heading",
      level: 2,
      text: "Cheatsheets",
    },
    {
      type: "table",
      headers: ["Method", "Endpoint", "Description"],
      rows: [
        ["GET", "/cheatsheets", "List all cheatsheets"],
        ["GET", "/cheatsheets/:slug", "Get a cheatsheet with all sections"],
      ],
    },
    {
      type: "heading",
      level: 2,
      text: "Glossary",
    },
    {
      type: "table",
      headers: ["Method", "Endpoint", "Description"],
      rows: [
        ["GET", "/glossary", "List all terms"],
        ["GET", "/glossary/:id", "Get a single term by ID"],
      ],
    },
    {
      type: "callout",
      variant: "tip",
      title: "Filtering",
      text: "All list endpoints support ?category= and ?q= query parameters for filtering. Example: /snippets?language=typescript&q=debounce",
    },
  ],
};
