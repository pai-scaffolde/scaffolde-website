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
            Personal AI Capability Factory
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
            AI infrastructure
            <br />
            for agents that
            <br />
            <em style={{ fontStyle: "italic", color: "var(--accent)" }}>
              actually do work.
            </em>
          </h1>

          {/* Sub paragraph */}
          <p
            style={{
              marginTop: "24px",
              maxWidth: "38ch",
              color: "var(--body)",
              fontSize: "1.075rem",
            }}
          >
            Define, dispatch, coordinate, verify, and learn across agents,
            skills, memory, surfaces, and proof loops. The operating model that
            runs above the frameworks.
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
              See the proof ledger
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
            { prefix: "SYNC ", bold: "claude", suffix: " · 0 skips" },
            { prefix: "WIRING-AUDIT ", bold: "0 errors", suffix: "" },
            { prefix: "GBRAIN ", bold: "1,595 pages", suffix: " indexed" },
            {
              prefix: "LOOP ",
              bold: "Define→Dispatch→Coordinate→Verify→Learn",
              suffix: "",
            },
            {
              prefix: "PROVIDERS ",
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
