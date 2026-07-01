import { GlossaryTerm } from "../types";

export const websocketTerm: GlossaryTerm = {
  id: "websocket",
  term: "WebSocket",
  definition:
    "A communication protocol that provides a persistent, full-duplex connection between client and server over a single TCP connection, allowing real-time bidirectional data exchange without repeated HTTP requests.",
  category: "networking",
  related: ["rest", "graphql"],
};
