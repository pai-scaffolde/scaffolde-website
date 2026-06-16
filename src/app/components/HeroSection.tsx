import CapabilityMap from "./CapabilityMap";

export default function HeroSection() {
  return (
    <div
      style={{
        padding: "80px 0 64px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Blueprint grid overlay */}
      <div className="blueprint-grid" />

      {/* Main two-column grid */}
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 32px",
          position: "relative",
          display: "grid",
          gridTemplateColumns: "1.35fr 1fr",
          gap: "48px",
          alignItems: "center",
        }}
        className="hero-wrap"
      >
        {/* Left column */}
        <div>
          {/* Kicker label */}
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
            The Independent AI Verification &amp; Audit Plane
          </div>

          {/* H1 */}
          <h1
            style={{
              marginTop: "18px",
              fontFamily: "var(--display)",
              color: "var(--text)",
              fontWeight: 500,
              fontSize: "clamp(2.6rem, 5.5vw, 4.6rem)",
              lineHeight: 1.0,
              letterSpacing: "-0.025em",
            }}
          >
            The grader
            <br />
            can&apos;t be
            <br />
            <em style={{ fontStyle: "italic", color: "var(--accent)" }}>
              the graded.
            </em>
          </h1>

          {/* Sub paragraph */}
          <p
            style={{
              marginTop: "24px",
              maxWidth: "42ch",
              color: "var(--body)",
              fontSize: "1.075rem",
            }}
          >
            A portable, tamper-evident record of what any AI system was asked,
            did, and proved — across Anthropic, OpenAI, and Google. Acceptance
            criteria set before work begins; checked, evidenced, and attested by
            a party with no stake in the model&apos;s reputation.
          </p>

          {/* Inventory readouts */}
          <div
            style={{
              marginTop: "32px",
              display: "flex",
              gap: "22px",
              flexWrap: "wrap",
            }}
          >
            {[
              { n: "158", u: "Skills" },
              { n: "41", u: "Agents" },
              { n: "7", u: "Providers" },
              { n: "12", u: "Surfaces" },
            ].map((item) => (
              <div
                key={item.u}
                style={{
                  fontFamily: "var(--mono)",
                  fontVariantNumeric: "tabular-nums",
                }}
              >
                <span
                  style={{
                    color: "var(--text)",
                    fontSize: "1.4rem",
                    fontWeight: 700,
                    display: "block",
                  }}
                >
                  {item.n}
                </span>
                <span
                  style={{
                    color: "var(--muted)",
                    fontSize: "0.7rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    display: "block",
                    marginTop: "2px",
                  }}
                >
                  {item.u}
                </span>
              </div>
            ))}
          </div>

          {/* CTA buttons */}
          <div style={{ marginTop: "36px", display: "flex", gap: "12px" }}>
            <a
              href="https://calendar.app.google/T9vjWKpBvC9w3APV6"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "var(--mono)",
                fontSize: "0.8rem",
                textTransform: "uppercase",
                letterSpacing: "0.06em",
                padding: "12px 20px",
                borderRadius: "var(--r-md)",
                textDecoration: "none",
                cursor: "pointer",
                border: "1px solid transparent",
                background: "var(--accent)",
                color: "#06201E",
                fontWeight: 700,
                display: "inline-block",
              }}
            >
              Book a demo
            </a>
            <a
              href="#proof"
              style={{
                fontFamily: "var(--mono)",
                fontSize: "0.8rem",
                textTransform: "uppercase",
                letterSpacing: "0.06em",
                padding: "12px 20px",
                borderRadius: "var(--r-md)",
                textDecoration: "none",
                cursor: "pointer",
                border: "1px solid var(--line)",
                background: "transparent",
                color: "var(--body)",
                display: "inline-block",
              }}
            >
              See the audit ledger
            </a>
          </div>
        </div>

        {/* Right column: Capability Map */}
        <CapabilityMap />
      </div>

      {/* Proof ticker strip */}
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 32px",
        }}
      >
        <div
          style={{
            marginTop: "40px",
            borderTop: "1px solid var(--line)",
            borderBottom: "1px solid var(--line)",
            padding: "12px 0",
            display: "flex",
            gap: "34px",
            overflow: "hidden",
          }}
        >
          {[
            { prefix: "POSITION ", bold: "independent verifier", suffix: " · not the model vendor" },
            { prefix: "CONTRACT ", bold: "ISA / ISC", suffix: " · criteria set before work" },
            {
              prefix: "STATUS ",
              bold: "evidenced · partial · do-not-claim-yet",
              suffix: "",
            },
            { prefix: "LEDGER ", bold: "tamper-evident", suffix: " · belongs to the customer" },
            {
              prefix: "ACROSS ",
              bold: "anthropic · openai · gemini · grok · nim · ollama · qwen-local",
              suffix: "",
            },
          ].map((item, i) => (
            <span
              key={i}
              style={{
                fontFamily: "var(--mono)",
                fontSize: "0.72rem",
                color: "var(--muted)",
                whiteSpace: "nowrap",
              }}
            >
              {item.prefix}
              <strong style={{ color: "var(--body)" }}>{item.bold}</strong>
              {item.suffix}
            </span>
          ))}
        </div>
      </div>

      {/* Responsive style for small screens */}
      <style>{`
        @media (max-width: 860px) {
          .hero-wrap {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
