import { NextResponse } from "next/server";
import { ai } from "@/lib/gemini";
import { GenerateCommitSchema } from "@/lib/validation";
import { ratelimit } from "@/lib/rateLimit";
import { getIp } from "@/lib/get-ip";

const styleInstructions = {
  conventional: `
Generate a conventional commit.
Use feat:, fix:, docs:, refactor:, chore:, test:
`,
  simple: `
Generate a short human readable commit.
`,
  detailed: `
Generate a detailed commit with bullet points.
`,
  enterprise: `
Generate a professional enterprise commit message.
`,
  funny: `
Generate a funny but understandable commit.
`,
};

export async function POST(req: Request) {
  try {
    const ip = await getIp();

    const { success, limit, remaining } = await ratelimit.limit(ip);

    if (!success) {
      return NextResponse.json(
        {
          error: "Rate limit exceeded. Try again later.",
        },
        {
          status: 429,
        }
      );
    }

    const body = await req.json();

    const parsed =
      GenerateCommitSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        {
          error: "Invalid input",
        },
        {
          status: 400,
        }
      );
    }

    const { diff, style } = parsed.data;

    const prompt = `
You are a senior software engineer.

Analyze the git diff.

${styleInstructions[style]}.

Rules:
- Return only commit message
- No markdown
- No explanations
- Keep it concise

For conventional commits:
Use feat, fix, docs, refactor, test, chore.

Git Diff:
${diff}
`;

    const response =
      await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
      });

    return NextResponse.json({
      success: true,
      commit: response.text,
      limit,
      remaining,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error: "Failed to generate commit",
      },
      {
        status: 500,
      }
    );
  }
}