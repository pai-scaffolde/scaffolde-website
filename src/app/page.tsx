import Link from "next/link";
import SiteNav from "./components/SiteNav";
import SiteFooter from "./components/SiteFooter";
import Reveal from "./components/Reveal";

const CAL_URL = "https://calendar.app.google/T9vjWKpBvC9w3APV6";

export default function Home() {
  return (
    <>
      <SiteNav />

      {/* HERO */}
      <header className="hero">
        <div className="wrap hero-grid">
          <Reveal className="hero-copy">
            <div className="kicker">Independent AI verification &amp; audit</div>
            <h1>
              Independent proof of what your AI{" "}
              <span className="grad">actually did.</span>
            </h1>
            <p className="lede">
              Scaffolde records what every model, agent, and workflow across your
              business was asked, did, and proved — across Anthropic, OpenAI, and
              Google — and attests it independently. The grader can&rsquo;t be the
              graded.
            </p>
            <div className="cta">
              <Link href="/dashboard" className="btn btn-primary">
                Inspect a live proof <span className="arr">&rarr;</span>
              </Link>
              <Link href="/product" className="btn btn-ghost">
                See the product
              </Link>
            </div>
            <ul className="trust">
              <li>
                <span className="tick">✓</span> Tamper-evident records
              </li>
              <li>
                <span className="tick">✓</span> Multi-provider
              </li>
              <li>
                <span className="tick">✓</span> Independent attestation
              </li>
            </ul>
          </Reveal>
          <Reveal className="hero-shot">
            <div className="shot-glow"></div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/imagery/real-overview.png"
              alt="Scaffolde Overview dashboard: independently verified runs, pass rate, and per-model mix across providers"
              width={1600}
              height={1000}
              loading="eager"
            />
          </Reveal>
        </div>
      </header>

      {/* TRUST STRIP */}
      <div className="strip">
        <div className="wrap strip-inner">
          <span className="strip-label">Verifies AI work across</span>
          <span className="strip-prov">Anthropic Claude</span>
          <span className="strip-dot">·</span>
          <span className="strip-prov">OpenAI GPT</span>
          <span className="strip-dot">·</span>
          <span className="strip-prov">Google Gemini</span>
          <span className="strip-sep"></span>
          <span className="strip-note">
            Agents · Skills · Workflows · Sessions · Learnings · Memories
          </span>
        </div>
      </div>

      {/* AUDIENCE FORK */}
      <section className="fork">
        <div className="wrap">
          <div className="fork-grid">
            <Reveal className="fork-card" href="/product">
              <div className="kicker">For teams</div>
              <h3>Evaluating Scaffolde</h3>
              <p>
                Open a real, inspectable verification artifact and see how
                independent attestation works across every model, agent, and
                workflow you run.
              </p>
              <span className="go">
                Explore the product <span className="arr">&rarr;</span>
              </span>
            </Reveal>
            <Reveal className="fork-card" href="/investors">
              <div className="kicker">For investors</div>
              <h3>Investing in the category</h3>
              <p>
                The thesis, the market and why now, the wedge, the founder, and
                the path into the data room.
              </p>
              <span className="go">
                See the opportunity <span className="arr">&rarr;</span>
              </span>
            </Reveal>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="alt sec">
        <div className="wrap">
          <Reveal className="sec-head">
            <div className="kicker">How it works</div>
            <h2>
              An independent layer between your AI and the people who must trust
              it.
            </h2>
            <p>
              Scaffolde sits outside the model vendors. It sets acceptance
              criteria before the work begins, then checks, evidences, and
              attests the result — so the party proving the work has no stake in
              the model&rsquo;s reputation.
            </p>
          </Reveal>
          <Reveal className="split">
            <div className="split-media">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/imagery/scaffolde-plane-diagram.png"
                alt="Diagram: Scaffolde as the independent verification layer sitting between AI providers and the enterprise"
                width={900}
                height={640}
              />
            </div>
            <div className="split-body">
              <div className="step">
                <span className="step-n">1</span>
                <div>
                  <b>Criteria set up front.</b> Acceptance criteria are defined
                  before the AI does the work — so &ldquo;done&rdquo; is decided
                  independently, not after the fact.
                </div>
              </div>
              <div className="step">
                <span className="step-n">2</span>
                <div>
                  <b>Checked &amp; evidenced.</b> What the AI was asked, the
                  actions it took, and what it produced are captured and verified
                  against the criteria.
                </div>
              </div>
              <div className="step">
                <span className="step-n">3</span>
                <div>
                  <b>Independently attested.</b> A party with no stake in the
                  model&rsquo;s reputation signs a tamper-evident proof you can
                  open, export, and audit.
                </div>
              </div>
              <Link href="/how-it-works" className="link-arrow">
                Read the full story <span className="arr">&rarr;</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* THE PROOF */}
      <section className="sec">
        <div className="wrap">
          <Reveal className="split split-rev">
            <div className="split-body">
              <div className="kicker">The proof</div>
              <h2 className="h2-tight">
                Every run produces a tamper-evident record you can open.
              </h2>
              <p>
                The original ask, the action trace, the proof bundle, the
                independent attestation, and the vendor boundary — all
                inspectable, exportable, and verifiable. Not a screenshot of a
                result. A record of how it was reached.
              </p>
              <div className="badge-row">
                <span className="badge">
                  <span className="dot"></span>Independently attested
                </span>
                <span className="badge badge-mono">SHA-256 sealed</span>
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

      {/* SCOREBOARD TEASER */}
      <section className="alt sec">
        <div className="wrap">
          <Reveal className="sec-head sec-head-center">
            <div className="kicker">The verification scoreboard</div>
            <h2>
              Not just compliance. Observability for everything your AI does.
            </h2>
            <p>
              Scaffolde verifies the whole AI-native business — every model,
              agent, skill, workflow, session, learning, and memory — and rolls
              it up into one scoreboard you can report on.
            </p>
          </Reveal>
          <Reveal className="kpi-row">
            <div className="kpi">
              <span className="kpi-num">24,815</span>
              <span className="kpi-label">Verified runs</span>
            </div>
            <div className="kpi">
              <span className="kpi-num">
                98.6<span className="kpi-unit">%</span>
              </span>
              <span className="kpi-label">Pass rate</span>
            </div>
            <div className="kpi">
              <span className="kpi-num">
                1.24<span className="kpi-unit">B</span>
              </span>
              <span className="kpi-label">Tokens verified</span>
            </div>
            <div className="kpi">
              <span className="kpi-num kpi-ok">
                $48.2<span className="kpi-unit">K</span>
              </span>
              <span className="kpi-label">Spend tracked</span>
            </div>
          </Reveal>
          <Reveal className="chip-row">
            <span className="chip-stat">
              <b>4</b> Models
            </span>
            <span className="chip-stat">
              <b>37</b> Agents
            </span>
            <span className="chip-stat">
              <b>116</b> Skills
            </span>
            <span className="chip-stat">
              <b>24</b> Workflows
            </span>
            <span className="chip-stat">
              <b>12.9K</b> Sessions
            </span>
            <span className="chip-stat">
              <b>342</b> Learnings
            </span>
            <span className="chip-stat">
              <b>1.1K</b> Memories
            </span>
          </Reveal>
        </div>
      </section>

      {/* ATTESTATIONS SCREEN */}
      <section className="sec">
        <div className="wrap">
          <Reveal className="sec-head">
            <div className="kicker">Reportable</div>
            <h2>Verification you can put in front of an auditor.</h2>
            <p>
              Pass rates, provider coverage, and a running, tamper-evident record
              of every attestation — the evidence a regulated buyer needs to prove
              an AI decision to a third party.
            </p>
          </Reveal>
          <Reveal className="wide-shot">
            <div className="shot-glow shot-glow-wide"></div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/imagery/real-overview.png"
              alt="Scaffolde Overview dashboard: pass rates, provider coverage, and a running record of verified runs"
              width={1600}
              height={1000}
            />
          </Reveal>
        </div>
      </section>

      {/* SEE IT LIVE CTA */}
      <section className="cta-band">
        <Reveal className="wrap cta-band-inner">
          <div>
            <h2>See it live.</h2>
            <p>
              This isn&rsquo;t a request-a-demo form. Open the real dashboard and
              inspect a live verification proof yourself.
            </p>
          </div>
          <div className="cta-band-actions">
            <Link href="/dashboard" className="btn btn-primary btn-lg">
              Inspect a live proof <span className="arr">&rarr;</span>
            </Link>
            <Link href="/dashboard" className="btn btn-ghost btn-lg">
              Get started
            </Link>
          </div>
        </Reveal>
      </section>

      <SiteFooter />
    </>
  );
}

export { CAL_URL };
