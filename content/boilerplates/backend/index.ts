import { expressPrisma } from "./express-prisma";
import { nestjs } from "./nestjs";
import type { Boilerplate } from "../types";

export { expressPrisma, nestjs };

export const backendBoilerplates: Boilerplate[] = [expressPrisma, nestjs];
