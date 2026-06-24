export const SAMPLE_DIFF = `
diff --git a/src/auth.ts b/src/auth.ts

+ import { ClerkProvider } from "@clerk/nextjs";

+ export async function login() {
+   console.log("logged in");
+ }

- export async function loginOld() {}
`;