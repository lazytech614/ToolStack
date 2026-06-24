import { z } from "zod";

export const GenerateCommitSchema = z.object({
  diff: z.string().min(10),
  style: z.enum([
    "conventional",
    "simple",
    "detailed",
    "enterprise",
    "funny",
  ]),
});