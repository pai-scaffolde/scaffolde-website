export type Status = "evidenced" | "partial" | "planned" | "do-not-claim-yet";

export type SiteLink = {
  label: string;
  href: string;
  kind?: "page" | "markdown" | "agent" | "external" | "contact";
};

export type OperatingStep = {
  id: string;
  name: string;
  shortName: string;
  description: string;
  proofQuestion: string;
};

export type StackLayer = {
  id: string;
  name: string;
  summary: string;
  examples: string[];
  status: Status;
};

export type ProofClaim = {
  id: string;
  claim: string;
  status: Status;
  evidence: { label: string; href?: string; note?: string }[];
};

export type ManualSection = {
  id: string;
  title: string;
  summary: string;
  body: string[];
};

export type AgentSurface = {
  label: string;
  href: string;
  format: "html" | "markdown" | "txt" | "json" | "xml";
  purpose: string;
};

export const siteContent = {
  name: "Scaffolde",
  canonicalUrl: "https://scaffolde.ai",
  contactEmail: "hello@scaffolde.ai",
  tagline: "AI infrastructure for agents that actually do work.",
  definition:
    "Scaffolde is a personal AI capability factory: a way to create, wire, test, deploy, observe, and reuse AI agents, skills, memory, workflows, surfaces, and verification loops.",
  shortDescription:
    "Scaffolde helps teams turn recurring knowledge work into delegated, verified AI-agent workflows with memory, proof, and improvement loops.",
  nav: [
    { label: "Manual", href: "/manual", kind: "page" },
    { label: "Stack", href: "/stack", kind: "page" },
    { label: "Proof", href: "/proof", kind: "page" },
    { label: "Agents", href: "/agents", kind: "page" },
    { label: "llms.txt", href: "/llms.txt", kind: "agent" },
  ] satisfies SiteLink[],
  operatingLoop: [
    {
      id: "define",
      name: "Define",
      shortName: "01",
      description:
        "Convert intent into an ideal-state artifact and explicit acceptance criteria before work starts.",
      proofQuestion: "What would done look like if we could verify it?",
    },
    {
      id: "dispatch",
      name: "Dispatch",
      shortName: "02",
      description:
        "Route work to the right agent, skill, model, workflow, or tool surface instead of forcing one chat to do everything.",
      proofQuestion: "Who or what is the right worker for this lane?",
    },
    {
      id: "coordinate",
      name: "Coordinate",
      shortName: "03",
      description:
        "Keep ownership, context, evidence, and handoffs explicit across parallel workstreams.",
      proofQuestion: "Where are the decisions, artifacts, and blockers recorded?",
    },
    {
      id: "verify",
      name: "Verify",
      shortName: "04",
      description:
        "Check outputs against acceptance criteria with commands, browser evidence, tests, traces, or reviewer gates.",
      proofQuestion: "What proves the claimed behavior works?",
    },
    {
      id: "learn",
      name: "Learn",
      shortName: "05",
      description:
        "Turn friction, failures, and discoveries into backlog, memory, skills, or better operating rules.",
      proofQuestion: "What should the system do better next time?",
    },
  ] satisfies OperatingStep[],
  stackLayers: [
    {
      id: "algorithm",
      name: "Algorithm spine",
      summary:
        "PAI turns vague goals into current state, ideal state, acceptance criteria, phase artifacts, and verification loops.",
      examples: ["ISA / ISC", "Observe → Think → Plan → Build → Execute → Verify → Learn", "Orchestrator-first delegation"],
      status: "evidenced",
    },
    {
      id: "agents",
      name: "Agents",
      summary:
        "Specialist workers handle coding, research, design, QA, security, review, operations, and synthesis lanes.",
      examples: ["Hermes", "Codex", "Claude Code", "Designer", "Engineer", "Researcher", "QA"],
      status: "partial",
    },
    {
      id: "memory",
      name: "Memory",
      summary:
        "Human-visible and machine-queryable knowledge surfaces keep context from resetting every session.",
      examples: ["GBrain", "SecondBrain", "LLM Wiki", "session recall", "learning promotion"],
      status: "partial",
    },
    {
      id: "skills",
      name: "Skills and workflows",
      summary:
        "Reusable skills package procedures, tools, verification rules, and learned patterns agents can invoke.",
      examples: ["gstack", "Fabric", "GitHub workflows", "debugging", "TDD", "design review"],
      status: "evidenced",
    },
    {
      id: "surfaces",
      name: "Surfaces",
      summary:
        "Capabilities project into the places work happens: CLI, repos, browser, chat, docs, control planes, and agent runtimes.",
      examples: ["Hermes", "Claude", "Codex", "Paperclip", "GBrain", "browser", "GitHub"],
      status: "partial",
    },
    {
      id: "proof",
      name: "Proof and improvement",
      summary:
        "Claims need evidence. Failures become backlog, skills, tests, or memory instead of repeated folklore.",
      examples: ["lint/build", "browser QA", "doctor checks", "canary", "review lanes", "backlog capture"],
      status: "evidenced",
    },
  ] satisfies StackLayer[],
  manual: [
    {
      id: "what-it-is",
      title: "What Scaffolde is",
      summary: "A capability factory for serious agent work.",
      body: [
        "Scaffolde packages the operating model around useful AI agents: memory, skills, workflows, surfaces, verification, and improvement loops.",
        "The goal is not a prettier chatbot. The goal is a system where work can be delegated, inspected, verified, remembered, and improved.",
      ],
    },
    {
      id: "what-it-is-not",
      title: "What Scaffolde is not",
      summary: "Not a vague AI platform and not an autonomy fantasy.",
      body: [
        "Scaffolde should not claim magic autonomy. Side effects, readiness, credentials, and human approval boundaries matter.",
        "Runtime names, manifests, buttons, and docs are not proof. The runtime path has to execute and surface errors visibly.",
      ],
    },
    {
      id: "memory-model",
      title: "Memory model",
      summary: "Memory is an operating layer, not a marketing bullet.",
      body: [
        "GBrain, SecondBrain, LLM Wiki, and session recall help agents retrieve durable context and source material.",
        "Scaffolde treats retrieval as an accelerator, not automatic authority. Stable claims still need canonical sources and current verification.",
      ],
    },
    {
      id: "verification-model",
      title: "Verification model",
      summary: "No fake green.",
      body: [
        "A task is not done because a page renders or logs look clean. Done means the requested behavior works under realistic use with evidence.",
        "For this website, that means lint, build, machine-readable endpoints, browser smoke, metadata, and honest claim status.",
      ],
    },
  ] satisfies ManualSection[],
  proofClaims: [
    {
      id: "agent-readable-site",
      claim: "This site is designed for humans and agents, not just visual marketing.",
      status: "evidenced",
      evidence: [
        { label: "/llms.txt", href: "/llms.txt" },
        { label: "/.well-known/agent.json", href: "/.well-known/agent.json" },
        { label: "Markdown mirrors", href: "/site.md" },
      ],
    },
    {
      id: "operating-loop",
      claim: "Scaffolde uses a repeatable loop: define, dispatch, coordinate, verify, learn.",
      status: "evidenced",
      evidence: [
        { label: "Visible operating loop", href: "/manual" },
        { label: "Website ISA", note: ".scaffolde/tasks/task-new-scaffolde-website/ISA.md" },
      ],
    },
    {
      id: "dogfood-build",
      claim: "The new website is being built through Scaffolde-style orchestration and verification.",
      status: "evidenced",
      evidence: [
        { label: "Delegated remediation lanes", note: "gstack, Claude doctor, GBrain doctor, source map, implementation plan" },
        { label: "Task plan", note: ".scaffolde/tasks/task-new-scaffolde-website/PLAN.md" },
      ],
    },
    {
      id: "paperclip-control-plane",
      claim: "Paperclip is part of the Scaffolde control-plane story.",
      status: "partial",
      evidence: [
        { label: "Scaffolde manifests identify Paperclip integration", note: "Public site should not overclaim live bidirectional runtime until verified." },
      ],
    },
    {
      id: "mcp-public-api",
      claim: "Scaffolde exposes a public MCP/API action layer from this website.",
      status: "do-not-claim-yet",
      evidence: [
        { label: "Backlog", note: "Document as planned only after a reachable endpoint and schemas exist." },
      ],
    },
  ] satisfies ProofClaim[],
  agentSurfaces: [
    { label: "llms.txt", href: "/llms.txt", format: "txt", purpose: "Concise routing file for LLMs and agents." },
    { label: "llms-full.txt", href: "/llms-full.txt", format: "txt", purpose: "Single-fetch expanded context for agents." },
    { label: "Agent manifest", href: "/.well-known/agent.json", format: "json", purpose: "Machine-readable site identity, entrypoints, and statuses." },
    { label: "Homepage markdown", href: "/index.md", format: "markdown", purpose: "Markdown mirror of the main landing page." },
    { label: "Manual markdown", href: "/manual.md", format: "markdown", purpose: "Markdown mirror of the operating manual." },
    { label: "Proof markdown", href: "/proof.md", format: "markdown", purpose: "Markdown mirror of the proof ledger." },
    { label: "Stack markdown", href: "/stack.md", format: "markdown", purpose: "Markdown mirror of the stack map." },
    { label: "Complete site markdown", href: "/site.md", format: "markdown", purpose: "Single-file first-slice site context." },
    { label: "Sitemap", href: "/sitemap.xml", format: "xml", purpose: "Canonical public route discovery." },
  ] satisfies AgentSurface[],
} as const;

export const statusLabels: Record<Status, string> = {
  evidenced: "Evidenced",
  partial: "Partial",
  planned: "Planned",
  "do-not-claim-yet": "Do not claim yet",
};
