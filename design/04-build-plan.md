# Build Plan — scaffolde.ai redesign

> Stage 5 input. Derived from design/01–03 + DESIGN.md. To be reviewed by plan-ceo-review + plan-design-review.

## Objective
Ship an audience-routed scaffolde.ai that converts the **investor** decision first (binding constraint:
active $2M pre-seed; deploy is the pre-outreach gate), serves enterprise evaluators second, and satisfies
technical skeptics via inspectable evidence — while the site itself reads as proof of the verification thesis.

## Information architecture
- `/` — shared hero (plain-language thesis + founder credibility) → audience fork (Evaluating → /product, Investing → /investors).
- `/product` — inspectable verification-artifact viewer first, sales second; expandable evidence (prompt · action trace · proof bundle · attestation · vendor boundary); secondary persistent "Book a call".
- `/investors` — memo-with-instrumentation: thesis · market/why-now · why-this-founder · traction · data room. Brass accent.

## Design system (locked — DESIGN.md)
Instrument-black `#0A0B0D`; Newsreader / Public Sans / Commit Mono; phosphor-green `#3DF5A0` = verified-only;
brass `#C9A35B` on /investors only; document/poster layout; mechanical motion; reduced-motion degrade.

## Hero composition (OPEN — pick one of 3)
A Certificate · B Terminal Wall (recommended) · C Single Artifact — rendered in
`.scaffolde/artifacts/design-shotgun/hero-20260622/variants.html`.

## Signature mechanism
The page carries a real, clickable integrity proof (`THIS PAGE · build <sha> · content-hash <…> · verify ↗`)
resolving to a genuine signed manifest — the marketing site is enrolled in the verification plane it sells.

## Build approach (Next 16 + Tailwind v4 + Motion)
1. Tokenize DESIGN.md → CSS variables + Tailwind theme; wire fonts via `next/font` (Newsreader, Public Sans) + self-hosted Commit Mono.
2. Component refactor from the local `feat/honest-instrument-homepage` branch: TopBar, Hero (chosen variant), EvidenceArtifact (live ledger), AudienceFork, SignatureBlock, FivePhaseLoop→reuse, ProofLedger→evolve.
3. Routes `/product`, `/investors` as distinct pages sharing the hero + tokens.
4. Real proof artifact: a build-time signed content/build manifest + a `/verify` route that renders it.
5. A11y + perf pass (contrast already AA/AAA in DESIGN.md; ticker is the only animation; LCP < 2.5s).

## Open items (need Gary / content)
- Hero variant pick.
- Real traction artifact for /investors (live attestation record? pilot? design partner?).
- Data-room link.
- Venture-vs-service framing + founder-commitment beat for /investors (the riskiest assumption from office-hours).

## Success criteria (from office-hours)
- First viewport = thesis + credibility in plain language (no undefined jargon).
- One primary action per route; client booking secondary.
- ≥1 real inspectable proof artifact.
- Fast/accessible/mobile; clears the pre-outreach deploy gate.
