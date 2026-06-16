import { ProofBadge, type Variant } from "./StatusBadge";

interface LedgerRow {
  layer: string;
  metric: string;
  variant: Variant;
}

const ledgerRows: LedgerRow[] = [
  { layer: "Algorithm spine", metric: "ISA/ISC contract", variant: "evidenced" },
  { layer: "Skills", metric: "158 manifests", variant: "evidenced" },
  { layer: "Agents", metric: "41 specialists", variant: "partial" },
  { layer: "Memory", metric: "1,595 pages", variant: "partial" },
  { layer: "Traction", metric: "ARR / retention", variant: "noclaim" },
];

export default function ProofLedger() {
  return (
    <section
      id="proof"
      style={{
        padding: "96px 0",
        borderTop: "1px solid var(--line)",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 32px",
        }}
      >
        {/* Kicker */}
        <div style={{ marginBottom: "40px" }}>
          <div
            style={{
              fontFamily: "var(--mono)",
              fontSize: "0.6875rem",
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              color: "var(--muted)",
              fontWeight: 500,
            }}
          >
            The audit ledger · the governance artifact, shown not hidden
          </div>
          <h2
            style={{
              fontFamily: "var(--display)",
              color: "var(--text)",
              fontWeight: 500,
              fontSize: "2rem",
              lineHeight: 1.1,
              letterSpacing: "-0.01em",
              marginTop: "4px",
            }}
          >
            Proof, not marketing.
          </h2>
        </div>

        {/* Two-column grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "24px",
          }}
          className="proof-grid"
        >
          {/* Left: agent.json panel */}
          <div
            style={{
              border: "1px solid var(--line)",
              borderRadius: "var(--r-lg)",
              background: "#0c0e11",
              overflow: "hidden",
            }}
          >
            {/* Bar */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "10px 14px",
                borderBottom: "1px solid var(--line)",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--mono)",
                  fontSize: "0.6875rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.12em",
                  color: "var(--muted)",
                  fontWeight: 500,
                }}
              >
                GET /.well-known/agent.json
              </span>
              <ProofBadge variant="evidenced" />
            </div>
            {/* Code block */}
            <pre
              style={{
                padding: "18px",
                fontFamily: "var(--mono)",
                fontSize: "0.78rem",
                color: "#aeb6c2",
                overflow: "auto",
                lineHeight: 1.7,
                margin: 0,
              }}
            >
              <span style={{ color: "var(--accent)" }}>&quot;name&quot;</span>
              {": "}
              <span style={{ color: "var(--evidenced)" }}>&quot;Scaffolde&quot;</span>
              {",\n"}
              <span style={{ color: "var(--accent)" }}>&quot;category&quot;</span>
              {": "}
              <span style={{ color: "var(--evidenced)" }}>
                &quot;Independent AI Verification &amp; Audit Plane&quot;
              </span>
              {",\n"}
              <span style={{ color: "var(--accent)" }}>&quot;stack_layers&quot;</span>
              {": "}
              <span style={{ color: "var(--evidenced)" }}>6</span>
              {",\n"}
              <span style={{ color: "var(--accent)" }}>&quot;skills&quot;</span>
              {": "}
              <span style={{ color: "var(--evidenced)" }}>158</span>
              {",\n"}
              <span style={{ color: "var(--accent)" }}>&quot;agents&quot;</span>
              {": "}
              <span style={{ color: "var(--evidenced)" }}>41</span>
              {",\n"}
              <span style={{ color: "var(--accent)" }}>&quot;surfaces&quot;</span>
              {": "}
              <span style={{ color: "var(--evidenced)" }}>12</span>
              {",\n"}
              <span style={{ color: "var(--accent)" }}>&quot;proof_policy&quot;</span>
              {": "}
              <span style={{ color: "var(--evidenced)" }}>
                &quot;evidenced | partial | do-not-claim-yet&quot;
              </span>
              {",\n"}
              <span style={{ color: "var(--accent)" }}>&quot;human_note&quot;</span>
              {": "}
              <span style={{ color: "var(--evidenced)" }}>
                &quot;You are human, but your agent can read this.&quot;
              </span>
            </pre>
          </div>

          {/* Right: proof ledger table */}
          <div
            style={{
              border: "1px solid var(--line)",
              borderRadius: "var(--r-lg)",
              background: "var(--surface)",
              overflow: "hidden",
            }}
          >
            <div style={{ padding: "16px 16px 0" }}>
              <div
                style={{
                  fontFamily: "var(--mono)",
                  fontSize: "0.6875rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.12em",
                  color: "var(--muted)",
                  fontWeight: 500,
                }}
              >
                Proof ledger — live status
              </div>
            </div>
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                fontSize: "0.85rem",
              }}
            >
              <thead>
                <tr>
                  {["Layer", "Metric", "Status"].map((h) => (
                    <th
                      key={h}
                      style={{
                        textAlign: "left",
                        fontFamily: "var(--mono)",
                        fontSize: "0.65rem",
                        textTransform: "uppercase",
                        letterSpacing: "0.08em",
                        color: "var(--muted)",
                        padding: "10px 12px",
                        borderBottom: "1px solid var(--line)",
                      }}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {ledgerRows.map((row, i) => (
                  <tr key={row.layer}>
                    <td
                      style={{
                        padding: "11px 12px",
                        borderBottom:
                          i < ledgerRows.length - 1
                            ? "1px solid var(--line)"
                            : "none",
                        color: "var(--body)",
                      }}
                    >
                      {row.layer}
                    </td>
                    <td
                      style={{
                        padding: "11px 12px",
                        borderBottom:
                          i < ledgerRows.length - 1
                            ? "1px solid var(--line)"
                            : "none",
                        color: "var(--text)",
                        fontFamily: "var(--mono)",
                      }}
                    >
                      {row.metric}
                    </td>
                    <td
                      style={{
                        padding: "11px 12px",
                        borderBottom:
                          i < ledgerRows.length - 1
                            ? "1px solid var(--line)"
                            : "none",
                      }}
                    >
                      <ProofBadge variant={row.variant} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .proof-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
