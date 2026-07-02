import type { Template } from "../types";

import { saas } from "./saas";
import { ecommerce } from "./ecommerce";
import { dashboard } from "./dashboard";
import { blog } from "./blog";

export { saas, ecommerce, dashboard, blog };

export const nextjsTemplates: Template[] = [saas, ecommerce, dashboard, blog];
