import type { Metadata } from "next";
import Link from "next/link";
import SiteNav from "../components/SiteNav";
import SiteFooter from "../components/SiteFooter";
import Reveal from "../components/Reveal";

const CAL_URL = "https://calendar.app.google/T9vjWKpBvC9w3APV6";

export const metadata: Metadata = {
  title: "Product: Scaffolde verifies everything your AI does",
  description:
    "Scaffolde verifies the whole AI-native business: agents, skills, workflows, sessions, tokens, models, learnings, and memories. Tamper-evident proof of each.",
};

const FEATURES = [
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
    body: "Multi-step pipelines with full run history. Every stage verified and evidenced.",
    icon: (
      <>
        <path d="M4 6h16M4 12h16M4 18h10" />
        <circle cx="19" cy="18" r="2" />
      </>
    ),
  },
  {
    title: "Sessions",
    body: "Every AI session as the unit of work. Each one inspectable and linked to its own attestation.",
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    ),
  },
  {
    title: "Tokens & spend",
    body: "Tokens and cost by model, agent, project, and time. Usage and spend, verified and reportable.",
    icon: (
      <>
        <path d="M3 17l6-6 4 4 7-7" />
        <path d="M14 8h6v6" />
      </>
    ),
  },
  {
    title: "Models, any provider",
    body: "The full model mix: Claude, GPT, Gemini, Grok, DeepSeek, Qwen, and any open-source model you run. Per-model pass rate and cost.",
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
    body: "What the system learned and promoted through its self-improvement loop, with full provenance.",
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
    body: "The tamper-evident proof records themselves: signed, sealed, and ready to put in front of an auditor.",
    icon: (
      <>
        <path d="M12 2 4 6v6c0 5 3.5 8 8 10 4.5-2 8-5 8-10V6Z" />
        <path d="m9 12 2 2 4-4" />
      </>
    ),
  },
];

export default function ProductPage() {
  return (
    <>
      <SiteNav />

      {/* PAGE HERO */}
      <header className="page-hero">
        <Reveal className="wrap">
          <div className="kicker">The product</div>
          <h1>Verify everything your AI actually does.</h1>
          <p className="lede">
            Scaffolde isn&rsquo;t a compliance checkbox. It&rsquo;s the
            verification and observability plane for an AI-native business: every
            model, agent, skill, workflow, session, learning, and memory, recorded
            and independently attested.
          </p>
          <div className="cta">
            <Link href="/dashboard" className="btn btn-primary">
              Inspect a live proof <span className="arr">&rarr;</span>
            </Link>
            <a href={CAL_URL} className="btn btn-ghost">
              Book a call
            </a>
          </div>
        </Reveal>
      </header>

      {/* SELF-SERVE ARTIFACT */}
      <section className="sec">
        <div className="wrap">
          <Reveal className="split">
            <div className="split-body">
              <div className="kicker">Self-serve, not a sales call</div>
              <h2 className="h2-tight">
                Open a real verification artifact right now.
              </h2>
              <p>
                Most AI tools ask you to &ldquo;request a demo.&rdquo; Scaffolde
                hands you the working dashboard. Click into any run and inspect the
                original ask, the action trace, the proof bundle, and the
                independent attestation, exportable and verifiable, end to end.
              </p>
              <div className="badge-row">
                <span className="badge">
                  <span className="dot"></span>Independently attested
                </span>
                <span className="badge badge-mono">SHA-256 sealed</span>
                <span className="badge badge-mono">Exportable evidence</span>
              </div>
              <div className="cta" style={{ marginTop: 24 }}>
                <Link href="/dashboard" className="btn btn-primary">
                  Inspect a live proof <span className="arr">&rarr;</span>
                </Link>
              </div>
            </div>
            <div className="split-media">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/imagery/real-session-detail.png"
                alt="Session detail with verification proof: skills used, learnings captured, improvements, memories, and the sealed attestation"
                width={1600}
                height={1000}
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* WHAT IT VERIFIES */}
      <section className="alt sec">
        <div className="wrap">
          <Reveal className="sec-head sec-head-center">
            <div className="kicker">One plane, every surface</div>
            <h2>What Scaffolde verifies.</h2>
            <p>
              The grader can&rsquo;t be the graded. That now spans your entire
              AI stack, not just a model&rsquo;s output.
            </p>
          </Reveal>
          <Reveal className="feat-grid">
            {FEATURES.map((f) => (
              <div className="feat-card" key={f.title}>
                <div className="feat-ic" aria-hidden="true">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {f.icon}
                  </svg>
                </div>
                <h3>{f.title}</h3>
                <p>{f.body}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ANALYTICS / SCOREBOARD */}
      <section className="sec">
        <div className="wrap">
          <Reveal className="sec-head">
            <div className="kicker">At a glance</div>
            <h2>One scoreboard for the whole AI-native business.</h2>
            <p>
              Verified runs, pass rate, tokens, and spend up top; the model mix,
              top agents, and recent verified sessions below. Everything
              inspectable down to a single attestation. The figures below are
              from the live demo dashboard.
            </p>
          </Reveal>
          <Reveal className="kpi-row">
            <div className="kpi">
              <span className="kpi-num">24,815</span>
              <span className="kpi-label">Verified runs (demo)</span>
            </div>
            <div className="kpi">
              <span className="kpi-num">
                98.6<span className="kpi-unit">%</span>
              </span>
              <span className="kpi-label">Pass rate (demo)</span>
            </div>
            <div className="kpi">
              <span className="kpi-num">
                1.24<span className="kpi-unit">B</span>
              </span>
              <span className="kpi-label">Tokens verified (demo)</span>
            </div>
            <div className="kpi">
              <span className="kpi-num kpi-ok">
                $48.2<span className="kpi-unit">K</span>
              </span>
              <span className="kpi-label">Spend tracked (demo)</span>
            </div>
          </Reveal>
          <Reveal className="wide-shot">
            <div className="shot-glow shot-glow-wide"></div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/imagery/real-overview.png"
              alt="Scaffolde Overview dashboard: verified runs, pass rate, tokens, and spend with model mix, top agents, and recent verified sessions"
              width={1600}
              height={1000}
            />
          </Reveal>
        </div>
      </section>

      {/* PULL QUOTE */}
      <section className="alt sec">
        <Reveal className="wrap">
          <div className="pull">
            <q>
              Your AI vendor can&rsquo;t be the one who certifies your AI worked.
              Scaffolde is the party with no stake in the model&rsquo;s reputation.
            </q>
            <div className="attr">The independent layer</div>
          </div>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="cta-band">
        <Reveal className="wrap cta-band-inner">
          <div>
            <h2>Inspect it yourself.</h2>
            <p>
              Open the live dashboard and click into a real, independently attested
              run. No form, no sales call.
            </p>
          </div>
          <div className="cta-band-actions">
            <Link href="/dashboard" className="btn btn-primary btn-lg">
              Inspect a live proof <span className="arr">&rarr;</span>
            </Link>
            <a href={CAL_URL} className="btn btn-ghost btn-lg">
              Book a call
            </a>
          </div>
        </Reveal>
      </section>

      <SiteFooter />
    </>
  );
}
