import { Snippet } from "../types";

export const eventEmitterSnippet: Snippet = {
  id: "ts-event-emitter",
  title: "EventEmitter",
  description: "A minimal, type-safe event emitter for subscribing to and emitting custom events.",
  language: "typescript",
  tags: ["patterns", "utils"],
  difficulty: "Advanced",
  category: "Utilities",

  code: `type Listener<T> = (payload: T) => void;

class EventEmitter<Events extends Record<string, unknown>> {
  private listeners: {
    [K in keyof Events]?: Listener<Events[K]>[];
  } = {};

  on<K extends keyof Events>(event: K, listener: Listener<Events[K]>): void {
    (this.listeners[event] ??= []).push(listener);
  }

  off<K extends keyof Events>(event: K, listener: Listener<Events[K]>): void {
    this.listeners[event] = this.listeners[event]?.filter((l) => l !== listener);
  }

  emit<K extends keyof Events>(event: K, payload: Events[K]): void {
    this.listeners[event]?.forEach((l) => l(payload));
  }
}

// Usage
type AppEvents = { login: { userId: string }; logout: void };
const emitter = new EventEmitter<AppEvents>();
emitter.on("login", ({ userId }) => console.log(userId));
emitter.emit("login", { userId: "123" });`,
};
