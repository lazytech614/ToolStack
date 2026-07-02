import { Tool } from "../types";
import { base64Url } from "./base64-url";
import { binaryConverter } from "./binary-converter";

export const encodingTools: Tool[] = [base64Url, binaryConverter];
