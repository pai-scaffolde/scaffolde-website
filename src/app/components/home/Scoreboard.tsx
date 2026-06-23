import Reveal from "../Reveal";

/**
 * "The verification scoreboard." KPI row + entity chips + the live
 * Overview render. Source: bundle "The verification scoreboard" block.
 * Chip values follow the source bundle (now canonical).
 */
const CHIPS = [
  { n: "16", label: "Models" },
  { n: "12", label: "Agents" },
  { n: "9", label: "Skills" },
  { n: "5", label: "Workflows" },
  { n: "3,402", label: "Sessions" },
  { n: "72", label: "Learnings" },
  { n: "1,118", label: "Memories" },
];

export default function Scoreboard() {
  return (
    <section className="alt sec">
      <div className="wrap">
        <Reveal className="sec-head sec-head-center">
          <div className="kicker">The verification scoreboard</div>
          <h2>Not just compliance. Observability for everything your AI does.</h2>
          <p>
            Every model, agent, skill, workflow, session, learning, and memory —
            rolled up into one scoreboard you can report on.
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
          {CHIPS.map((c) => (
            <span className="chip-stat" key={c.label}>
              <b>{c.n}</b> {c.label}
            </span>
          ))}
        </Reveal>
        <Reveal className="wide-shot" style={{ marginTop: "44px" }}>
          <div className="shot-glow shot-glow-wide"></div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/imagery/real-live.png"
            alt="Scaffolde live verification view: real-time verified runs streaming across providers"
            width={1600}
            height={1000}
          />
        </Reveal>
      </div>
    </section>
  );
}
