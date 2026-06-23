import type { ReactNode } from "react";

/**
 * "What Scaffolde covers — one plane, every surface" grid.
 * Ported from the verification homepage bundle. Icons reuse the same
 * stroke idiom as src/app/product/page.tsx FEATURES so the visual
 * language stays consistent across the site.
 */
export type CoverageItem = {
  title: string;
  body: string;
  icon: ReactNode;
};

export const COVERAGE: CoverageItem[] = [
  {
    title: "Agents",
    body: "Which agents run where, what they're allowed to do, their pass rate, and what they're evaluating across the business.",
    icon: (
      <>
        <rect x="3" y="11" width="18" height="10" rx="2" />
        <circle cx="12" cy="5" r="2" />
        <path d="M12 7v4" />
        <line x1="8" y1="16" x2="8" y2="16" />
        <line x1="16" y1="16" x2="16" y2="16" />
      </>
    ),
  },
  {
    title: "Skills",
    body: "Which skills were invoked, how often, their verified outcomes, and any drift from expected behavior.",
    icon: (
      <polygon points="12 2 15 9 22 9 16.5 13.5 18.5 21 12 16.5 5.5 21 7.5 13.5 2 9 9 9 12 2" />
    ),
  },
  {
    title: "Workflows",
    body: "Multi-step pipelines with full run history and step-by-step verification — every stage evidenced.",
    icon: (
      <>
        <path d="M4 6h16M4 12h16M4 18h10" />
        <circle cx="19" cy="18" r="2" />
      </>
    ),
  },
  {
    title: "Sessions",
    body: "Every AI session as the unit of work — each one inspectable and linked to its own attestation.",
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    ),
  },
  {
    title: "Tokens & spend",
    body: "Tokens and cost by model, agent, project, and time — usage and spend, verified and reportable.",
    icon: (
      <>
        <path d="M3 17l6-6 4 4 7-7" />
        <path d="M14 8h6v6" />
      </>
    ),
  },
  {
    title: "Full model support",
    body: "Every model you run — paid by subscription or API, or fully open-source. Claude, GPT, Gemini, Grok, and open models, each with per-model pass rate and cost.",
    icon: (
      <>
        <rect x="3" y="3" width="7" height="7" rx="1.5" />
        <rect x="14" y="3" width="7" height="7" rx="1.5" />
        <rect x="3" y="14" width="7" height="7" rx="1.5" />
        <rect x="14" y="14" width="7" height="7" rx="1.5" />
      </>
    ),
  },
  {
    title: "Learnings",
    body: "What the system learned and promoted through its self-improvement loop — with full provenance.",
    icon: (
      <>
        <path d="M12 3a9 9 0 0 0-9 9 9 9 0 0 0 9 9c1 0 2-.4 2-1.5S13 19 13 18s.7-1.5 1.7-1.5H17a4 4 0 0 0 4-4c0-5-4-9.5-9-9.5Z" />
        <circle cx="7.5" cy="11.5" r="1" />
        <circle cx="12" cy="8" r="1" />
        <circle cx="16" cy="11" r="1" />
      </>
    ),
  },
  {
    title: "Memories",
    body: "What memories are stored, where they came from, and which runs referenced them.",
    icon: (
      <>
        <path d="M4 5a2 2 0 0 1 2-2h9l5 5v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z" />
        <path d="M14 3v5h5" />
        <path d="M8 13h8M8 17h5" />
      </>
    ),
  },
  {
    title: "Attestations",
    body: "The tamper-evident proof records themselves — signed, sealed, and ready to put in front of an auditor.",
    icon: (
      <>
        <path d="M12 2 4 6v6c0 5 3.5 8 8 10 4.5-2 8-5 8-10V6Z" />
        <path d="m9 12 2 2 4-4" />
      </>
    ),
  },
];
