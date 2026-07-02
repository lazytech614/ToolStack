import { Network } from "lucide-react";
import { Tool } from "../types";

export const ipLookup: Tool = {
  id: "ip-lookup",
  name: "IP Lookup",
  description: "Look up geolocation, ISP, and network info for any IPv4 or IPv6 address.",
  icon: Network,
  category: "Utilities",
  href: "/tools/ip-lookup",
  seo: {
    title: "IP Address Lookup – Geolocation & ISP Info ",
    description:
      "Look up geolocation, ISP, ASN, and network details for any IPv4 or IPv6 address. Instant results with no account required.",
    keywords: [
      "ip lookup",
      "ip address lookup",
      "ip geolocation",
      "find ip location",
      "isp lookup",
    ],
  },
};
