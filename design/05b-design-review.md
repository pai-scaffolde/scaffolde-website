# Design Review — scaffolde.ai build plan + rendered artifacts

> `plan-design-review` lens: UX · visual coherence · interaction quality · a11y/polish. Reviewed against the
> actually-rendered preview + variants (not just the plan text). 2026-06-22.

## Information hierarchy
- **Audience-routing fork = UX strength** (two obvious choices, don't-make-me-think). BUT as rendered, the fork is
  "ledger rows with dotted leaders" — elegant, yet **may not read as clickable** (Krug's law: clickable things must
  look clickable without hover). **#1 UX risk.** Fix: stronger affordance + visible focus/hover states; the leading
  `→` helps but isn't enough alone.
- **Variant A (Certificate):** best hierarchy — claim biggest, evidence supporting, fork clearly separated. Strongest 5-second scan.
- **Variant B (Terminal Wall):** the live ledger **dominates and inverts hierarchy** — the claim a cold investor must read first is *smaller* than a wall of mono rows they can't parse in 5s. Demonstrates before it explains. **Highest comprehension risk.**
- **Variant C (Single Artifact):** the card *is* the hierarchy (clean), but the fork as footer links **under-weights the primary navigation**; austerity risks "is this finished / where do I go?"

## Interaction quality
- **Live ticker:** on-brand, but constant motion competes for attention (the "noise" anti-pattern) — argues for keeping it *peripheral*, not central (a strike against B's centered ledger). Reduced-motion path specified ✓.
- **Self-attesting "verify ↗":** great concept; must be instant and open something genuinely real, or it backfires. Polish-critical.
- **"proved" resolve-on-load:** keep the headline readable immediately; the 400ms resolve is a flourish on an already-legible line, not a gate on comprehension.

## Design-system consistency
- System is coherent (confirmed in the render). Strong.
- **Semantic collision to resolve:** the preview uses **green for both the primary CTA and the verified-state** — but DESIGN.md says "green ONLY means verified." A CTA isn't a verified state. **Recommend: reserve green strictly for status; CTAs = paper-white/outline (or brass on /investors).** Otherwise the one-color-one-meaning discipline (the whole thesis) leaks.
- Brass-on-/investors-only: clean, low risk.

## Accessibility & polish risk
- **Small muted-mono metadata** (~0.7rem, `#7C8089` on `#0A0B0D` ≈ 4.6:1) is the real a11y risk — it *carries the proof data* yet is small + low-contrast. Bump size or contrast for mono metadata.
- Fork rows need **focus-visible** states for keyboard nav (currently hover-only).
- Self-hosted Commit Mono needs `font-display` set to avoid CLS.
- **Mobile:** B's ledger wall is hardest to make legible on a phone (a wall of mono rows → tiny). B = highest mobile risk; A/C reflow more cleanly.

## Verdict
System coherent, plan buildable. **Variant recommendation (design lens): A** — safest don't-make-me-think investor
hero. **B has the most impact but the highest comprehension + mobile + hierarchy risk;** if B is chosen, enlarge the
plain-language claim and make the ledger peripheral (which partly defeats B's purpose). A B/A **hybrid** (A's hierarchy
+ a taller live evidence rail) captures most of B's "it's operating" signal without the comprehension cost.

## Must-fix before/at build
1. Make the fork **obviously clickable** + keyboard-focusable.
2. Resolve the **green-CTA vs green-verified** semantic collision (reserve green for status).
3. A11y on **small muted-mono metadata** (size/contrast).
4. **Mobile reflow** plan, especially for any ledger wall.

## ⚠ Cross-lens tension (surface to Gary)
**CEO lens recommends B (impact / "it's already operating"); Design lens recommends A (comprehension / safe scan).**
This is the real trade for the variant pick: *visceral proof* vs *instant clarity*. A B/A hybrid is the synthesis.
