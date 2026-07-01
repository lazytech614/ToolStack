import { Doc } from "../types";

export const apiAuthentication: Doc = {
  slug: "api-authentication",
  title: "API Authentication",
  description: "How to authenticate requests to endpoints that require it.",
  category: "api-reference",
  order: 3,
  content: [
    {
      type: "paragraph",
      text: "Public content endpoints require no authentication. Endpoints that expose write access or higher rate limits require an API key passed via the Authorization header.",
    },
    {
      type: "heading",
      level: 2,
      text: "Generating an API key",
    },
    {
      type: "paragraph",
      text: "API keys are generated from your account dashboard under Settings → API Keys. Each key can be scoped to read-only or read-write access.",
    },
    {
      type: "heading",
      level: 2,
      text: "Making an authenticated request",
    },
    {
      type: "code",
      language: "bash",
      filename: "terminal",
      code: `curl https://toolstack.dev/api/v1/snippets \\
  -H "Authorization: Bearer YOUR_API_KEY"`,
    },
    {
      type: "callout",
      variant: "danger",
      title: "Keep your key secret",
      text: "Never expose your API key in client-side code or public repositories. Use a server-side proxy if you need to call the API from the browser.",
    },
    {
      type: "heading",
      level: 2,
      text: "Invalid or missing key",
    },
    {
      type: "code",
      language: "json",
      filename: "401 Response",
      code: `{
  "error": "Unauthorized",
  "message": "Missing or invalid API key"
}`,
    },
    {
      type: "callout",
      variant: "tip",
      title: "Rotating keys",
      text: "You can generate a new key at any time without deleting the old one immediately — both remain valid for 24 hours to allow for a smooth rollover.",
    },
  ],
};
