import { Doc } from "../types";

export const authentication: Doc = {
  slug: "authentication",
  title: "Authentication",
  description: "How auth works and how to protect pages in ToolStack.",
  category: "core-concepts",
  order: 2,
  content: [
    {
      type: "paragraph",
      text: "ToolStack uses NextAuth.js for authentication. Sessions are stored server-side and accessed via the useSession hook on the client or getServerSession in server components and API routes.",
    },
    {
      type: "heading",
      level: 2,
      text: "Protecting a page",
    },
    {
      type: "paragraph",
      text: "Use the withAuth middleware or check the session directly in a server component to gate access to a route.",
    },
    {
      type: "code",
      language: "typescript",
      filename: "app/dashboard/page.tsx",
      code: `import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/login");

  return <div>Welcome, {session.user.name}</div>;
}`,
    },
    {
      type: "heading",
      level: 2,
      text: "Protecting an API route",
    },
    {
      type: "code",
      language: "typescript",
      filename: "app/api/protected/route.ts",
      code: `import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { NextResponse } from "next/server";

export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json({ error: "Unauthorised" }, { status: 401 });
  }
  return NextResponse.json({ data: "secret" });
}`,
    },
    {
      type: "callout",
      variant: "warning",
      title: "Never trust the client",
      text: "Always validate the session on the server. Client-side checks are for UX only — a determined user can bypass them.",
    },
    {
      type: "heading",
      level: 2,
      text: "Session shape",
    },
    {
      type: "table",
      headers: ["Field", "Type", "Description"],
      rows: [
        ["session.user.name", "string", "Display name from the provider"],
        ["session.user.email", "string", "Email address"],
        ["session.user.image", "string | null", "Avatar URL"],
        ["session.expires", "string", "ISO date string of session expiry"],
      ],
    },
  ],
};
