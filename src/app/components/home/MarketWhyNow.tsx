import Reveal from "../Reveal";

/**
 * "Market & why now — the governance wave is arriving before the proof
 * layer exists." Four why-now items. Source: bundle "Market & why now"
 * block + renderVals().whyNow data.
 */
const WHY_NOW = [
  {
    h3: "Regulation is enforcing",
    p: "The EU AI Act and a wave of sector rules now demand auditable evidence of how AI reached a decision — not vendor assurances.",
  },
  {
    h3: "Governance budgets are funded",
    p: "AI observability and governance has become a named line item. Enterprises are buying the means to prove their AI, not just run it.",
  },
  {
    h3: "Agents made it urgent",
    p: "Autonomous agents act across the business. “Did the model give a good answer” became “what did our agents actually do, everywhere, and can we prove it.”",
  },
  {
    h3: "No independent layer exists",
    p: "Every current tool either belongs to a model vendor or grades the model with the model. The neutral party is an open lane.",
  },
];

export default function MarketWhyNow() {
  return (
    <section className="sec">
      <div className="wrap">
        <Reveal className="sec-head">
          <div className="kicker">Market &amp; why now</div>
          <h2>The governance wave is arriving before the proof layer exists.</h2>
          <p>
            AI moved into regulated, high-stakes decisions faster than anyone
            built the means to verify it. The enforcement and the budgets are
            landing now — the independent proof layer is the missing piece.
          </p>
        </Reveal>
        <Reveal className="deflist">
          {WHY_NOW.map((w) => (
            <div className="defitem" key={w.h3}>
              <h3>{w.h3}</h3>
              <p>{w.p}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
