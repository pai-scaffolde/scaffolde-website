# Dashboard refinements — queued for the post-Next-port pass

> Gary's refinements (2026-06-22), to apply to the REAL Next.js `/dashboard` AFTER the port lands
> (not the throwaway standalone — avoids conflicting with the in-flight port). Applied once, on canonical.

## 1. Donut centering
The Overview "Model mix" donut center label ("1.24B tokens") is not centered. Fix so the value+unit sits dead-center of the ring.

## 2. Brand-aligned model-mix colors
Color each model segment by its provider's brand, not arbitrary palette:
- **Claude family (Anthropic):** Anthropic coral/clay — base `#D97757`; vary by model (opus `#D97757`, sonnet `#C9684A`, haiku `#E0987C`, fable `#B85440`).
- **GPT (OpenAI):** monochrome black/white — `#0D0D0D` / near-black `#1A1A1A` (lighter grey for a 2nd OpenAI model).
- **Gemini (Google):** Google blue→purple — flash `#4285F4`, pro `#8E5BD4` (or a blue/indigo).
- **DeepSeek:** DeepSeek blue `#4D6BFE`.
- **Qwen (Alibaba):** Qwen purple/indigo `#6E56CF`.
- **Cursor:** mono `#18181B`.
- **GLM (Zhipu):** teal `#14B8A6` (distinct from cobalt).
- (full page) Grok `#000000`, Kimi, MiniMax, Nemotron NVIDIA-green `#76B900`.
Keep legend dots + bars + donut segments all using the same per-model brand color.

## 3. Terminology — Sessions tab
"Sessions Verified" KPI on the **Sessions** screen → **"Scaffolde-managed sessions"** (and align the matching Overview card label if it reads the same).

## 4. Models page — full catalog
Mock ALL available models, provider-grouped, each with provider, brand color, usage %, tokens, spend, pass rate, sessions, cost/1M, trend:
- **Anthropic:** claude-opus-4-8, claude-sonnet-4-6, claude-haiku-4-5, claude-fable-5
- **OpenAI:** gpt-5.5 (+ gpt-5.4 if useful)
- **Google:** gemini-3.5-flash, gemini-3.1-pro
- **DeepSeek:** deepseek-v4
- **Alibaba Qwen:** qwen3.5-397b (+ qwen-local)
- **Zhipu:** glm-5.1
- **xAI:** grok
- **Moonshot Kimi:** kimi-k2.6
- **MiniMax:** minimax-m3
- **NVIDIA:** nemotron-3-ultra
- **Cursor:** cursor (composer)
(Models-in-use count + Overview model-mix can still show the TOP ~6-8 by usage; the Models PAGE shows the full catalog.)

## 5. Tenant identity — Scaffolde, not Acme Corp
- Workspace switcher (bottom-left): "Acme Corp / Enterprise workspace" → **"Scaffolde / Verification workspace"** (use the Scaffolde mark as the avatar).
- All header subcopy "...across Acme Corp" → "...across Scaffolde".
Scaffolde dogfooding its own AI verification — on-brand.

## 6. Connected Surfaces launcher (SPEC — investigation complete)
New `/dashboard` sub-screen "Connected Surfaces": cobalt-styled tile grid (2×2 → 1-col responsive). White
cards, `#E2E8F0` border + soft shadow, Satoshi headings, Geist Mono for IDs/versions, status dot
(green `#16A34A` / amber / red), one headline stat, secondary line, cobalt "Open ↗" action. Native cards —
**NOT iframes** (subsystems are dark-themed; would clash). Header roll-up "N of N surfaces live".

Tiles (data is REAL, probed 2026-06-22 — snapshot for the deployed demo; localhost endpoints can't be reached remotely):
- **Paperclip — Task Control Plane**: green dot · "**475 done · 3 in review · 2 blocked**" · "24 agents on bench" · Open board ↗ (`:3102`). [REST `:3102/api/companies/{id}/issues|agents`]
- **Hermes — Autonomous Operator**: green dot · "**Gateway running · 1 active session**" · WhatsApp ✓ · Slack ✓ (v0.17.0) · Open dashboard ↗ (`:9119`). [`:9119/api/status`, open]
- **gbrain — Knowledge Graph**: green dot · "**N pages · M links**" (via gbrain MCP `get_stats`) · "postgres · v0.42.38" · Explore ↗. [`:3180/health` live; stats via MCP]
- **OpenClaw — Agent Gateway**: green dot · "**Live**" · "Control plane · :18789" · Open Control ↗. [`:18789/health`; granular counts auth-gated — show "Live", not a fake number]
- *(optional)* **gstack — Code Quality**: neutral dot · "**8.4 / 10**" composite · "CLI · local-only" · (no link — run `/health`). [no web UI — honest static tile or omit]

Architecture note for the build: add a Next `/api/surfaces` route that fans out to the localhost endpoints
server-side and returns one JSON payload (keeps the client clean); for the DEPLOYED build, swap it to a
periodically-captured snapshot of the same real numbers (localhost is unreachable from Vercel). For the demo
dashboard, snapshot values (the real numbers above) are correct and honest.
