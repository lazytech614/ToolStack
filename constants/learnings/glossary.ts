export type GlossaryTerm = {
  id: string;
  term: string;
  definition: string;
  category: "networking" | "javascript" | "devops" | "database" | "patterns";
  related?: string[];
};

export const glossaryTerms: GlossaryTerm[] = [
  // ─── Networking ─────────────────────────────────────────────────────────────
  {
    id: "rest",
    term: "REST",
    definition:
      "Representational State Transfer. An architectural style for designing networked applications using stateless HTTP requests. Resources are identified by URLs and manipulated using standard HTTP methods (GET, POST, PUT, DELETE).",
    category: "networking",
    related: ["GraphQL", "WebSocket", "CORS"],
  },
  {
    id: "graphql",
    term: "GraphQL",
    definition:
      "A query language for APIs and a runtime for executing those queries. Unlike REST, clients request exactly the data they need in a single request, reducing over-fetching and under-fetching.",
    category: "networking",
    related: ["REST", "WebSocket"],
  },
  {
    id: "websocket",
    term: "WebSocket",
    definition:
      "A protocol providing full-duplex communication channels over a single TCP connection. Unlike HTTP, the connection stays open, allowing the server to push data to the client at any time without a new request.",
    category: "networking",
    related: ["REST", "GraphQL"],
  },
  {
    id: "cors",
    term: "CORS",
    definition:
      "Cross-Origin Resource Sharing. A browser security mechanism that controls how web pages can request resources from a different domain than the one that served the page. Servers must include appropriate headers to allow cross-origin requests.",
    category: "networking",
    related: ["REST"],
  },
  {
    id: "cdn",
    term: "CDN",
    definition:
      "Content Delivery Network. A geographically distributed network of servers that delivers static assets (images, JS, CSS) from a location closest to the user, reducing latency and improving load times.",
    category: "networking",
    related: ["REST", "WebSocket"],
  },

  // ─── JavaScript ─────────────────────────────────────────────────────────────
  {
    id: "closure",
    term: "Closure",
    definition:
      "A function that retains access to its outer scope even after the outer function has returned. Closures are the foundation of patterns like memoization, currying, and data privacy in JavaScript.",
    category: "javascript",
    related: ["Hoisting", "Event Loop"],
  },
  {
    id: "hoisting",
    term: "Hoisting",
    definition:
      "JavaScript's behavior of moving variable and function declarations to the top of their containing scope during compilation. var declarations are hoisted and initialized as undefined; let and const are hoisted but not initialized (temporal dead zone).",
    category: "javascript",
    related: ["Closure"],
  },
  {
    id: "event-loop",
    term: "Event Loop",
    definition:
      "The mechanism that allows JavaScript to perform non-blocking operations despite being single-threaded. It continuously checks the call stack and moves tasks from the callback queue to the stack when the stack is empty.",
    category: "javascript",
    related: ["Promise", "Closure"],
  },
  {
    id: "promise",
    term: "Promise",
    definition:
      "An object representing the eventual completion or failure of an asynchronous operation. A Promise is in one of three states: pending, fulfilled, or rejected. Chained with .then(), .catch(), or consumed with async/await.",
    category: "javascript",
    related: ["Event Loop", "Closure"],
  },
  {
    id: "prototype",
    term: "Prototype",
    definition:
      "Every JavaScript object has an internal link to another object called its prototype. When a property is accessed and not found on the object itself, JavaScript walks up the prototype chain until it finds it or reaches null.",
    category: "javascript",
    related: ["Closure", "Hoisting"],
  },

  // ─── DevOps ─────────────────────────────────────────────────────────────────
  {
    id: "ci-cd",
    term: "CI/CD",
    definition:
      "Continuous Integration / Continuous Deployment. CI automatically builds and tests code on every push. CD automatically deploys passing builds to staging or production. Together they shorten feedback loops and reduce manual release risk.",
    category: "devops",
    related: ["Docker", "Monorepo"],
  },
  {
    id: "docker",
    term: "Docker",
    definition:
      "A platform for packaging applications and their dependencies into lightweight, portable containers. Containers run identically across environments, eliminating 'works on my machine' problems.",
    category: "devops",
    related: ["Kubernetes", "CI/CD"],
  },
  {
    id: "kubernetes",
    term: "Kubernetes",
    definition:
      "An open-source system for automating deployment, scaling, and management of containerized applications. It groups containers into pods and manages load balancing, self-healing, and rolling updates across a cluster.",
    category: "devops",
    related: ["Docker", "CI/CD"],
  },
  {
    id: "monorepo",
    term: "Monorepo",
    definition:
      "A single repository containing multiple projects or packages. Teams use monorepos to share code easily, enforce consistent tooling, and coordinate changes across packages with tools like Turborepo, Nx, or pnpm workspaces.",
    category: "devops",
    related: ["CI/CD"],
  },
  {
    id: "infrastructure-as-code",
    term: "Infrastructure as Code",
    definition:
      "Managing and provisioning infrastructure through machine-readable configuration files rather than manual processes. Tools like Terraform and Pulumi let you version-control your infrastructure the same way you version-control application code.",
    category: "devops",
    related: ["CI/CD", "Docker"],
  },

  // ─── Database ───────────────────────────────────────────────────────────────
  {
    id: "orm",
    term: "ORM",
    definition:
      "Object-Relational Mapper. A library that lets you query and manipulate a database using your programming language instead of raw SQL. Prisma, Drizzle, and TypeORM are popular choices in the JS/TS ecosystem.",
    category: "database",
    related: ["Migration", "Transaction"],
  },
  {
    id: "index",
    term: "Index",
    definition:
      "A database data structure that speeds up read queries by creating a separate lookup table for specific columns. Indexes improve SELECT performance but add overhead to INSERT, UPDATE, and DELETE operations.",
    category: "database",
    related: ["ORM", "Transaction"],
  },
  {
    id: "transaction",
    term: "Transaction",
    definition:
      "A sequence of database operations that are treated as a single unit. Transactions follow ACID properties — Atomicity, Consistency, Isolation, Durability — ensuring all operations succeed together or none of them do.",
    category: "database",
    related: ["ORM", "Migration"],
  },
  {
    id: "migration",
    term: "Migration",
    definition:
      "A versioned script that makes incremental, reversible changes to a database schema. Migrations let teams evolve the database alongside application code and roll back safely if something goes wrong.",
    category: "database",
    related: ["ORM", "Transaction"],
  },
  {
    id: "n-plus-one",
    term: "N+1 Problem",
    definition:
      "A performance issue where fetching a list of N records triggers N additional queries to load related data for each record. Solved by eager loading (JOIN or include) rather than lazy loading in a loop.",
    category: "database",
    related: ["ORM", "Index"],
  },

  // ─── Patterns ───────────────────────────────────────────────────────────────
  {
    id: "singleton",
    term: "Singleton",
    definition:
      "A design pattern that restricts a class to a single instance and provides a global access point to it. Commonly used for database connections, config managers, and loggers.",
    category: "patterns",
    related: ["Observer", "Middleware"],
  },
  {
    id: "observer",
    term: "Observer",
    definition:
      "A design pattern where an object (subject) maintains a list of dependents (observers) and notifies them automatically when its state changes. The foundation of event systems, reactive state libraries, and pub/sub architectures.",
    category: "patterns",
    related: ["Singleton", "Middleware"],
  },
  {
    id: "middleware",
    term: "Middleware",
    definition:
      "A function or layer that sits between a request and a response, transforming or acting on data as it passes through. Used in Express, Next.js, and Redux to handle auth, logging, error handling, and more.",
    category: "patterns",
    related: ["Observer", "Hydration"],
  },
  {
    id: "hydration",
    term: "Hydration",
    definition:
      "The process of attaching JavaScript event listeners and state to server-rendered HTML in the browser. After a server sends static HTML, the client-side framework 'hydrates' it to make it interactive.",
    category: "patterns",
    related: ["Middleware"],
  },
  {
    id: "memoization",
    term: "Memoization",
    definition:
      "An optimization technique that caches the result of a function call based on its inputs. If the same inputs are seen again, the cached result is returned instead of recomputing. Used in React with useMemo and useCallback.",
    category: "patterns",
    related: ["Closure", "Observer"],
  },
];

export const categories = [
  "all",
  "networking",
  "javascript",
  "devops",
  "database",
  "patterns",
] as const;

export type Category = (typeof categories)[number];

// All unique starting letters for the A–Z jump bar
export const alphabet = [
  ...new Set(
    glossaryTerms.map((t) => t.term[0].toUpperCase())
  ),
].sort();