"use client";

import { useState, useEffect } from "react";
import { useReducedMotion } from "motion/react";

interface Phase {
  num: string;
  label: string;
}

const phases: Phase[] = [
  { num: "01", label: "Define" },
  { num: "02", label: "Dispatch" },
  { num: "03", label: "Coordinate" },
  { num: "04", label: "Verify" },
  { num: "05", label: "Learn" },
];

export default function FivePhaseLoop() {
  const shouldReduceMotion = useReducedMotion();
  // -1 = none lit, 0..4 = index lit, 5 = all settled
  const [activePhase, setActivePhase] = useState<number>(-1);

  useEffect(() => {
    if (shouldReduceMotion) {
      setActivePhase(5);
      return;
    }

    let i = 0;
    const interval = setInterval(() => {
      if (i < phases.length) {
        setActivePhase(i);
        i++;
      } else {
        clearInterval(interval);
        setActivePhase(5);
      }
    }, 420);

    return () => clearInterval(interval);
  }, [shouldReduceMotion]);

  function isLit(index: number): boolean {
    if (activePhase === 5) return false; // settled — no glow
    return index === activePhase;
  }

  return (
    <section
      id="loop"
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
            Every phase asks a verification question
          </div>
          <h2
            style={{
              fontFamily: "var(--display)",
              color: "var(--text)",
              fontWeight: 500,
              fontSize: "2rem",
              lineHeight: 1.1,
              letterSpacing: "-0.01em",
              marginBottom: "8px",
              marginTop: "4px",
            }}
          >
            Five phases. One heartbeat.
          </h2>
        </div>

        {/* Phase nodes */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 0,
            flexWrap: "wrap",
          }}
        >
          {phases.map((phase, i) => (
            <div
              key={phase.num}
              style={{ display: "flex", alignItems: "center" }}
            >
              <div
                style={{
                  fontFamily: "var(--mono)",
                  fontSize: "0.8rem",
                  padding: "10px 16px",
                  border: "1px solid",
                  borderRadius: "var(--r-md)",
                  background: "var(--surface)",
                  transition: "all 0.3s ease",
                  borderColor: isLit(i) ? "var(--accent)" : "var(--line)",
                  color: isLit(i) ? "var(--accent)" : "var(--body)",
                  boxShadow: isLit(i)
                    ? "0 0 0 1px color-mix(in srgb, var(--accent) 30%, transparent)"
                    : "none",
                }}
              >
                <span style={{ color: "var(--muted)", marginRight: "8px" }}>
                  {phase.num}
                </span>
                {phase.label}
              </div>
              {i < phases.length - 1 && (
                <span
                  style={{
                    color: "var(--line)",
                    margin: "0 10px",
                    fontFamily: "var(--mono)",
                  }}
                >
                  →
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
