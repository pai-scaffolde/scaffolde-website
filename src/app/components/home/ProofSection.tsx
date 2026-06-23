import Reveal from "../Reveal";

/**
 * "The proof — every run is a tamper-evident record you can open."
 * Richer than the prior home: the source enumerates the five inspectable
 * parts (A–E). Imagery uses the real session-detail screenshot.
 * Source: bundle "The proof" block.
 */
const PARTS = [
  {
    key: "A",
    title: "The original ask.",
    body: "The exact request the AI was given, captured verbatim.",
  },
  {
    key: "B",
    title: "The action trace.",
    body: "Every step the AI took: tools, calls, and intermediate work.",
  },
  {
    key: "C",
    title: "The proof bundle.",
    body: "Evidence checked against the up-front criteria, sealed and hashed.",
  },
  {
    key: "D",
    title: "The independent attestation.",
    body: "The signature of the party with no stake in the model.",
  },
  {
    key: "E",
    title: "The vendor boundary.",
    body: "Which provider and model ran. Recorded, never trusted to self-certify.",
  },
];

export default function ProofSection() {
  return (
    <section className="alt sec">
      <div className="wrap">
        <Reveal className="split split-rev">
          <div className="split-body">
            <div className="kicker">The proof</div>
            <h2 className="h2-tight">
              Every run is a tamper-evident record you can open.
            </h2>
            <p>
              Not a screenshot of a result. A record of how it was reached.
              Every proof contains five inspectable, exportable parts:
            </p>
            <ul className="proof-parts">
              {PARTS.map((p) => (
                <li key={p.key}>
                  <span className="proof-key" aria-hidden="true">
                    {p.key}
                  </span>
                  <span className="pp-body">
                    <b>{p.title}</b> {p.body}
                  </span>
                </li>
              ))}
            </ul>
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
              alt="Session detail with verification proof: the original ask, action trace, proof bundle, independent attestation, and vendor boundary"
              width={1600}
              height={1000}
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
