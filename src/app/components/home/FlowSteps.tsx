import Reveal from "../Reveal";

/**
 * "The flow — Verify → attest → prove → audit." Four numbered steps.
 * Source: bundle "The flow" block + its renderVals().flow data.
 */
const FLOW = [
  {
    fn: "01 / VERIFY",
    h3: "Criteria, then check",
    p: "Acceptance criteria are set before the AI does the work. When the run finishes, its ask, actions, and output are checked against those criteria.",
  },
  {
    fn: "02 / ATTEST",
    h3: "Independent signature",
    p: "A party with no stake in the model signs the result — recording what was asked, what was done, and whether it passed.",
  },
  {
    fn: "03 / PROVE",
    h3: "Tamper-evident bundle",
    p: "The action trace, evidence, and attestation are sealed into a SHA-256 proof bundle you can open, export, and verify.",
  },
  {
    fn: "04 / AUDIT",
    h3: "Reportable record",
    p: "Every proof rolls up into a running, queryable record — pass rates, provider coverage, and full history for any auditor.",
  },
];

export default function FlowSteps() {
  return (
    <section className="sec">
      <div className="wrap">
        <Reveal className="sec-head">
          <div className="kicker">The flow</div>
          <h2>Verify → attest → prove → audit.</h2>
          <p>
            Four steps turn an AI run into a tamper-evident record anyone can
            check.
          </p>
        </Reveal>
        <Reveal className="flow">
          {FLOW.map((f) => (
            <div className="flow-step" key={f.fn}>
              <span className="fn">{f.fn}</span>
              <h3>{f.h3}</h3>
              <p>{f.p}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
