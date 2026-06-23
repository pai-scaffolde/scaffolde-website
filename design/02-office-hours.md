# Office Hours: scaffolde.ai Front Door

> Produced by the `office-hours` skill (startup mode), 2026-06-22.
> Continuation of `design/01-first-principles.md`. Approach selected by Gary at the workflow's human gate.

## Problem Statement
scaffolde.ai is the front door for an active $2M pre-seed raise (binding time
constraint) and, secondarily, for prospective clients/design partners. The live
v2 page forces three audiences (investor, client, skeptic) onto one
undifferentiated page with category jargon and vanity capability counts, so no
single decision is optimized.

## Demand Evidence
- Structural: independent AI verification rides a real regulatory + enterprise-governance wave; the "grader can't be the graded" gap is genuine (model vendors grade their own models).
- Founder-market fit: Gary lives inside a large enterprise's AI-adoption problem (Sr Principal Enterprise Architect, Comcast Advertising) — the surprise/credibility wedge.
- Campaign state: 116 ranked firms + Top-25 identified, $2M pre-seed proposed, **no outreach emails sent yet — site v2 deploy is the explicit pre-outreach gate.**

## Status Quo (what we're displacing)
- For the **investor**: a deck + a call; the website is the pre-call credibility filter.
- For the **buyer** Scaffolde ultimately serves: internal eval teams, manual spot checks, and vendor-supplied benchmarks — i.e. the grader IS the graded. That gap is the wedge.

## Target User and Narrowest Wedge
- Site's primary persona: the pre-seed investor who leads AI-infra/governance rounds.
- Implied buyer persona: a regulated enterprise that must attest AI decisions to an auditor/regulator.

## Constraints
- HARD: for a verification product, the site must itself be inspectable evidence.
- HARD: first viewport resolves "what is this + why credible" in plain language.
- HARD: performance + a11y + mobile (attention physics).
- TIME: the raise is the binding constraint; deploy is the pre-outreach gate.
- KEEP: serious "instrument" character (advances credibility) — earn it, don't assert it.

## Premises (confirmed)
1. The dominant, time-bound audience is the **investor**.
2. The thesis must appear in **plain language above** the clever "grader can't be graded" line.
3. Proof = **one inspectable verification artifact**, not vanity counts.
4. Client booking is a **secondary** path, not a co-equal CTA.

## Approaches Considered
- **Minimal:** refactor v2 in place (swap headline, replace counts, demote booking, add investor strip). Ships fastest.
- **Ideal (SELECTED):** audience-routed site — shared plain-thesis hero + Evaluating/Investing fork → `/product` and `/investors`.
- **Lateral:** self-attesting page where every claim opens its evidence record. Highest signal, highest build/risk.

## Recommended Approach — SELECTED: Audience-routed site
```
HERO (shared): plain-language thesis + founder credibility, "grader can't be graded" as kicker
   ┌── Evaluating Scaffolde → /product ──┬── Investing → /investors ──┐
/product:   live inspectable verification artifact · secondary "Book a call"
/investors: thesis · market/why-now · why-this-founder · traction · data-room link
```
Rationale: gives each decision its own focused conversion while a shared hero
still resolves "what + why credible" in one viewport. The lateral self-attesting
mechanism is folded in as the **proof artifact** on `/product` (and optionally the
hero), capturing most of its signal without making the whole site depend on it.

## Open Questions (need Gary, non-blocking — flagged for /investors content)
1. **Venture-vs-service framing** (the riskiest assumption): does the investor narrative position Scaffolde as a venture-scale product or risk reading as consulting? Needs an explicit "why this is a platform, not a service" beat.
2. **Founder commitment signal:** is the W-2-at-Comcast status addressed (full-time intent / transition plan)? Investors will ask.
3. **Traction proof:** what is the single strongest real traction artifact we can show (a live attestation record, a pilot, a design partner)?
4. **Data room:** is there a data-room link ready to wire into `/investors`?

## Success Criteria
- First viewport communicates thesis + credibility in plain language (no undefined jargon).
- Exactly one primary action per route; client booking is secondary.
- At least one inspectable proof artifact present and real.
- Page ships fast/accessible/mobile (clears the pre-outreach deploy gate).

## The Assignment (next action)
Carry the selected audience-routed structure + the carry-forward constraints into
`design-consultation` (stage 3) to produce the full design system and `DESIGN.md`.
