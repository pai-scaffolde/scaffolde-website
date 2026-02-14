"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "motion/react";

interface TerminalLine {
  text: string;
  type: "command" | "blank" | "header" | "agent" | "result" | "success";
  delay: number;
}

const lines: TerminalLine[] = [
  {
    text: '$ scaffolde research "AI agent orchestration patterns 2026"',
    type: "command",
    delay: 600,
  },
  { text: "", type: "blank", delay: 400 },
  { text: "\u25C6 Dispatching 5 research agents", type: "header", delay: 500 },
  { text: "", type: "blank", delay: 250 },
  {
    text: "  Claude      \u2192 academic survey + systematic review",
    type: "agent",
    delay: 180,
  },
  {
    text: "  GPT-5.3     \u2192 industry analysis + case studies",
    type: "agent",
    delay: 180,
  },
  {
    text: "  Gemini      \u2192 competitive landscape + trends",
    type: "agent",
    delay: 180,
  },
  {
    text: "  Kimi        \u2192 deep technical papers (256K context)",
    type: "agent",
    delay: 180,
  },
  {
    text: "  Grok        \u2192 contrarian analysis + blind spots",
    type: "agent",
    delay: 180,
  },
  { text: "", type: "blank", delay: 700 },
  {
    text: "\u25C6 Synthesizing across 5 perspectives...",
    type: "header",
    delay: 900,
  },
  { text: "", type: "blank", delay: 250 },
  { text: "  47 sources analyzed", type: "result", delay: 220 },
  { text: "  12 key findings extracted", type: "result", delay: 220 },
  {
    text: "   3 novel insights (not in any single source)",
    type: "result",
    delay: 220,
  },
  { text: "", type: "blank", delay: 400 },
  {
    text: "\u25C6 Memory updated \u00B7 Action items created",
    type: "header",
    delay: 500,
  },
  { text: "", type: "blank", delay: 300 },
  {
    text: "\u2713 5 agents \u00B7 47 sources \u00B7 16.3 seconds",
    type: "success",
    delay: 0,
  },
];

export function Terminal() {
  const [visibleCount, setVisibleCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView && !hasStarted) {
      const timer = setTimeout(() => setHasStarted(true), 800);
      return () => clearTimeout(timer);
    }
  }, [isInView, hasStarted]);

  useEffect(() => {
    if (!hasStarted || visibleCount >= lines.length) return;

    const currentLine = lines[visibleCount];
    const timer = setTimeout(() => {
      setVisibleCount((v) => v + 1);
    }, currentLine.delay);

    return () => clearTimeout(timer);
  }, [hasStarted, visibleCount]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20, scale: 0.98 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
      className="terminal w-full max-w-[560px]"
    >
      <div className="terminal-header">
        <div className="flex gap-[7px]">
          <div className="terminal-dot" style={{ background: "#ff5f57" }} />
          <div className="terminal-dot" style={{ background: "#febc2e" }} />
          <div className="terminal-dot" style={{ background: "#28c840" }} />
        </div>
        <span
          className="text-[11px] ml-2 tracking-wider"
          style={{
            color: "rgba(255,255,255,0.25)",
            fontFamily: "var(--font-jetbrains)",
          }}
        >
          scaffolde
        </span>
      </div>
      <div className="terminal-body">
        {lines.slice(0, visibleCount).map((line, i) => (
          <div
            key={i}
            className={`terminal-line-${line.type}`}
            style={{
              minHeight: line.type === "blank" ? "1.2em" : undefined,
              whiteSpace: "pre",
            }}
          >
            {line.text}
          </div>
        ))}
        {visibleCount < lines.length && hasStarted && (
          <span className="cursor-blink">{"\u2588"}</span>
        )}
      </div>
    </motion.div>
  );
}
