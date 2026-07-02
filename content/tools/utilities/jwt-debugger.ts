import { Shield } from "lucide-react";
import { Tool } from "../types";

export const jwtDebugger: Tool = {
  id: "jwt-debugger",
  name: "JWT Debugger",
  description:
    "Decode, verify, and inspect JSON Web Tokens. Signature validation runs fully offline.",
  icon: Shield,
  category: "Utilities",
  href: "/tools/jwt-debugger",
  status: "BETA",
  seo: {
    title: "JWT Debugger – Decode & Verify JSON Web Tokens ",
    description:
      "Decode and inspect JWT headers, payloads, and signatures. Fully offline signature validation — your tokens never leave the browser.",
    keywords: ["jwt debugger", "jwt decoder", "json web token", "jwt validator", "jwt inspector"],
  },
};
