"use client";

import { useState } from "react";

export default function TopBar() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  function toggleTheme() {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.dataset.theme = next;
  }

  return (
    <div
      className="topbar"
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        backdropFilter: "blur(8px)",
        borderBottom: "1px solid var(--line)",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 32px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "56px",
        }}
      >
        {/* Brand */}
        <div
          style={{
            fontFamily: "var(--display)",
            fontSize: "1.25rem",
            color: "var(--text)",
            fontWeight: 600,
            letterSpacing: "-0.01em",
          }}
        >
          Scaffolde
          <span style={{ color: "var(--accent)" }}>.</span>
        </div>

        {/* Nav */}
        <nav
          style={{
            display: "flex",
            gap: "28px",
            alignItems: "center",
          }}
        >
          {[
            { label: "Stack", href: "#" },
            { label: "Proof", href: "#proof" },
            { label: "Surfaces", href: "#" },
            { label: "Investors", href: "#" },
            { label: "Docs", href: "#" },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              style={{
                fontFamily: "var(--mono)",
                fontSize: "0.75rem",
                color: "var(--muted)",
                textDecoration: "none",
                textTransform: "uppercase",
                letterSpacing: "0.06em",
              }}
              className="nav-link hidden sm:inline"
            >
              {link.label}
            </a>
          ))}

          <button
            onClick={toggleTheme}
            style={{
              fontFamily: "var(--mono)",
              fontSize: "0.7rem",
              background: "var(--surface)",
              border: "1px solid var(--line)",
              color: "var(--body)",
              padding: "6px 12px",
              borderRadius: "var(--r-md)",
              cursor: "pointer",
              textTransform: "uppercase",
              letterSpacing: "0.06em",
            }}
          >
            ◐ Theme
          </button>
        </nav>
      </div>
    </div>
  );
}
