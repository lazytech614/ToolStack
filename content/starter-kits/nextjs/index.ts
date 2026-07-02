import type { StarterKit } from "../types";
import { shipfast } from "./shipfast";
import { nextStarter } from "./next-starter";
import { nextEnterprise } from "./next-enterprise";
import { supastarter } from "./supa-starter";

export { shipfast, nextStarter, nextEnterprise, supastarter };

export const nextjsKits: StarterKit[] = [shipfast, nextStarter, nextEnterprise, supastarter];
