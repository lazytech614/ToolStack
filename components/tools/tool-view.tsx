import { Base64UrlTool } from "./dev-tools/base64-url"
import { BinaryConverter } from "./dev-tools/binary-converter"
import { ColorConverter } from "./dev-tools/color-converter"
import { CommitGenerator } from "./dev-tools/commit-generator"
import { DiffCheckerTool } from "./dev-tools/diff-checker"
import { HashGenerator } from "./dev-tools/hash-generator"
import { ImageConverter } from "./dev-tools/image-converter"
import { JsonFormatterValidator } from "./dev-tools/json-formatter-validator"
import { JsonToSchema } from "./dev-tools/json-to-schema"
import { JwtDebuggerTool } from "./dev-tools/jwt-debugger"
import { LoremIpsum } from "./dev-tools/loremipsum"
import { MarkdownPreview } from "./dev-tools/markdown-preview"
import { MarkdownTable } from "./dev-tools/markdown-table"
import { NumberBaseConverter } from "./dev-tools/number-base-converter"
import { PlaceholderTool } from "./dev-tools/placeholder-tool"
import { RegexTesterTool } from "./dev-tools/regex-tester"
import { SqlFormatter } from "./dev-tools/sql-formatter"
import { UnixTimestampConverter } from "./dev-tools/timestamp-converter"
import { UuidGenerator } from "./dev-tools/uuid-generator"

interface ToolViewProps {
  toolId: string
}

export function ToolView({ toolId }: ToolViewProps) {
  switch (toolId) {
    case "diff-checker":
      return <DiffCheckerTool />
    case "base64-url":
      return <Base64UrlTool />
    case "json-formatter-validator":
      return <JsonFormatterValidator />
    case "commit-generator":
      return <CommitGenerator />
    case "jwt-debugger":
      return <JwtDebuggerTool />
    case "regex-tester":
      return <RegexTesterTool />
    case "markdown-preview":
      return <MarkdownPreview />
    case "hash-generator":
      return <HashGenerator />
    case "uuid-generator":
      return <UuidGenerator />
    case "binary-converter":
      return <BinaryConverter />
    case "sql-formatter":
      return <SqlFormatter />
    case "markdown-table":
      return <MarkdownTable />
    case "lorem-ipsum":
      return <LoremIpsum />
    case "json-to-schema":
      return <JsonToSchema />
    case "color-converter":
      return <ColorConverter />
    case "unix-timestamp":
      return <UnixTimestampConverter />
    case "number-base-converter":
      return <NumberBaseConverter />
    case "image-converter":
      return <ImageConverter />
    // Add new tools here as you build them out
    default:
      return <PlaceholderTool toolId={toolId} />
  }
}