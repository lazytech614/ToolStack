import { nextEnterprise } from "./next-enterprise";
import { t3Stack } from "./t3-stack";
import { payloadCms } from "./payload-cms";
import type { Boilerplate } from "../types";

export { nextEnterprise, t3Stack, payloadCms };

export const fullStackBoilerplates: Boilerplate[] = [nextEnterprise, t3Stack, payloadCms];
