"use client";

import { useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";
import "./dashboard.css";

/**
 * Faithful port of design/demo/index.html — the Scaffolde AI Verification
 * Plane dashboard. The original is a self-contained vanilla-JS SPA that
 * builds HTML strings and wires DOM events. To preserve 100% of its
 * behavior (charts, live timers, session drawer, deep-links) we keep that
 * exact logic and run it against this component's scoped root in an effect,
 * rather than risk-rewriting it into React state. Mock data stays inline.
 *
 * Deep-links: ?view= and ?session= are read from the URL via useSearchParams
 * and fed into the original boot routine.
 */
export default function DashboardApp() {
  const rootRef = useRef<HTMLDivElement>(null);
  const searchParams = useSearchParams();
  const initialView = searchParams.get("view");
  const initialSession = searchParams.get("session");

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    // scoped helpers — replace document.getElementById within the app shell
    const byId = (id: string): HTMLElement | null =>
      root.querySelector<HTMLElement>("#" + id);
    const qsa = (sel: string): NodeListOf<HTMLElement> =>
      root.querySelectorAll<HTMLElement>(sel);

    /* ============================================================ LOGO */
    const LOGO_SVG = `
<svg width="200" height="45" viewBox="0 0 248 56" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Scaffolde — AI-verification">
  <defs>
    <linearGradient id="layTop" x1="14" y1="10" x2="42" y2="26" gradientUnits="userSpaceOnUse"><stop stop-color="#60A5FA"/><stop offset="1" stop-color="#3B82F6"/></linearGradient>
    <linearGradient id="layMid" x1="14" y1="20" x2="42" y2="36" gradientUnits="userSpaceOnUse"><stop stop-color="#3B82F6"/><stop offset="1" stop-color="#2563EB"/></linearGradient>
    <linearGradient id="layBot" x1="14" y1="30" x2="42" y2="46" gradientUnits="userSpaceOnUse"><stop stop-color="#2563EB"/><stop offset="1" stop-color="#1D4ED8"/></linearGradient>
  </defs>
  <g stroke-linejoin="round" stroke-linecap="round">
    <path d="M28 38 L42 45 L28 52 L14 45 Z" fill="url(#layBot)"/>
    <path d="M28 29 L42 36 L28 43 L14 36 Z" fill="url(#layMid)"/>
    <path d="M28 11 L42 18 L28 25 L14 18 Z" fill="url(#layTop)"/>
    <path d="M23.2 18.2 L26.6 21.2 L33 15.6" stroke="#FFFFFF" stroke-width="2.4" fill="none"/>
  </g>
  <text x="62" y="29" font-family="'Geist',-apple-system,Segoe UI,sans-serif" font-size="25" font-weight="800" letter-spacing="-0.5" fill="#0F172A">Scaffolde</text>
  <text x="63" y="45" font-family="'Geist Mono',ui-monospace,monospace" font-size="10.5" font-weight="600" letter-spacing="2.4" fill="#2563EB">AI-VERIFICATION</text>
</svg>`;

    /* ============================================================ ICONS */
    const ICON: Record<string, string> = {
      overview: '<path d="M3 13h8V3H3v10Zm0 8h8v-6H3v6Zm10 0h8V11h-8v10Zm0-18v6h8V3h-8Z"/>',
      live: '<path d="M2 12h4l2-7 4 14 2-7h4"/><path d="M18 12h4"/>',
      agents:
        '<path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2M20 14h2M15 13v2M9 13v2"/>',
      skills:
        '<path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3Z"/>',
      workflows:
        '<circle cx="5" cy="6" r="2.5"/><circle cx="19" cy="6" r="2.5"/><circle cx="12" cy="18" r="2.5"/><path d="M7.5 6H17M5 8.5V12a2 2 0 0 0 2 2h3M19 8.5V12a2 2 0 0 1-2 2h-3"/>',
      sessions:
        '<rect width="18" height="14" x="3" y="4" rx="2"/><path d="M7 20h10M9 16v4M15 16v4M7 9l2 2-2 2M12 13h4"/>',
      projects:
        '<path d="M4 20h16a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1h-7.6a1 1 0 0 1-.8-.4L9.8 4.4a1 1 0 0 0-.8-.4H4a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1Z"/>',
      models:
        '<path d="M12 2a3 3 0 0 0-3 3 3 3 0 0 0-3 5 3 3 0 0 0 0 4 3 3 0 0 0 3 5 3 3 0 0 0 6 0 3 3 0 0 0 3-5 3 3 0 0 0 0-4 3 3 0 0 0-3-5 3 3 0 0 0-3-3Z"/><path d="M12 5v14M9 10h6M9 14h6"/>',
      learnings:
        '<path d="M12 14 2 9l10-5 10 5-10 5Z"/><path d="M6 11v5c0 1.5 3 3 6 3s6-1.5 6-3v-5"/>',
      memories:
        '<path d="M12 2a7 7 0 0 0-7 7c0 2.4 1.2 4 2.5 5.3.8.8 1.5 1.6 1.5 2.7v1a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-1c0-1.1.7-1.9 1.5-2.7C17.8 13 19 11.4 19 9a7 7 0 0 0-7-7Z"/><path d="M9 19h6"/>',
      attest:
        '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="m9 15 2 2 4-4"/>',
      evidence:
        '<path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/>',
      reports: '<path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/>',
      settings:
        '<path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2Z"/><circle cx="12" cy="12" r="3"/>',
      calendar:
        '<rect width="18" height="18" x="3" y="4" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',
      download:
        '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="M7 10l5 5 5-5"/><path d="M12 15V3"/>',
      doc: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/>',
      shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/>',
      spend:
        '<path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>',
      bolt: '<path d="M13 2 3 14h7l-1 8 10-12h-7l1-8Z"/>',
      arrowUp: '<path d="m5 12 7-7 7 7"/><path d="M12 19V5"/>',
      arrowDown: '<path d="m19 12-7 7-7-7"/><path d="M12 5v14"/>',
      chev: '<path d="m6 9 6 6 6-6"/>',
      check: '<path d="m9 12 2 2 4-4"/><circle cx="12" cy="12" r="10"/>',
      clock: '<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
      refresh:
        '<path d="M3 12a9 9 0 0 1 15-6.7L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-15 6.7L3 16"/><path d="M3 21v-5h5"/>',
      sparkles:
        '<path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3Z"/>',
      wrench:
        '<path d="M14.7 6.3a4 4 0 0 0-5.4 5.2l-6 6a1.5 1.5 0 0 0 2.1 2.1l6-6a4 4 0 0 0 5.2-5.4l-2.5 2.5-2.1-2.1Z"/>',
      brain:
        '<path d="M12 2a7 7 0 0 0-7 7c0 2.4 1.2 4 2.5 5.3.8.8 1.5 1.6 1.5 2.7v1a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-1c0-1.1.7-1.9 1.5-2.7C17.8 13 19 11.4 19 9a7 7 0 0 0-7-7Z"/><path d="M9 19h6"/>',
      kebab:
        '<circle cx="12" cy="5" r="1.6"/><circle cx="12" cy="12" r="1.6"/><circle cx="12" cy="19" r="1.6"/>',
      close: '<path d="M18 6 6 18M6 6l12 12"/>',
      external:
        '<path d="M15 3h6v6M10 14 21 3M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>',
    };
    const svg = (path: string, cls = "") =>
      `<svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">${path}</svg>`;

    /* ============================================================ NAV MODEL */
    type NavEntry = {
      section?: string;
      id?: string;
      label?: string;
      icon?: string;
      pulse?: boolean;
      count?: string;
    };
    const NAV: NavEntry[] = [
      { section: "Verification" },
      { id: "overview", label: "Overview", icon: ICON.overview },
      { id: "live", label: "Live Observability", icon: ICON.live, pulse: true },
      { id: "sessions", label: "Sessions", icon: ICON.sessions, count: "12.9K" },
      { id: "agents", label: "Agents", icon: ICON.agents, count: "37" },
      { id: "skills", label: "Skills", icon: ICON.skills, count: "116" },
      { id: "workflows", label: "Workflows", icon: ICON.workflows, count: "24" },
      { id: "projects", label: "Projects", icon: ICON.projects, count: "18" },
      { id: "models", label: "Models", icon: ICON.models, count: "4" },
      { section: "Knowledge" },
      { id: "learnings", label: "Learnings", icon: ICON.learnings, count: "342" },
      { id: "memories", label: "Memories", icon: ICON.memories, count: "1.1K" },
      { section: "Compliance" },
      { id: "evidence", label: "Evidence", icon: ICON.evidence },
      { id: "reports", label: "Reports", icon: ICON.reports },
      { id: "attestations", label: "Attestations", icon: ICON.attest },
      { id: "settings", label: "Settings", icon: ICON.settings },
    ];

    /* ============================================================ MOCK DATA */
    const MODELS = [
      { id: "claude-opus-4-8", share: 38, pass: 99.1, color: "var(--m-opus)" },
      { id: "claude-sonnet-4-6", share: 34, pass: 98.7, color: "var(--m-sonnet)" },
      { id: "gpt-5.5", share: 18, pass: 97.9, color: "var(--m-gpt)" },
      { id: "gemini-3.5-flash", share: 10, pass: 98.2, color: "var(--m-gemini)" },
    ];
    const MODEL_COLOR: Record<string, string> = {
      "claude-opus-4-8": "var(--m-opus)",
      "claude-sonnet-4-6": "var(--m-sonnet)",
      "gpt-5.5": "var(--m-gpt)",
      "gemini-3.5-flash": "var(--m-gemini)",
    };

    type Agent = {
      name: string;
      job: string;
      runs: number;
      tokens: string;
      pass: number;
      last: string;
      status: string;
      color: string;
      init: string;
    };
    const AGENTS: Agent[] = [
      { name: "Engineer", job: "Implements features, runs TDD", runs: 4821, tokens: "382M", pass: 99.2, last: "2m ago", status: "ok", color: "#2563EB", init: "En" },
      { name: "Researcher", job: "Multi-source evidence synthesis", runs: 3120, tokens: "511M", pass: 98.4, last: "6m ago", status: "ok", color: "#7C3AED", init: "Re" },
      { name: "Designer", job: "UI/UX design + visual review", runs: 1184, tokens: "92M", pass: 99.0, last: "14m ago", status: "ok", color: "#DB2777", init: "De" },
      { name: "QATester", job: "Browser QA + flow verification", runs: 2645, tokens: "148M", pass: 97.6, last: "1m ago", status: "ok", color: "#16A34A", init: "QA" },
      { name: "Architect", job: "System design + trade-off analysis", runs: 734, tokens: "205M", pass: 98.9, last: "22m ago", status: "ok", color: "#0891B2", init: "Ar" },
      { name: "Debugger", job: "Root-cause + regression isolation", runs: 1502, tokens: "176M", pass: 96.8, last: "4m ago", status: "pending", color: "#EA580C", init: "Db" },
      { name: "SecurityRev", job: "OWASP + secret-scan review", runs: 611, tokens: "88M", pass: 99.4, last: "38m ago", status: "ok", color: "#475569", init: "Se" },
    ];

    type Point = { v: number; date: Date; label: string };
    const SERIES: Point[] = (() => {
      const base = [612, 648, 631, 706, 689, 742, 725, 718, 791, 766, 815, 798, 864, 838, 921, 893, 876, 949, 924, 1001, 986, 958, 1042, 1027, 999, 1093, 1058, 1124, 1099, 1191, 1248];
      const start = new Date(2025, 4, 13);
      return base.map((v, i) => {
        const d = new Date(start);
        d.setDate(start.getDate() + i);
        return { v, date: d, label: d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }) };
      });
    })();

    type Session = {
      id: string;
      agent: string;
      project: string;
      model: string;
      tokens: string;
      dur: string;
      started: string;
      status: string;
      att: string;
      subject: string;
      summary: string;
      skills: string[];
      learnings: string[];
      improvements: string[];
      memories: string[];
    };
    const SESSIONS: Session[] = [
      { id: "SCA-4821", agent: "Engineer", project: "Billing Service", model: "claude-opus-4-8", tokens: "48.2K", dur: "4m 12s", started: "Jun 12, 14:32", status: "ok", att: "ATT-2025-06-12-1248", subject: "Refactor billing webhook handler", summary: "Extracted the Stripe webhook handler into an idempotent service and added retry-safe signature verification.", skills: ["FirstPrinciples", "react-patterns", "code-review"], learnings: ["Stripe retries fire within 3s — handlers must be idempotent on event id", "Signature check must run before body parse to avoid replay"], improvements: ["Added idempotency key keyed on event id", "Moved signature verification ahead of JSON parse"], memories: ["Billing webhooks are at-least-once; never assume single delivery"] },
      { id: "SCA-3120", agent: "Researcher", project: "Market Intel", model: "gpt-5.5", tokens: "112K", dur: "9m 03s", started: "Jun 12, 11:08", status: "ok", att: "ATT-2025-06-12-1247", subject: "Q3 competitor analysis", summary: "Synthesized 14 sources on the AI-verification market and ranked three emerging competitors by wedge.", skills: ["Research", "deep-research"], learnings: ["Two competitors pivoted from compliance to observability in Q2", "Pricing clusters at seat + usage hybrid"], improvements: [], memories: ["Competitor C raised a $12M Series A 2025-05; observability positioning"] },
      { id: "SCA-2645", agent: "QATester", project: "Checkout Flow", model: "claude-sonnet-4-6", tokens: "22.7K", dur: "2m 41s", started: "Jun 12, 09:51", status: "ok", att: "ATT-2025-06-12-1246", subject: "Verify guest checkout regression fix", summary: "Drove the guest checkout flow end-to-end and confirmed the address-validation regression is resolved.", skills: ["Browser", "qa"], learnings: ["Guest path skipped the postal-code validator when country was pre-filled"], improvements: ["Confirmed validator now fires on country auto-fill"], memories: [] },
      { id: "SCA-1184", agent: "Designer", project: "Marketing Site", model: "claude-sonnet-4-6", tokens: "31.5K", dur: "6m 18s", started: "Jun 11, 22:14", status: "ok", att: "ATT-2025-06-11-1245", subject: "Generate investor deck visuals", summary: "Produced four charcoal-sketch hero visuals for the investor deck via the Codex image lane.", skills: ["design-consultation", "Art"], learnings: ["ChatGPT OAuth can image-gen via codex exec, not the platform API"], improvements: ["Standardized deck visuals on the cobalt + charcoal palette"], memories: ["design binary uses Codex subscription image lane (no API key)"] },
      { id: "SCA-1502", agent: "Debugger", project: "Ingest Pipeline", model: "claude-opus-4-8", tokens: "58.9K", dur: "11m 52s", started: "Jun 11, 18:47", status: "pending", att: "—", subject: "Trace intermittent ingest stalls", summary: "Isolating a non-deterministic stall in the ingest worker — verification still in progress.", skills: ["investigate", "RootCauseAnalysis"], learnings: [], improvements: [], memories: [] },
      { id: "SCA-0734", agent: "Architect", project: "Platform Core", model: "gemini-3.5-flash", tokens: "19.4K", dur: "3m 27s", started: "Jun 11, 15:33", status: "ok", att: "ATT-2025-06-11-1244", subject: "Evaluate event-bus vs direct calls", summary: "Compared an event bus against direct service calls for the core write path and recommended a phased bus.", skills: ["FirstPrinciples", "ApertureOscillation"], learnings: ["Direct calls coupled 6 services on the write path", "Bus adds 1 hop but removes the fan-out coupling"], improvements: [], memories: [] },
      { id: "SCA-4242", agent: "Engineer", project: "Auth Rewrite", model: "claude-opus-4-8", tokens: "41.0K", dur: "5m 09s", started: "Jun 11, 13:02", status: "ok", att: "ATT-2025-06-11-1243", subject: "Fix auth-token regression", summary: "Found and fixed a silent token-refresh failure that logged users out mid-session.", skills: ["investigate", "code-review", "react-patterns"], learnings: ["Refresh failed silently on a 401 from the rotate endpoint", "BSD sed lacks \\b word boundaries — broke the codemod"], improvements: ["Fixed silent exit-0 on auth failure", "Added PATH fallback to browse detection"], memories: ["Token rotate endpoint returns 401 (not 419) on stale refresh"] },
      { id: "SCA-0611", agent: "SecurityRev", project: "Auth Rewrite", model: "claude-sonnet-4-6", tokens: "15.8K", dur: "2m 02s", started: "Jun 10, 19:18", status: "ok", att: "ATT-2025-06-10-1242", subject: "Secret-scan the auth rewrite diff", summary: "Ran an OWASP + secret-scan pass over the auth rewrite; no leaked credentials, one hardening note.", skills: ["security-review", "RedTeam"], learnings: ["Refresh tokens were logged at debug level in one branch"], improvements: ["Redacted refresh tokens from debug logs"], memories: [] },
    ];
    const AGENT_COLOR: Record<string, string> = { Engineer: "#2563EB", Researcher: "#7C3AED", Designer: "#DB2777", QATester: "#16A34A", Architect: "#0891B2", Debugger: "#EA580C", SecurityRev: "#475569" };
    const agInit = (n: string) => (n === "SecurityRev" ? "Se" : n === "QATester" ? "QA" : n.slice(0, 2));

    /* ============================================================ RENDER NAV */
    let activeView = "overview";
    function renderNav() {
      const brand = byId("brand");
      if (brand) brand.innerHTML = LOGO_SVG;
      const navEl = byId("nav");
      if (navEl) {
        navEl.innerHTML = NAV.map((n) => {
          if (n.section) return `<div class="nav-section">${n.section}</div>`;
          const cnt = n.pulse
            ? `<span class="nav-pulse" aria-label="live"></span>`
            : n.count
            ? `<span class="nav-count">${n.count}</span>`
            : "";
          return `<button class="nav-item ${n.id === activeView ? "active" : ""}" data-view="${n.id}">${svg(n.icon || "")}<span>${n.label}</span>${cnt}</button>`;
        }).join("");
      }
      qsa(".nav-item").forEach((b) =>
        b.addEventListener("click", () => setView((b as HTMLElement).dataset.view as string))
      );
    }

    /* ============================================================ SHARED BUILDERS */
    function kpiCard(icon: string, label: string, value: string, delta: string, note: string, dir = "up") {
      const d =
        dir === "up"
          ? `<span class="delta-up">${svg(ICON.arrowUp)}${delta}</span>`
          : `<span class="delta-down">${svg(ICON.arrowDown)}${delta}</span>`;
      return `<div class="kpi"><div class="kpi-top"><span class="kpi-label">${label}</span>
        <span class="kpi-icon">${svg(icon)}</span></div>
        <div class="kpi-value">${value}</div>
        <div class="kpi-delta">${d}<span class="delta-note">${note}</span></div></div>`;
    }
    function headHTML(title: string, sub: string, opts: { date?: boolean; export?: boolean } = {}) {
      const date = opts.date !== false ? `<button class="pill" data-flash>${svg(ICON.calendar)}<span>May 13 – Jun 12, 2025</span>${svg(ICON.chev, "chev")}</button>` : "";
      const exp = opts.export !== false ? `<button class="btn-primary" id="exportBtn">${svg(ICON.download)}<span>Export</span></button>` : "";
      return `<div class="page-head"><div><h1 class="page-title">${title}</h1><p class="page-sub">${sub}</p></div>
        <div class="head-actions">${date}${exp}</div></div>`;
    }
    function granDD(id: string) {
      return `<div class="dropdown"><button class="dd-trigger" data-dd="${id}"><span class="dd-label">Daily</span>${svg(ICON.chev)}</button>
        <div class="dd-menu" data-ddmenu="${id}">
          <button class="dd-opt sel">Daily</button><button class="dd-opt">Weekly</button><button class="dd-opt">Monthly</button>
        </div></div>`;
    }
    function lineChartCard(title: string, sub: string, id: string) {
      return `<div class="card"><div class="card-head"><div><h2 class="card-title">${title}</h2>${sub ? `<p class="card-sub">${sub}</p>` : ""}</div>${granDD(id)}</div>
        <div class="chart-wrap" data-chart="${id}">
          <svg class="linechart" data-svg="${id}" viewBox="0 0 760 230" preserveAspectRatio="none"></svg>
          <div class="chart-hover-dot"></div><div class="chart-tip"></div>
        </div>
        <div class="chart-legend"><span class="legend-dot"><i></i> ${id === "att" ? "Verifications" : "Verified runs"}</span></div></div>`;
    }

    /* ============================================================ OVERVIEW VIEW */
    function modelMixHTML() {
      let acc = 0;
      const stops = MODELS.map((m) => {
        const a = acc;
        acc += m.share;
        return `${m.color} ${a}% ${acc}%`;
      }).join(",");
      const donut = `<div class="donut-wrap"><div style="width:128px;height:128px;border-radius:50%;
          background:conic-gradient(${stops});mask:radial-gradient(circle 40px at center,transparent 98%,#000 100%);
          -webkit-mask:radial-gradient(circle 40px at center,transparent 98%,#000 100%);"></div>
          <div class="donut-center"><b>1.24B</b><span>tokens</span></div></div>`;
      const colhead = `<div class="model-colhead"><span class="ch">Model</span><span class="ch r">Usage</span><span class="ch r">Pass rate</span></div>`;
      const list = MODELS.map(
        (m) => `
        <div class="model-row">
          <span class="model-name"><i style="background:${m.color}"></i>${m.id}</span>
          <span class="model-share">${m.share}%</span>
          <span class="model-pass">${svg(ICON.check)}${m.pass}%</span>
          <span class="model-bar"><span style="width:${m.share * 2.6}%;background:${m.color}"></span></span>
        </div>`
      ).join("");
      return `<div class="modelmix">${donut}<div class="model-list">${colhead}${list}</div></div>`;
    }
    function overviewView() {
      return `<div class="view">
        ${headHTML("Overview", "Independently verified view of every model, agent, and session across Acme Corp.")}

        <div class="kpis k4">
          ${kpiCard(ICON.check, "Verified Runs", "24,815", "12.4%", "vs prev. 30d")}
          ${kpiCard(ICON.shield, "Pass Rate", "98.6%", "0.7%", "vs prev. 30d")}
          ${kpiCard(ICON.bolt, "Tokens Used", "1.24B", "18.7%", "vs prev. 30d")}
          ${kpiCard(ICON.spend, "Spend", "$48.2K", "9.1%", "vs prev. 30d")}
        </div>
        <div class="kpis k3">
          ${kpiCard(ICON.agents, "Active Agents", "37", "3", "newly verified")}
          ${kpiCard(ICON.sessions, "Sessions Verified", "12,904", "11.0%", "vs prev. 30d")}
          ${kpiCard(ICON.models, "Models in Use", "4", "1", "added gemini-3.5")}
        </div>

        <div class="grid-2">
          ${lineChartCard("Verified activity over time", "Verified runs per day", "ov")}
          <div class="card">
            <div class="card-head"><div><h2 class="card-title">Model mix</h2><p class="card-sub">Share of usage · per-model pass rate</p></div></div>
            ${modelMixHTML()}
          </div>
        </div>

        <div class="grid-2b">
          <div class="card">
            <div class="card-head"><div><h2 class="card-title">Top agents</h2></div><button class="btn-ghost" data-go="agents">View all</button></div>
            <div class="mini">${AGENTS.slice(0, 5)
              .map(
                (a) => `
              <div class="mini-row"><span class="mini-av" style="background:${a.color}">${a.init}</span>
                <div class="mini-main"><div class="mini-name">${a.name}</div><div class="mini-sub">${a.runs.toLocaleString()} runs · ${a.tokens} tok</div></div>
                <div class="mini-meta"><div class="mini-val">${a.pass}%</div><div class="mini-pass">pass</div></div></div>`
              )
              .join("")}
            </div>
          </div>
          <div class="card">
            <div class="card-head"><div><h2 class="card-title">Recent verified sessions</h2></div><button class="btn-ghost" data-go="sessions">View all</button></div>
            <div class="mini">${SESSIONS.slice(0, 5)
              .map(
                (s) => `
              <div class="mini-row" data-session="${s.id}" style="cursor:pointer">
                <span class="mini-av" style="background:${AGENT_COLOR[s.agent]}">${agInit(s.agent)}</span>
                <div class="mini-main"><div class="mini-name">${s.id} · ${s.project}</div><div class="mini-sub">${s.model}</div></div>
                <div class="mini-meta"><div class="mini-val">${s.tokens}</div><div class="${s.status === "ok" ? "mini-pass" : ""}" style="${s.status !== "ok" ? "color:var(--pending);font-size:11px;font-weight:600" : ""}">${s.status === "ok" ? "verified" : "pending"}</div></div></div>`
              )
              .join("")}
            </div>
          </div>
        </div>

        <div class="kpis k3" style="margin-bottom:0">
          ${kpiCard(ICON.learnings, "Learnings Captured", "342", "27", "this period")}
          ${kpiCard(ICON.memories, "Memories Captured", "1,142", "64", "this period")}
          ${kpiCard(ICON.skills, "Skills Verified", "116", "5", "newly covered")}
        </div>
      </div>`;
    }

    /* ============================================================ AGENTS VIEW */
    function statusPill(s: string) {
      return s === "ok"
        ? `<span class="status ok">${svg(ICON.check)}Verified</span>`
        : `<span class="status pending">${svg(ICON.clock)}Pending</span>`;
    }
    function modelChip(m: string) {
      return `<span class="model-chip"><i style="background:${MODEL_COLOR[m] || "var(--muted)"}"></i>${m}</span>`;
    }
    function agentsView() {
      return `<div class="view">
        ${headHTML("Agents", "What every AI agent is doing across the business — and whether it is independently verified.")}
        <div class="kpis k4">
          ${kpiCard(ICON.agents, "Active Agents", "37", "3", "newly verified")}
          ${kpiCard(ICON.check, "Agent Runs", "14,617", "13.2%", "vs prev. 30d")}
          ${kpiCard(ICON.shield, "Avg Pass Rate", "98.3%", "0.5%", "vs prev. 30d")}
          ${kpiCard(ICON.bolt, "Agent Tokens", "602M", "16.8%", "vs prev. 30d")}
        </div>
        <div class="card">
          <div class="card-head"><div><h2 class="card-title">Agents under verification</h2><p class="card-sub">Independent verification of each agent's runs, cost, and pass rate.</p></div>
            <button class="btn-ghost" data-flash>Filter</button></div>
          <table>
            <thead><tr><th>Agent</th><th>Evaluating</th><th class="num">Runs</th><th class="num">Tokens</th><th class="num">Pass rate</th><th>Last verified</th><th>Status</th><th></th></tr></thead>
            <tbody>${AGENTS.map(
              (a) => `
              <tr>
                <td><div class="entity"><span class="ent-logo" style="background:${a.color}">${a.init}</span>
                  <div class="ent-text"><div class="ent-name">${a.name}</div><div class="ent-sub">agent</div></div></div></td>
                <td>${a.job}</td>
                <td class="num">${a.runs.toLocaleString()}</td>
                <td class="num">${a.tokens}</td>
                <td class="num" style="color:var(--verified);font-weight:600">${a.pass}%</td>
                <td><span style="font-family:var(--font-mono);font-size:12.5px;color:var(--muted)">${a.last}</span></td>
                <td>${statusPill(a.status)}</td>
                <td class="td-right"><button class="kebab" data-kebab>${svg(ICON.kebab)}</button></td>
              </tr>`
            ).join("")}
            </tbody>
          </table>
        </div>
      </div>`;
    }

    /* ============================================================ SESSIONS VIEW */
    function sessionsView() {
      return `<div class="view">
        ${headHTML("Sessions", "Every AI session is a verified unit of work — click a session to see what it did, learned, and proved.")}
        <div class="kpis k4">
          ${kpiCard(ICON.sessions, "Sessions Verified", "12,904", "11.0%", "vs prev. 30d")}
          ${kpiCard(ICON.clock, "Median Duration", "4m 38s", "6.2%", "faster", "down")}
          ${kpiCard(ICON.bolt, "Avg Tokens / Session", "41.8K", "3.4%", "vs prev. 30d")}
          ${kpiCard(ICON.shield, "Verified %", "97.9%", "0.8%", "vs prev. 30d")}
        </div>
        <div class="card">
          <div class="card-head"><div><h2 class="card-title">Recent sessions</h2><p class="card-sub">Click any row to open the full session detail and its verification proof.</p></div>
            <button class="btn-ghost" data-flash>Filter</button></div>
          <table>
            <thead><tr><th>Subject</th><th class="num">Duration</th><th>Agent</th><th>Project</th><th>Model</th><th class="num">Tokens</th><th>Status</th><th>Task</th><th></th></tr></thead>
            <tbody>${SESSIONS.map(
              (s) => `
              <tr class="clickable" data-session="${s.id}">
                <td class="sess-subject"><div class="cell-strong">${s.subject}</div></td>
                <td class="num">${s.dur}</td>
                <td><div class="entity"><span class="ent-logo" style="background:${AGENT_COLOR[s.agent]};font-size:11px">${agInit(s.agent)}</span><span class="ent-name">${s.agent}</span></div></td>
                <td>${s.project}</td>
                <td>${modelChip(s.model)}</td>
                <td class="num">${s.tokens}</td>
                <td>${statusPill(s.status)}</td>
                <td><span class="mono-link">${s.id}</span></td>
                <td class="td-right"><button class="kebab" data-kebab>${svg(ICON.kebab)}</button></td>
              </tr>`
            ).join("")}
            </tbody>
          </table>
        </div>
      </div>`;
    }

    /* ============================================================ LIVE OBSERVABILITY VIEW */
    const REDUCED = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const LIVE_PROJECTS = ["Billing Service", "Market Intel", "Checkout Flow", "Marketing Site", "Ingest Pipeline", "Platform Core", "Auth Rewrite", "Search Index", "Notifications", "Data Warehouse"];
    const LIVE_AGENTS = AGENTS.map((a) => ({ name: a.name, color: a.color, init: a.init }));
    const LIVE_MODELS = MODELS.map((m) => m.id);
    let scaSeq = 4900;
    function liveStateFn() {
      const r = Math.random();
      return r < 0.82 ? "ok" : r < 0.93 ? "pending" : "reverify";
    }
    function nowClock() {
      return new Date().toLocaleTimeString("en-US", { hour12: false });
    }
    type LiveEvent = { id: string; time: string; agent: { name: string; color: string; init: string }; project: string; model: string; tokens: string; state: string };
    function liveEvent(): LiveEvent {
      const ag = LIVE_AGENTS[Math.floor(Math.random() * LIVE_AGENTS.length)];
      return {
        id: "SCA-" + scaSeq++,
        time: nowClock(),
        agent: ag,
        project: LIVE_PROJECTS[Math.floor(Math.random() * LIVE_PROJECTS.length)],
        model: LIVE_MODELS[Math.floor(Math.random() * LIVE_MODELS.length)],
        tokens: 8 + Math.floor(Math.random() * 92) + "." + Math.floor(Math.random() * 10) + "K",
        state: liveStateFn(),
      };
    }
    function streamRowHTML(e: LiveEvent, fresh: boolean) {
      const st =
        e.state === "ok"
          ? `<span class="status ok">${svg(ICON.check)}Verified</span>`
          : e.state === "pending"
          ? `<span class="status pending">${svg(ICON.clock)}Pending</span>`
          : `<span class="status reverify">${svg(ICON.refresh)}Re-verifying</span>`;
      return `<div class="stream-row${fresh ? " fresh" : ""}">
        <span class="stream-time">${e.time}</span>
        <span class="stream-ag" style="background:${e.agent.color}">${e.agent.init}</span>
        <div class="stream-main">
          <div class="stream-title">${e.agent.name} · ${e.project} · <b>${e.id}</b></div>
          <div class="stream-sub">${e.model}</div>
        </div>
        <span class="stream-tok">${e.tokens}</span>
        <span class="stream-status">${st}</span>
      </div>`;
    }
    function liveKpi(id: string, icon: string, label: string, value: string) {
      return `<div class="kpi live-kpi" data-livekpi="${id}"><div class="kpi-top"><span class="kpi-label">${label}</span>
        <span class="kpi-icon">${svg(icon)}</span></div>
        <div class="kpi-value" data-val>${value}</div>
        <div class="kpi-delta"><span class="kpi-live-tag"><i></i>updating live</span></div></div>`;
    }
    function liveView() {
      const seed = Array.from({ length: 8 }, () => liveEvent());
      return `<div class="view">
        <div class="page-head">
          <div style="display:flex;align-items:center;gap:14px">
            <div><h1 class="page-title">Live Observability</h1>
            <p class="page-sub">AI activity being independently verified across Acme Corp, right now.</p></div>
          </div>
          <div class="head-actions">
            <span class="live-badge"><span class="ld"></span>LIVE</span>
            <button class="btn-primary" id="exportBtn">${svg(ICON.download)}<span>Export</span></button>
          </div>
        </div>

        <div class="kpis k4">
          ${liveKpi("runHr", ICON.check, "Runs verified (last hour)", "1,284")}
          ${liveKpi("tok", ICON.bolt, "Tokens (live)", "3.41M")}
          ${liveKpi("agents", ICON.agents, "Active agents now", "29")}
          ${liveKpi("pass", ICON.shield, "Live pass rate", "98.4%")}
        </div>

        <div class="card">
          <div class="card-head"><div><h2 class="card-title">Throughput</h2><p class="card-sub">Verified runs / min — last 30 min</p></div>
            <span class="live-badge"><span class="ld"></span>LIVE</span></div>
          <div class="spark-wrap"><svg class="spark" id="spark" viewBox="0 0 720 64" preserveAspectRatio="none"></svg></div>
        </div>

        <div class="card">
          <div class="card-head"><div><h2 class="card-title">Activity stream</h2><p class="card-sub">${REDUCED ? "Recent verified events (motion reduced)" : "New verified events appear in real time"}</p></div>
            <span class="kpi-live-tag"><i></i>${REDUCED ? "paused" : "streaming"}</span></div>
          <div class="stream" id="stream">${seed.map((e) => streamRowHTML(e, false)).join("")}</div>
        </div>
      </div>`;
    }

    let LIVE_TIMERS: Array<ReturnType<typeof setTimeout>> = [];
    const liveCounters = { runHr: 1284, tok: 3.41, agents: 29, passNum: 984 };
    const SPARK = Array.from({ length: 30 }, () => 30 + Math.floor(Math.random() * 60));
    function tickKpi(id: string, val: string) {
      const card = root!.querySelector<HTMLElement>(`[data-livekpi="${id}"]`);
      if (!card) return;
      const valEl = card.querySelector<HTMLElement>("[data-val]");
      if (valEl) valEl.textContent = val;
      card.classList.add("tick");
      setTimeout(() => card.classList.remove("tick"), 250);
    }
    function drawSpark() {
      const el = byId("spark");
      if (!el) return;
      const W = 720,
        H = 64,
        n = SPARK.length,
        max = 100;
      const x = (i: number) => (i / (n - 1)) * W,
        y = (v: number) => H - (v / max) * (H - 8) - 4;
      const pts = SPARK.map((v, i) => ({ x: x(i), y: y(v) }));
      const line = pts.map((p, i) => `${i ? "L" : "M"}${p.x.toFixed(1)} ${p.y.toFixed(1)}`).join(" ");
      const area = `${line} L ${W} ${H} L 0 ${H} Z`;
      el.innerHTML = `<defs><linearGradient id="spk" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#2563EB" stop-opacity="0.20"/><stop offset="100%" stop-color="#2563EB" stop-opacity="0"/></linearGradient></defs>
        <path d="${area}" fill="url(#spk)"/>
        <path d="${line}" fill="none" stroke="#2563EB" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"/>`;
    }
    function startLive() {
      if (REDUCED) {
        drawSpark();
        return;
      }
      drawSpark();
      LIVE_TIMERS.push(
        setInterval(() => {
          liveCounters.runHr += Math.floor(Math.random() * 4);
          liveCounters.tok = +(liveCounters.tok + Math.random() * 0.05).toFixed(2);
          liveCounters.agents = 27 + Math.floor(Math.random() * 8);
          liveCounters.passNum = 981 + Math.floor(Math.random() * 16);
          tickKpi("runHr", liveCounters.runHr.toLocaleString());
          tickKpi("tok", liveCounters.tok.toFixed(2) + "M");
          tickKpi("agents", String(liveCounters.agents));
          tickKpi("pass", (liveCounters.passNum / 10).toFixed(1) + "%");
        }, 1200)
      );
      function schedule() {
        const delay = 2000 + Math.random() * 1000;
        LIVE_TIMERS.push(
          setTimeout(() => {
            const stream = byId("stream");
            if (stream) {
              const e = liveEvent();
              stream.insertAdjacentHTML("afterbegin", streamRowHTML(e, true));
              while (stream.children.length > 9) stream.removeChild(stream.lastChild as Node);
              SPARK.push(30 + Math.floor(Math.random() * 60));
              if (SPARK.length > 30) SPARK.shift();
              drawSpark();
            }
            if (activeView === "live") schedule();
          }, delay)
        );
      }
      schedule();
    }
    function stopLive() {
      LIVE_TIMERS.forEach((t) => {
        clearInterval(t as unknown as number);
        clearTimeout(t);
      });
      LIVE_TIMERS = [];
    }

    /* ============================================================ MODELS VIEW */
    const MODEL_ROWS = [
      { id: "claude-opus-4-8", provider: "Anthropic", share: 38, tokens: "471M", spend: "$22.9K", pass: 99.1, sessions: 4218, cost: "$48.60", trend: "up" },
      { id: "claude-sonnet-4-6", provider: "Anthropic", share: 34, tokens: "422M", spend: "$11.4K", pass: 98.7, sessions: 3877, cost: "$27.00", trend: "up" },
      { id: "gpt-5.5", provider: "OpenAI", share: 18, tokens: "223M", spend: "$9.8K", pass: 97.9, sessions: 1944, cost: "$44.00", trend: "flat" },
      { id: "gemini-3.5-flash", provider: "Google", share: 10, tokens: "124M", spend: "$4.1K", pass: 98.2, sessions: 1162, cost: "$33.10", trend: "up" },
    ];
    function trendGlyph(t: string) {
      return t === "up"
        ? `<span class="delta-up">${svg(ICON.arrowUp)}</span>`
        : t === "down"
        ? `<span class="delta-down">${svg(ICON.arrowDown)}</span>`
        : `<span style="color:var(--faint)">—</span>`;
    }
    function modelsView() {
      return `<div class="view">
        ${headHTML("Models", "Every model running across Acme Corp — usage, spend, and independently verified pass rate.")}
        <div class="kpis k4">
          ${kpiCard(ICON.models, "Models in Use", "4", "1", "added gemini-3.5")}
          ${kpiCard(ICON.bolt, "Tokens Total", "1.24B", "18.7%", "vs prev. 30d")}
          ${kpiCard(ICON.shield, "Blended Pass Rate", "98.6%", "0.7%", "vs prev. 30d")}
          ${kpiCard(ICON.spend, "Avg Cost / 1M", "$38.90", "4.2%", "cheaper", "down")}
        </div>
        <div class="card">
          <div class="card-head"><div><h2 class="card-title">Models under verification</h2><p class="card-sub">Mirrors the Overview model mix — share, cost, and per-model pass rate.</p></div>
            <button class="btn-ghost" data-flash>Filter</button></div>
          <table>
            <thead><tr><th>Model</th><th>Provider</th><th class="num">Usage</th><th class="num">Tokens</th><th class="num">Spend</th><th class="num">Pass rate</th><th class="num">Sessions</th><th class="num">Cost / 1M</th><th class="num">Trend</th></tr></thead>
            <tbody>${MODEL_ROWS.map(
              (m) => `
              <tr>
                <td><span class="model-chip"><i style="background:${MODEL_COLOR[m.id]}"></i>${m.id}</span></td>
                <td class="cell-strong">${m.provider}</td>
                <td class="num">${m.share}%</td>
                <td class="num">${m.tokens}</td>
                <td class="num">${m.spend}</td>
                <td class="num pass-good">${m.pass}%</td>
                <td class="num">${m.sessions.toLocaleString()}</td>
                <td class="num">${m.cost}</td>
                <td class="num">${trendGlyph(m.trend)}</td>
              </tr>`
            ).join("")}
            </tbody>
          </table>
        </div>
      </div>`;
    }

    /* ============================================================ SKILLS VIEW */
    const SKILL_ROWS = [
      { name: "FirstPrinciples", cat: "Reasoning", inv: 1842, sessions: 1204, pass: 99.0, last: "3m ago", status: "ok" },
      { name: "react-patterns", cat: "Engineering", inv: 1611, sessions: 980, pass: 98.6, last: "8m ago", status: "ok" },
      { name: "code-review", cat: "Engineering", inv: 1474, sessions: 1122, pass: 99.3, last: "1m ago", status: "ok" },
      { name: "Research", cat: "Research", inv: 1290, sessions: 712, pass: 98.1, last: "12m ago", status: "ok" },
      { name: "RootCauseAnalysis", cat: "Debugging", inv: 1043, sessions: 688, pass: 97.4, last: "5m ago", status: "drift" },
      { name: "design-consultation", cat: "Design", inv: 842, sessions: 301, pass: 99.2, last: "22m ago", status: "ok" },
      { name: "Browser", cat: "QA", inv: 806, sessions: 540, pass: 96.9, last: "2m ago", status: "ok" },
      { name: "security-review", cat: "Security", inv: 611, sessions: 388, pass: 99.4, last: "38m ago", status: "ok" },
      { name: "deep-research", cat: "Research", inv: 498, sessions: 241, pass: 98.3, last: "41m ago", status: "ok" },
      { name: "investigate", cat: "Debugging", inv: 472, sessions: 344, pass: 97.8, last: "9m ago", status: "ok" },
    ];
    function skillStatus(s: string) {
      return s === "ok"
        ? `<span class="status ok">${svg(ICON.check)}Verified</span>`
        : `<span class="status drift">${svg(ICON.refresh)}Drift watch</span>`;
    }
    function skillsView() {
      return `<div class="view">
        ${headHTML("Skills", "What skills your AI invoked, how often, and whether their outcomes are independently verified.")}
        <div class="kpis k4">
          ${kpiCard(ICON.skills, "Skills Verified", "116", "5", "newly covered")}
          ${kpiCard(ICON.check, "Invocations", "38,402", "14.1%", "vs prev. 30d")}
          ${kpiCard(ICON.shield, "Pass Rate", "98.4%", "0.6%", "vs prev. 30d")}
          ${kpiCard(ICON.refresh, "Drift Watch", "3", "1", "flagged this period", "down")}
        </div>
        <div class="card">
          <div class="card-head"><div><h2 class="card-title">Skills under verification</h2><p class="card-sub">Top skills by invocation across all agents and sessions.</p></div>
            <button class="btn-ghost" data-flash>Filter</button></div>
          <table>
            <thead><tr><th>Skill</th><th>Category</th><th class="num">Invocations</th><th class="num">Sessions</th><th class="num">Pass rate</th><th>Last used</th><th>Status</th></tr></thead>
            <tbody>${SKILL_ROWS.map(
              (s) => `
              <tr>
                <td><span class="tag mono cobalt">${s.name}</span></td>
                <td class="cell-strong">${s.cat}</td>
                <td class="num">${s.inv.toLocaleString()}</td>
                <td class="num">${s.sessions.toLocaleString()}</td>
                <td class="num pass-good">${s.pass}%</td>
                <td><span style="font-family:var(--font-mono);font-size:12.5px;color:var(--muted)">${s.last}</span></td>
                <td>${skillStatus(s.status)}</td>
              </tr>`
            ).join("")}
            </tbody>
          </table>
        </div>
      </div>`;
    }

    /* ============================================================ WORKFLOWS VIEW */
    const WORKFLOW_ROWS = [
      { name: "Review gauntlet", steps: ["CEO", "Eng", "Design", "DevEx", "Converge"], runs: 412, dur: "14m 20s", pass: 98.8, last: "7m ago", status: "ok" },
      { name: "Land & deploy", steps: ["Test", "Review", "Bump", "Push", "PR", "Canary"], runs: 386, dur: "9m 41s", pass: 99.1, last: "2m ago", status: "ok" },
      { name: "Research panel", steps: ["Fan-out", "Fetch", "Verify", "Synthesize"], runs: 298, dur: "11m 05s", pass: 98.2, last: "18m ago", status: "ok" },
      { name: "Design consultation", steps: ["Understand", "Research", "System", "Preview"], runs: 174, dur: "16m 33s", pass: 99.0, last: "31m ago", status: "ok" },
      { name: "Micro-cycle build", steps: ["Build", "Browser", "Design", "Refine"], runs: 521, dur: "48m 12s", pass: 97.6, last: "4m ago", status: "pending" },
      { name: "TDD red-green", steps: ["Red", "Green", "Refactor"], runs: 903, dur: "6m 18s", pass: 99.4, last: "1m ago", status: "ok" },
      { name: "Root-cause loop", steps: ["Timeline", "Hypotheses", "Probe", "Confirm"], runs: 241, dur: "12m 47s", pass: 97.1, last: "9m ago", status: "ok" },
    ];
    function workflowsView() {
      return `<div class="view">
        ${headHTML("Workflows", "Multi-step pipelines, verified at every step. What ran, how long it took, and whether it passed.")}
        <div class="kpis k4">
          ${kpiCard(ICON.workflows, "Workflows", "24", "2", "newly verified")}
          ${kpiCard(ICON.check, "Runs", "3,235", "9.7%", "vs prev. 30d")}
          ${kpiCard(ICON.shield, "Pass Rate", "98.5%", "0.4%", "vs prev. 30d")}
          ${kpiCard(ICON.clock, "Avg Steps / Run", "4.3", "0.2", "vs prev. 30d")}
        </div>
        <div class="card">
          <div class="card-head"><div><h2 class="card-title">Workflows under verification</h2><p class="card-sub">Each step is independently verified before the next runs.</p></div>
            <button class="btn-ghost" data-flash>Filter</button></div>
          <table>
            <thead><tr><th>Workflow</th><th>Steps</th><th class="num">Runs</th><th class="num">Avg duration</th><th class="num">Pass rate</th><th>Last run</th><th>Status</th></tr></thead>
            <tbody>${WORKFLOW_ROWS.map(
              (w) => `
              <tr>
                <td><div class="cell-titled"><div class="t">${w.name}</div><div class="s">${w.steps.length} steps</div></div></td>
                <td><div class="tag-row">${w.steps.map((st) => `<span class="tag">${st}</span>`).join("")}</div></td>
                <td class="num">${w.runs.toLocaleString()}</td>
                <td class="num">${w.dur}</td>
                <td class="num pass-good">${w.pass}%</td>
                <td><span style="font-family:var(--font-mono);font-size:12.5px;color:var(--muted)">${w.last}</span></td>
                <td>${statusPill(w.status)}</td>
              </tr>`
            ).join("")}
            </tbody>
          </table>
        </div>
      </div>`;
    }

    /* ============================================================ PROJECTS VIEW */
    const PROJECT_ROWS = [
      { name: "Billing Service", unit: "Payments", sessions: 1842, tokens: "214M", spend: "$8.9K", pass: 99.0, agents: ["Engineer", "SecurityRev"], status: "ok" },
      { name: "Market Intel", unit: "Strategy", sessions: 1120, tokens: "318M", spend: "$12.4K", pass: 98.4, agents: ["Researcher"], status: "ok" },
      { name: "Checkout Flow", unit: "Commerce", sessions: 980, tokens: "96M", spend: "$3.2K", pass: 97.6, agents: ["QATester", "Engineer"], status: "ok" },
      { name: "Marketing Site", unit: "Growth", sessions: 744, tokens: "88M", spend: "$2.7K", pass: 99.1, agents: ["Designer", "Engineer"], status: "ok" },
      { name: "Ingest Pipeline", unit: "Data", sessions: 1308, tokens: "176M", spend: "$6.1K", pass: 96.8, agents: ["Debugger", "Architect"], status: "pending" },
      { name: "Platform Core", unit: "Infrastructure", sessions: 611, tokens: "205M", spend: "$7.8K", pass: 98.9, agents: ["Architect", "Engineer"], status: "ok" },
      { name: "Auth Rewrite", unit: "Security", sessions: 903, tokens: "132M", spend: "$5.0K", pass: 98.7, agents: ["Engineer", "SecurityRev"], status: "ok" },
      { name: "Data Warehouse", unit: "Data", sessions: 466, tokens: "71M", spend: "$2.4K", pass: 98.2, agents: ["Architect"], status: "ok" },
      { name: "Search Index", unit: "Platform", sessions: 389, tokens: "58M", spend: "$1.9K", pass: 97.9, agents: ["Engineer", "Debugger"], status: "ok" },
    ];
    function agentDots(names: string[]) {
      return `<div class="tag-row">${names
        .map(
          (n) => `<span class="entity" title="${n}"><span class="ent-logo" style="background:${AGENT_COLOR[n] || "var(--muted)"};width:22px;height:22px;font-size:9.5px">${agInit(n)}</span></span>`
        )
        .join("")}</div>`;
    }
    function projectsView() {
      return `<div class="view">
        ${headHTML("Projects", "Verified AI work grouped by project and business unit across Acme Corp.")}
        <div class="kpis k4">
          ${kpiCard(ICON.projects, "Projects", "18", "2", "newly onboarded")}
          ${kpiCard(ICON.check, "Verified Runs", "9,372", "12.0%", "vs prev. 30d")}
          ${kpiCard(ICON.shield, "Pass Rate", "98.4%", "0.5%", "vs prev. 30d")}
          ${kpiCard(ICON.spend, "Spend", "$48.2K", "9.1%", "vs prev. 30d")}
        </div>
        <div class="card">
          <div class="card-head"><div><h2 class="card-title">Projects under verification</h2><p class="card-sub">Verified-% and cost per project and business unit.</p></div>
            <button class="btn-ghost" data-flash>Filter</button></div>
          <table>
            <thead><tr><th>Project</th><th>Business unit</th><th class="num">Sessions</th><th class="num">Tokens</th><th class="num">Spend</th><th class="num">Pass rate</th><th>Top agents</th><th>Status</th></tr></thead>
            <tbody>${PROJECT_ROWS.map(
              (p) => `
              <tr>
                <td class="cell-strong">${p.name}</td>
                <td>${p.unit}</td>
                <td class="num">${p.sessions.toLocaleString()}</td>
                <td class="num">${p.tokens}</td>
                <td class="num">${p.spend}</td>
                <td class="num pass-good">${p.pass}%</td>
                <td>${agentDots(p.agents)}</td>
                <td>${statusPill(p.status)}</td>
              </tr>`
            ).join("")}
            </tbody>
          </table>
        </div>
      </div>`;
    }

    /* ============================================================ LEARNINGS VIEW */
    const LEARNING_ROWS = [
      { text: "BSD `sed` lacks `\\b` word boundaries — broke the codemod on macOS", source: "SCA-4242", agent: "Engineer", date: "Jun 11, 2025", status: "promoted" },
      { text: "ChatGPT OAuth can image-gen via `codex exec`, not the platform API", source: "SCA-1184", agent: "Designer", date: "Jun 11, 2025", status: "promoted" },
      { text: "Stripe webhooks are at-least-once — handlers must be idempotent on event id", source: "SCA-4821", agent: "Engineer", date: "Jun 12, 2025", status: "promoted" },
      { text: "Signature verification must run before body parse to avoid replay", source: "SCA-4821", agent: "Engineer", date: "Jun 12, 2025", status: "candidate" },
      { text: "Token rotate endpoint returns 401 (not 419) on a stale refresh", source: "SCA-4242", agent: "Engineer", date: "Jun 11, 2025", status: "promoted" },
      { text: "Guest checkout skipped the postal-code validator when country was pre-filled", source: "SCA-2645", agent: "QATester", date: "Jun 12, 2025", status: "candidate" },
      { text: "An event bus adds one hop but removes write-path fan-out coupling across 6 services", source: "SCA-0734", agent: "Architect", date: "Jun 11, 2025", status: "candidate" },
      { text: "Competitor C raised a $12M Series A in May 2025 on observability positioning", source: "SCA-3120", agent: "Researcher", date: "Jun 12, 2025", status: "promoted" },
      { text: "Refresh tokens were logged at debug level in one auth branch", source: "SCA-0611", agent: "SecurityRev", date: "Jun 10, 2025", status: "promoted" },
    ];
    function learnStatus(s: string) {
      return s === "promoted"
        ? `<span class="status promoted">${svg(ICON.check)}Promoted</span>`
        : `<span class="status candidate">${svg(ICON.sparkles)}Candidate</span>`;
    }
    function fmtLearn(t: string) {
      return t.replace(/`([^`]+)`/g, "<code>$1</code>");
    }
    function learningsView() {
      return `<div class="view">
        ${headHTML("Learnings", "Durable learnings mined from verified sessions — the self-improvement loop, made inspectable.")}
        <div class="kpis k4">
          ${kpiCard(ICON.learnings, "Learnings Captured", "342", "27", "this period")}
          ${kpiCard(ICON.check, "Promoted", "198", "19", "this period")}
          ${kpiCard(ICON.sparkles, "Candidates", "144", "8", "awaiting review")}
          ${kpiCard(ICON.brain, "Avg / Session", "2.4", "0.3", "vs prev. 30d")}
        </div>
        <div class="card">
          <div class="card-head"><div><h2 class="card-title">Recent learnings</h2><p class="card-sub">Each learning traces to the verified session it was mined from.</p></div>
            <button class="btn-ghost" data-flash>Filter</button></div>
          <table>
            <thead><tr><th>Learning</th><th>Source session</th><th>Agent</th><th>Captured</th><th>Status</th></tr></thead>
            <tbody>${LEARNING_ROWS.map(
              (l) => `
              <tr>
                <td class="cell-learning"><div class="t">${fmtLearn(l.text)}</div></td>
                <td><a class="mono-link" data-session="${l.source}" href="#">${l.source}</a></td>
                <td><div class="entity"><span class="ent-logo" style="background:${AGENT_COLOR[l.agent] || "var(--muted)"};font-size:10.5px">${agInit(l.agent)}</span><span class="ent-name">${l.agent}</span></div></td>
                <td><span style="font-family:var(--font-mono);font-size:12.5px;color:var(--muted)">${l.date}</span></td>
                <td>${learnStatus(l.status)}</td>
              </tr>`
            ).join("")}
            </tbody>
          </table>
        </div>
      </div>`;
    }

    /* ============================================================ MEMORIES VIEW */
    const MEM_TYPE: Record<string, string> = { project: "#2563EB", feedback: "#16A34A", reference: "#0891B2", user: "#7C3AED" };
    const MEMORY_ROWS = [
      { text: "Billing webhooks are at-least-once; never assume single delivery", type: "project", source: "SCA-4821", date: "Jun 12, 2025", refs: 14 },
      { text: "design binary uses Codex subscription image lane (no API key)", type: "reference", source: "SCA-1184", date: "Jun 11, 2025", refs: 9 },
      { text: "Token rotate endpoint returns 401 (not 419) on stale refresh", type: "reference", source: "SCA-4242", date: "Jun 11, 2025", refs: 22 },
      { text: "Competitor C — observability positioning, $12M Series A (2025-05)", type: "project", source: "SCA-3120", date: "Jun 12, 2025", refs: 6 },
      { text: "Prefer one bundled PR over many small ones for refactors in this area", type: "feedback", source: "SCA-0734", date: "Jun 11, 2025", refs: 31 },
      { text: "Stripe retries fire within 3s — idempotency keyed on event id", type: "project", source: "SCA-4821", date: "Jun 12, 2025", refs: 11 },
      { text: "Redact refresh tokens from debug logs (hardening note)", type: "feedback", source: "SCA-0611", date: "Jun 10, 2025", refs: 5 },
      { text: "Reviewer prefers terse summaries — no trailing recap of the diff", type: "user", source: "SCA-2645", date: "Jun 12, 2025", refs: 18 },
    ];
    function memTypeChip(t: string) {
      return `<span class="mtype"><i style="background:${MEM_TYPE[t]}"></i>${t}</span>`;
    }
    function memoriesView() {
      return `<div class="view">
        ${headHTML("Memories", "What the system remembered, where it came from, and which sessions referenced it.")}
        <div class="kpis k4">
          ${kpiCard(ICON.memories, "Memories Captured", "1,142", "64", "this period")}
          ${kpiCard(ICON.refresh, "References (30d)", "8,914", "12.6%", "vs prev. 30d")}
          ${kpiCard(ICON.sessions, "Source Sessions", "612", "41", "this period")}
          ${kpiCard(ICON.check, "Verified Source", "100%", "—", "all traced")}
        </div>
        <div class="card">
          <div class="card-head"><div><h2 class="card-title">Recent memories</h2><p class="card-sub">Every memory traces to a verified source session.</p></div>
            <button class="btn-ghost" data-flash>Filter</button></div>
          <table>
            <thead><tr><th>Memory</th><th>Type</th><th>Source session</th><th>Captured</th><th class="num">Referenced</th></tr></thead>
            <tbody>${MEMORY_ROWS.map(
              (m) => `
              <tr>
                <td class="cell-learning"><div class="t">${m.text}</div></td>
                <td>${memTypeChip(m.type)}</td>
                <td><a class="mono-link" data-session="${m.source}" href="#">${m.source}</a></td>
                <td><span style="font-family:var(--font-mono);font-size:12.5px;color:var(--muted)">${m.date}</span></td>
                <td class="num">${m.refs}×</td>
              </tr>`
            ).join("")}
            </tbody>
          </table>
        </div>
      </div>`;
    }

    /* ============================================================ STUBS */
    const STUB: Record<string, [string, string, string]> = {
      evidence: ["Evidence", ICON.evidence, "Tamper-evident evidence store retaining every proof for audit."],
      reports: ["Reports", ICON.reports, "Auditor-ready reports and scheduled exports of verification coverage."],
      attestations: ["Attestations", ICON.attest, "Compliance attestations roll up from verified sessions. Each session carries its own proof — open any session to see its attestation."],
      settings: ["Settings", ICON.settings, "Workspace, member, and verification configuration for Acme Corp."],
    };
    function stubView(id: string) {
      const [title, icon, text] = STUB[id];
      return `<div class="view">
        ${headHTML(title, text.split(".")[0] + ".", { export: false, date: false })}
        <div class="stub"><div class="stub-icon">${svg(icon)}</div>
          <div class="stub-title">${title}</div><p class="stub-text">${text}</p>
          <span class="stub-badge">Available in the full product</span></div>
      </div>`;
    }

    /* ============================================================ VIEW SWAP */
    function setView(id: string) {
      stopLive();
      activeView = id;
      renderNav();
      const main = byId("main");
      if (!main) return;
      main.scrollTop = 0;
      const VIEWS: Record<string, () => string> = {
        overview: overviewView,
        live: liveView,
        agents: agentsView,
        sessions: sessionsView,
        models: modelsView,
        skills: skillsView,
        workflows: workflowsView,
        projects: projectsView,
        learnings: learningsView,
        memories: memoriesView,
      };
      main.innerHTML = VIEWS[id] ? VIEWS[id]() : stubView(id);
      wireView();
      if (id === "live") startLive();
    }

    /* ============================================================ WIRING */
    function wireView() {
      qsa("[data-svg]").forEach((svgEl) => {
        drawChart(svgEl as unknown as SVGSVGElement, SERIES, 1400);
        wireChartHover(svgEl as unknown as SVGSVGElement);
      });
      qsa("[data-dd]").forEach((t) => {
        const menu = root!.querySelector<HTMLElement>(`[data-ddmenu="${(t as HTMLElement).dataset.dd}"]`);
        const label = t.querySelector<HTMLElement>(".dd-label");
        if (!menu || !label) return;
        t.addEventListener("click", (e) => {
          e.stopPropagation();
          menu.classList.toggle("open");
        });
        menu.querySelectorAll<HTMLElement>(".dd-opt").forEach((o) =>
          o.addEventListener("click", () => {
            label.textContent = o.textContent;
            menu.querySelectorAll(".dd-opt").forEach((x) => x.classList.remove("sel"));
            o.classList.add("sel");
            menu.classList.remove("open");
          })
        );
      });
      const exp = byId("exportBtn");
      if (exp)
        exp.addEventListener("click", () => {
          const s = exp.querySelector("span");
          if (!s) return;
          s.textContent = "Exported ✓";
          setTimeout(() => (s.textContent = "Export"), 1400);
        });
      qsa("[data-flash]").forEach((b) => b.addEventListener("click", () => flash(b)));
      qsa("[data-go]").forEach((b) => b.addEventListener("click", () => setView((b as HTMLElement).dataset.go as string)));
      qsa("[data-session]").forEach((r) =>
        r.addEventListener("click", (e) => {
          if ((e.target as HTMLElement).closest("[data-kebab]")) return;
          openSession((r as HTMLElement).dataset.session as string);
        })
      );
      qsa("[data-kebab]").forEach((k) =>
        k.addEventListener("click", (e) => {
          e.stopPropagation();
          closeKebabs();
          const m = document.createElement("div");
          m.className = "kebab-menu";
          m.innerHTML = `<button>View details</button><button>Open attestation</button><button>Download proof</button><button>Copy ID</button>`;
          document.body.appendChild(m);
          const r = k.getBoundingClientRect();
          m.style.top = r.bottom + window.scrollY + 4 + "px";
          m.style.left = r.right + window.scrollX - 162 + "px";
          m.querySelectorAll("button").forEach((b) => b.addEventListener("click", closeKebabs));
        })
      );
    }
    function closeKebabs() {
      document.querySelectorAll(".kebab-menu").forEach((m) => m.remove());
    }
    function flash(el: HTMLElement) {
      const o = el.style.borderColor;
      el.style.borderColor = "var(--cobalt)";
      setTimeout(() => (el.style.borderColor = o), 300);
    }
    const onDocClick = () => {
      closeKebabs();
      qsa(".dd-menu.open").forEach((m) => m.classList.remove("open"));
    };
    document.addEventListener("click", onDocClick);

    /* ============================================================ CHART ENGINE */
    const VW = 760,
      VH = 230,
      PAD = { l: 42, r: 12, t: 14, b: 26 };
    const CHART_CACHE = new WeakMap<SVGSVGElement, { pts: Array<{ x: number; y: number; d: Point }>; data: Point[] }>();
    function drawChart(svgEl: SVGSVGElement, data: Point[], maxY: number) {
      const w = VW - PAD.l - PAD.r,
        h = VH - PAD.t - PAD.b;
      const x = (i: number) => PAD.l + (i / (data.length - 1)) * w,
        y = (v: number) => PAD.t + h - (v / maxY) * h;
      const pts = data.map((d, i) => ({ x: x(i), y: y(d.v), d }));
      CHART_CACHE.set(svgEl, { pts, data });
      const step = maxY / 4;
      let grid = "";
      for (let g = 0; g <= maxY; g += step) {
        const gy = y(g);
        grid += `<line x1="${PAD.l}" y1="${gy}" x2="${VW - PAD.r}" y2="${gy}" stroke="#EEF2F7" stroke-width="1"/>`;
        const lbl = g >= 1000 ? g / 1000 + "K" : g;
        grid += `<text x="${PAD.l - 8}" y="${gy + 3.5}" text-anchor="end" font-size="10" fill="#94A3B8" font-family="var(--font-mono)">${lbl}</text>`;
      }
      let xl = "";
      data.forEach((d, i) => {
        if (i % 5 === 0 || i === data.length - 1) {
          xl += `<text x="${x(i)}" y="${VH - 8}" text-anchor="middle" font-size="10" fill="#94A3B8">${d.date.toLocaleDateString("en-US", { month: "short", day: "numeric" })}</text>`;
        }
      });
      const line = pts.map((p, i) => `${i ? "L" : "M"}${p.x.toFixed(1)} ${p.y.toFixed(1)}`).join(" ");
      const area = `${line} L ${pts[pts.length - 1].x.toFixed(1)} ${y(0)} L ${pts[0].x.toFixed(1)} ${y(0)} Z`;
      const gid = "ag" + Math.random().toString(36).slice(2, 7);
      svgEl.innerHTML = `<defs><linearGradient id="${gid}" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#2563EB" stop-opacity="0.18"/><stop offset="100%" stop-color="#2563EB" stop-opacity="0"/></linearGradient></defs>
        ${grid}<path d="${area}" fill="url(#${gid})"/>
        <path d="${line}" fill="none" stroke="#2563EB" stroke-width="2.2" stroke-linejoin="round" stroke-linecap="round"/>${xl}`;
    }
    function wireChartHover(svgEl: SVGSVGElement) {
      const wrap = svgEl.closest(".chart-wrap") as HTMLElement;
      const tip = wrap.querySelector<HTMLElement>(".chart-tip")!;
      const dot = wrap.querySelector<HTMLElement>(".chart-hover-dot")!;
      function pos(p: { x: number; y: number }) {
        const r = svgEl.getBoundingClientRect(),
          wr = wrap.getBoundingClientRect();
        return { x: (p.x / VW) * r.width + (r.left - wr.left), y: (p.y / VH) * r.height + (r.top - wr.top) };
      }
      svgEl.addEventListener("mousemove", (e) => {
        const c = CHART_CACHE.get(svgEl);
        if (!c) return;
        const r = svgEl.getBoundingClientRect(),
          relX = ((e.clientX - r.left) / r.width) * VW;
        let best = 0,
          bd = Infinity;
        c.pts.forEach((p, i) => {
          const d = Math.abs(p.x - relX);
          if (d < bd) {
            bd = d;
            best = i;
          }
        });
        const p = c.pts[best],
          ps = pos(p);
        dot.style.left = ps.x + "px";
        dot.style.top = ps.y + "px";
        dot.style.opacity = "1";
        tip.style.left = ps.x + "px";
        tip.style.top = ps.y + "px";
        tip.style.opacity = "1";
        tip.innerHTML = `<span class="tip-date">${p.d.label}</span><b>${p.d.v.toLocaleString()}</b> ${(wrap.dataset.chart === "att") ? "Verifications" : "Verified runs"}`;
      });
      svgEl.addEventListener("mouseleave", () => {
        dot.style.opacity = "0";
        tip.style.opacity = "0";
      });
    }
    let rt: ReturnType<typeof setTimeout>;
    const onResize = () => {
      clearTimeout(rt);
      rt = setTimeout(() => {
        qsa("[data-svg]").forEach((svgEl) => drawChart(svgEl as unknown as SVGSVGElement, SERIES, 1400));
      }, 120);
    };
    window.addEventListener("resize", onResize);

    /* ============================================================ SESSION DRAWER */
    function openSession(id: string) {
      const s = SESSIONS.find((x) => x.id === id);
      if (!s) return;
      const verified = s.status === "ok";
      const sec = (cls: string, iconPath: string, label: string, bodyHTML: string) =>
        bodyHTML ? `<div class="dr-section"><div class="dr-label cap">${svg(iconPath)}${label}</div>${bodyHTML}</div>` : "";
      const skillsHTML =
        s.skills && s.skills.length ? `<div class="chips">${s.skills.map((k) => `<span class="chip">${k}</span>`).join("")}</div>` : "";
      const listHTML = (arr: string[], cls: string) =>
        arr && arr.length
          ? `<ul class="dr-list ${cls}">${arr.map((t) => `<li>${t.replace(/`([^`]+)`/g, "<code>$1</code>")}</li>`).join("")}</ul>`
          : "";

      const drawer = byId("drawer"),
        scrim = byId("scrim");
      if (!drawer || !scrim) return;
      drawer.innerHTML = `
        <div class="drawer-head">
          <div><div class="drawer-title">${s.subject}</div><div class="drawer-sub">${s.id} · ${s.agent} · ${s.project}</div></div>
          <button class="drawer-close" id="drawerClose">${svg(ICON.close)}</button>
        </div>
        <div class="drawer-body">
          <div class="dr-section">
            <div style="margin-bottom:14px">${statusPill(s.status)}</div>
            <p class="dr-summary" style="margin-bottom:16px">${s.summary}</p>
            <dl class="dr-meta">
              <div><dt>Agent</dt><dd>${s.agent}</dd></div>
              <div><dt>Project</dt><dd>${s.project}</dd></div>
              <div><dt>Model</dt><dd class="mono">${s.model}</dd></div>
              <div><dt>Tokens</dt><dd class="mono">${s.tokens}</dd></div>
              <div><dt>Duration</dt><dd class="mono">${s.dur}</dd></div>
              <div><dt>Started</dt><dd class="mono">${s.started}</dd></div>
            </dl>
          </div>

          ${sec("skills", ICON.sparkles, "Skills used", skillsHTML)}
          ${sec("learn", ICON.brain, "Learnings captured", listHTML(s.learnings, "learn"))}
          ${sec("improve", ICON.wrench, "Improvements made", listHTML(s.improvements, "improve"))}
          ${sec("mem", ICON.memories, "Memories captured", listHTML(s.memories, "mem"))}

          <div class="dr-section">
            <div class="dr-label cap">${svg(ICON.shield)}Verification</div>
            <div class="timeline" style="margin-bottom:14px">
              <div class="tl-step"><span class="tl-dot"></span><div class="tl-title">Session recorded</div><div class="tl-time">inputs + tool calls captured</div></div>
              <div class="tl-step"><span class="tl-dot"></span><div class="tl-title">Outputs hashed</div><div class="tl-time">merkle root computed</div></div>
              <div class="tl-step"><span class="tl-dot"></span><div class="tl-title">Independently verified</div><div class="tl-time">grader ≠ graded</div></div>
            </div>
            ${
              verified
                ? `<div class="proof-card">
              <div class="proof-row"><span class="k">Attestation ID</span><span class="v" style="color:var(--cobalt-deep)">${s.att}</span></div>
              <div class="proof-row"><span class="k">Task</span><span class="v">${s.id}</span></div>
              <div class="proof-row"><span class="k">Signed</span><span class="v">${s.started}</span></div>
              <div class="proof-row" style="display:block;padding-top:10px"><span class="k" style="display:block;margin-bottom:5px">Proof hash (SHA-256)</span>
                <span class="hash">b1f4${id.slice(-4).toLowerCase()}9ad2c70e3f8a41bb6c2e5d09a7f3</span></div>
              <button class="btn-ghost" style="margin-top:12px;width:100%;justify-content:center">${svg(ICON.external)}Open attestation</button>
            </div>`
                : `<div class="proof-card">
              <div class="proof-row"><span class="k">Status</span><span class="v" style="color:var(--pending)">Verification in progress</span></div>
              <div class="proof-row"><span class="k">ETA</span><span class="v">~2 min</span></div></div>`
            }
          </div>
        </div>`;
      drawer.classList.add("open");
      scrim.classList.add("open");
      const closeBtn = byId("drawerClose");
      if (closeBtn) closeBtn.addEventListener("click", closeDrawer);
    }
    function closeDrawer() {
      byId("drawer")?.classList.remove("open");
      byId("scrim")?.classList.remove("open");
    }
    const scrimEl = byId("scrim");
    if (scrimEl) scrimEl.addEventListener("click", closeDrawer);
    const onKeydown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeDrawer();
    };
    document.addEventListener("keydown", onKeydown);

    /* workspace switcher */
    const ws = byId("workspace");
    if (ws) ws.addEventListener("click", () => flash(ws));

    /* ============================================================ BOOT (deep-link aware) */
    renderNav();
    (function boot() {
      const VIEWS = ["overview", "live", "sessions", "agents", "skills", "workflows", "projects", "models", "learnings", "memories"];
      let view = "overview",
        session: string | null = null;
      try {
        if (initialView && VIEWS.includes(initialView)) view = initialView;
        if (initialSession) session = initialSession;
      } catch {
        /* fall back to overview */
      }
      setView(view);
      if (session && SESSIONS.some((x) => x.id === session)) openSession(session);
    })();

    /* ============================================================ CLEANUP */
    return () => {
      stopLive();
      closeKebabs();
      window.removeEventListener("resize", onResize);
      document.removeEventListener("click", onDocClick);
      document.removeEventListener("keydown", onKeydown);
    };
  }, [initialView, initialSession]);

  return (
    <div className="sca-dash" ref={rootRef}>
      <div className="app">
        <aside className="sidebar">
          <div className="brand" id="brand"></div>
          <nav className="nav" id="nav"></nav>
          <div className="nav-spacer"></div>
          <button className="workspace" id="workspace">
            <span className="ws-avatar">AC</span>
            <span className="ws-text">
              <span className="ws-name">Acme Corp</span>
              <span className="ws-sub">Enterprise workspace</span>
            </span>
            <svg
              className="ws-chev"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </button>
        </aside>
        <main className="main" id="main"></main>
      </div>
      <div className="drawer-scrim" id="scrim"></div>
      <aside className="drawer" id="drawer"></aside>
    </div>
  );
}
