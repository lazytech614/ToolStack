import { Doc } from "../types";

export const rateLimits: Doc = {
  slug: "rate-limits",
  title: "Rate Limits",
  description: "Understand the API rate limits and how to handle 429 responses.",
  category: "api-reference",
  order: 2,
  content: [
    {
      type: "paragraph",
      text: "The ToolStack API enforces rate limits to ensure fair usage and maintain performance for all users. Limits are applied per IP address on a sliding window.",
    },
    {
      type: "heading",
      level: 2,
      text: "Limits by tier",
    },
    {
      type: "table",
      headers: ["Tier", "Requests / minute", "Requests / day"],
      rows: [
        ["Unauthenticated", "30", "500"],
        ["Authenticated (free)", "120", "5,000"],
        ["Authenticated (pro)", "600", "Unlimited"],
      ],
    },
    {
      type: "heading",
      level: 2,
      text: "Rate limit headers",
    },
    {
      type: "paragraph",
      text: "Every response includes headers so you can track your current usage and avoid hitting the limit.",
    },
    {
      type: "table",
      headers: ["Header", "Description"],
      rows: [
        ["X-RateLimit-Limit", "Maximum requests allowed in the window"],
        ["X-RateLimit-Remaining", "Requests remaining in the current window"],
        ["X-RateLimit-Reset", "Unix timestamp when the window resets"],
        ["Retry-After", "Seconds to wait (only present on 429 responses)"],
      ],
    },
    {
      type: "heading",
      level: 2,
      text: "Handling a 429",
    },
    {
      type: "callout",
      variant: "warning",
      title: "Do not retry immediately",
      text: "Retrying instantly after a 429 will not succeed and may result in a temporary ban. Always respect the Retry-After header.",
    },
    {
      type: "code",
      language: "typescript",
      filename: "lib/api.ts",
      code: `async function fetchWithRetry(url: string, retries = 3): Promise<Response> {
  const res = await fetch(url);

  if (res.status === 429 && retries > 0) {
    const retryAfter = Number(res.headers.get("Retry-After") ?? 1);
    await new Promise((r) => setTimeout(r, retryAfter * 1000));
    return fetchWithRetry(url, retries - 1);
  }

  return res;
}`,
    },
    {
      type: "callout",
      variant: "danger",
      title: "Exceeding limits repeatedly",
      text: "Consistently exceeding rate limits may result in your IP being blocked. If you need higher limits, consider upgrading to the pro tier.",
    },
  ],
};
