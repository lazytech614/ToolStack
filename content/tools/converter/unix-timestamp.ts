import { Clock } from "lucide-react";
import { Tool } from "../types";

export const unixTimestamp: Tool = {
  id: "unix-timestamp",
  name: "Unix Timestamp",
  description: "Convert Unix timestamps to human-readable dates and back, with timezone support.",
  icon: Clock,
  category: "Converter",
  href: "/tools/unix-timestamp",
  seo: {
    title: "Unix Timestamp Converter – Epoch to Date ",
    description:
      "Convert Unix epoch timestamps to human-readable dates and vice versa. Supports all major timezones and millisecond precision.",
    keywords: [
      "unix timestamp converter",
      "epoch converter",
      "timestamp to date",
      "unix epoch",
      "date time converter",
    ],
  },
};
