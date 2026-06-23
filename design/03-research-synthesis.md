# Design Research Synthesis — scaffolde.ai

> Produced inside `design-consultation` (stage 3), 2026-06-22.
> Sources: Designer agent (independent voice), Codex design voice, primary agent direction,
> live-site baseline captured via gstack `browse`.

## Live-site baseline finding (flag — outside redesign scope)
`browse` capture of **https://scaffolde.ai** (design/research/scaffolde-live.png) shows the
**deployed site is a STALE older version**, not the local v2:
- Live = light/cream theme, "Personal AI Infrastructure" kicker, headline "Your work, amplified.",
  body "34 specialized skills. 6 AI models…", orange accent, "Watch Demo / Book a Consultation",
  and a large empty mid-page section.
- Local branch `feat/honest-instrument-homepage` = instrument-black "Honest Instrument" /
  "the grader can't be the graded" — **not deployed.**
- **Implication:** the "site v2 deploy is the pre-outreach gate" (investor campaign) is currently
  UNMET — the live site is v1-era. Redesign should evolve the local branch; deploy is a separate gate.

## Three-voice convergence (high agreement)
- **Aesthetic:** instrument-black, dark-first, forensic/evidentiary minimalism. No marketing gloss.
- **Type:** editorial serif display + neutral grotesque body + monospace for proof data
  ("editor / clerk / machine"). Free stack all three voices support: **Newsreader · Public Sans · Commit Mono**
  (paid upgrades available: GT Sectra/Söhne/Berkeley Mono).
- **Hero = a live, inspectable verification artifact**, not an illustration or hero image.
- **Copy register:** investor-memo / numbered-audit-document pacing; reject SaaS feature-card soup.
- **Signature move:** the site is itself inspectable evidence (the page can carry its own real proof).
- **Layout:** first viewport as a poster/document header, hard-left serif claim, audience fork as
  physical routes (not floating buttons), founder credibility as a signature/attestation line.
- **Motion:** mechanical (tick/resolve/settle), not marketing float; full reduced-motion degrade.

## Genuine divergence → creative choices
| Choice | Option A | Option B | Note |
|---|---|---|---|
| Signal accent | phosphor-green `#3DF5A0` (Designer) | acid-lime `#D6FF5F` (Codex) | green/lime = "verified/pass" semantic; current brand is orange |
| Investor fork accent | add muted brass `#C9A35B` for /investors only (Designer) | keep single accent everywhere | brass = notary-seal signal for the capital audience |

## Anti-slop (all three voices agree — forbidden)
Purple/violet gradients · 3-column icon grids · centered-everything · uniform bubbly radius ·
gradient CTAs · stock-photo heroes · decorative blobs/orbs/AI-mist · generic robot/brain imagery ·
fake terminal output that can't correspond to product truth · unpermissioned "trusted by" strips.
