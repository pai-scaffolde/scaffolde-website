import Reveal from "../Reveal";

/**
 * "For investors · Pre-seed — someone has to certify AI. It can't be the
 * AI vendors." Three thesis cards. Source: bundle investor thesis block +
 * renderVals().thesis data. Rendered on the navy "diligence" surface
 * (DESIGN.md permits an optional deep-navy investor section).
 */
const THESIS = [
  {
    num: "01",
    h3: "An independent plane",
    p: "Scaffolde sits outside Anthropic, OpenAI, and Google — recording and attesting what every model, agent, and workflow actually did, with no stake in any vendor’s reputation.",
  },
  {
    num: "02",
    h3: "Tamper-evident proof",
    p: "Every run becomes a sealed, signed, exportable record. The artifact is the moat: once it’s the proof a regulator accepts, it’s the standard.",
  },
  {
    num: "03",
    h3: "Become the standard",
    p: "The endgame is to be the notary for AI attestation — the layer every audited AI decision routes through. Narrow wedge, broad future.",
  },
];

export default function InvestorThesis() {
  return (
    <section className="sec navy-sec">
      <div className="wrap">
        <Reveal className="sec-head">
          <div className="kicker">For investors · Pre-seed</div>
          <h2>Someone has to certify AI. It can&rsquo;t be the AI vendors.</h2>
          <p>
            Enterprises are putting AI into decisions they have to defend. The
            companies that build the models can&rsquo;t be the ones who certify
            the models worked. That independent verification layer doesn&rsquo;t
            exist yet — and it&rsquo;s a category, not a feature.
          </p>
        </Reveal>
        <Reveal className="thesis-grid">
          {THESIS.map((t) => (
            <div className="thesis-card" key={t.num}>
              <span className="num">{t.num}</span>
              <h3>{t.h3}</h3>
              <p>{t.p}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
