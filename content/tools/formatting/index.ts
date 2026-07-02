import { Tool } from "../types";
import { jsonFormatterValidator } from "./json-formatter-validator";
import { sqlFormatter } from "./sql-formatter";

export const formattingTools: Tool[] = [jsonFormatterValidator, sqlFormatter];
