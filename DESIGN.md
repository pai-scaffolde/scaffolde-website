# Design System — Scaffolde (v2: Modern Product SaaS)

> Rebuilt 2026-06-22 after the v1 "instrument-black / forensic-ledger" direction was rejected
> (too austere, all-text, no imagery). Direction chosen by Gary: **Modern product SaaS, imagery-forward.**
> Strategy/structure lineage still valid: `design/01-first-principles.md`, `02-office-hours.md`,
> `05a-ceo-review.md`. Visual system below supersedes the v1 palette/type.

## Product Context
- **What:** Scaffolde — independent AI verification & audit platform. Tamper-evident proof of what any AI was asked, did, and proved, across Anthropic/OpenAI/Google, attested independently.
- **Who:** Primary = pre-seed investors ($2M raise). Secondary = enterprise evaluators. Tertiary = technical skeptics.
- **Type:** Audience-routed marketing + investor site (shared hero → `/product`, `/investors`).

## Aesthetic Direction
- **Direction:** Modern product SaaS / premium developer-tool. Bright, confident, **imagery-forward** — real product UI renders carry the page (Linear / Vercel / Stripe quality bar).
- **Decoration:** intentional — product imagery + soft cobalt glows do the work; minimal ornament otherwise.
- **Mood:** credible, modern, approachable, sharp. Sells the product by *showing* it, not by austerity.
- **NOT:** the rejected instrument-black/phosphor-green terminal aesthetic; no founder-credential-as-"attestation" gimmick.

## Imagery (central to this system)
Generated via OpenAI `gpt-image-2` on the Codex/ChatGPT **subscription** (Art skill / `GSTACK_IMAGE_PROVIDER=codex`; no separate key). Working assets in `design/imagery/`:
- `hero-dashboard-v1.png` — the Runs dashboard (multi-provider verification table + attestation proof). Primary hero.
- `scaffolde-proof-detail.png` — single attestation-proof detail (for /product).
- `scaffolde-plane-diagram.png` — Scaffolde as the independent layer between providers and the enterprise (for /investors / how-it-works).
- `scaffolde-attestations-screen.png` — attestations analytics screen (secondary section).
**Rule:** product imagery must depict *truthful* product surfaces (no fake screens that can't correspond to product reality).

## Typography
- **Display/Hero:** **Satoshi** — modern, confident grotesque, distinctive without being a default. *(fallback: General Sans)*
- **Body/UI:** **Geist** (Vercel) — clean, dev-tool-grade, excellent tabular figures for any data. *(fallback: system-ui)*
- **Data/Mono:** **Geist Mono** — hashes, timestamps, model IDs, code samples.
- **Loading:** Satoshi via Fontshare; Geist + Geist Mono via `next/font` (self-host). Preload, zero-CLS.
- **Scale (rem, 16px):** kicker 0.8 · body 1.0–1.125 · h3 1.5 · h2 2.25 · h1 `clamp(2.5, 5vw, 4)`. Line-height: display 1.05, body 1.6.

## Color
- **Approach:** light-first, white surfaces, ONE confident brand color (cobalt) + semantic states.
- **Brand primary (cobalt):** `#2563EB` — primary CTAs, links, key accents, the glow.
- **Brand deep:** `#1D4ED8` — hover/pressed, gradient depth.
- **Brand tint:** `#EFF4FF` — soft section backgrounds, callouts.
- **Background:** `#FFFFFF` base; `#F6F8FC` for alternating sections.
- **Surface/card:** `#FFFFFF` with `#E2E8F0` 1px border + soft shadow.
- **Text primary:** `#0F172A` (slate-900). **Body text:** `#334155` (slate-700). **Muted:** `#64748B` (slate-500).
- **Verified/success:** `#16A34A` (green — the "Verified" badge, matches the product imagery).
- **Pending:** `#D97706` (amber). **Error/tamper:** `#DC2626` (red).
- **Investor accent (/investors only):** keep cobalt as primary; optional deep-navy `#0B1F3A` section for the investor "diligence" feel (not a second brand color, just a darker surface).
- **Contrast:** body `#334155` on white ≈ 9:1 (AAA); muted `#64748B` ≈ 4.7:1 (AA). Cobalt `#2563EB` on white ≈ 4.5:1 — OK for large/UI text; use `#1D4ED8` for small text on white.

## Spacing
- **Base:** 8px. **Density:** spacious (marketing breathing room).
- **Scale (px):** 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96 · 128.

## Layout
- **Approach:** hybrid — marketing sections with strong imagery + a clean grid.
- **Hero:** left = kicker + plain-language H1 + subhead + primary CTA (cobalt) + secondary; right (or full-bleed below) = the product dashboard image, floating with soft shadow + cobalt glow.
- **Routes:** `/` shared hero + audience fork (now styled as two clear cards/buttons, NOT austere ledger rows — must be obviously clickable). `/product` = product tour led by `proof-detail` + `attestations` imagery, self-serve "inspect a real proof" first, "Book a call" secondary. `/investors` = thesis · market/why-now · founder · traction · data room, led by the `plane-diagram`.
- **Grid:** 12-col, max width **1200px**, 24–32px gutters; single column < 768px.
- **Radius:** sm 8px · md 12px · lg 16px · cards 16px · pill for badges. (Modern SaaS = soft, not bubbly-uniform; buttons 8–10px.)

## Motion
- **Approach:** intentional, smooth (NOT mechanical). Subtle fade/slide-up on scroll-in; gentle parallax/float on the hero image; button/press micro-interactions.
- **Easing:** `cubic-bezier(0.22,1,0.36,1)` (ease-out-expo) for entrances.
- **Duration:** micro 120ms · short 200ms · medium 320ms · long 500ms.
- **Reduced-motion:** disable parallax/slide; content appears static. Honor `prefers-reduced-motion`.

## Carry-forward strategy (from CEO review — still required)
- Name ONE wedge buyer (e.g. regulated enterprise attesting AI decisions to an auditor); imply it in hero + /investors.
- /investors needs a why-now beat + ≥1 real traction proof.
- /product opens as a self-serve inspectable artifact (product, not "request a demo") — answers venture-vs-service.
- Founder credibility = normal founder treatment (NOT an "attestation/signature" device); state full-time intent on /investors.

## Anti-Slop (forbidden)
Purple/violet gradients · dark/black instrument backgrounds · phosphor-green terminal aesthetic · generic robot/brain/glowing-cube imagery · 3-column icon grids · centered-everything · gradient-rainbow CTAs · stock-photo people · decorative blobs/orbs/AI-mist · fake product screens that don't match reality · "Built for X / Designed for Y" copy.

## Decisions Log
| Date | Decision | Rationale |
|------|----------|-----------|
| 2026-06-22 | v1 (instrument-black/green, text-only) **rejected** | Too austere, no imagery (image-gen was blocked); founder-as-attestation gimmick |
| 2026-06-22 | v2 = Modern product SaaS, imagery-forward, cobalt `#2563EB` | Gary's pick; real product imagery now generable via Codex subscription |
| 2026-06-22 | Type = Satoshi · Geist · Geist Mono | Modern dev-tool/SaaS quality, distinctive but not default |
