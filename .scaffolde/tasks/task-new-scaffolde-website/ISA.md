# New Scaffolde Website ISA

Date: 2026-05-25
Owner: Herm / Scaffolde website build team
Canonical repo: /Users/gary/Projects/scaffolde-website

## Intent

Replace the placeholder scaffolde.ai site with a proof-driven, agent-readable operating manual for Scaffolde.

This site should do two jobs at once:

1. Explain Scaffolde clearly to humans: what it is, who it helps, how it works, and what proof exists.
2. Expose Scaffolde clearly to agents: stable text, markdown mirrors, machine-readable manifest, policy, and action/intake guidance.

## Ideal State Artifact

A live-ready Next.js website slice with:

- homepage at `/`
- human operating manual at `/manual`
- proof/evidence ledger at `/proof`
- agent entrypoint page at `/agents`
- stack explanation at `/stack`
- agent-readable `/llms.txt`
- complete-context `/llms-full.txt`
- machine manifest at `/.well-known/agent.json`
- markdown mirrors at `/index.md`, `/manual.md`, `/proof.md`, `/stack.md`, `/site.md`
- sitemap and robots policy
- content single-sourced from typed data where practical
- no unsupported claims presented as fact
- successful lint/build verification
- browser-visible above-fold QA evidence

## Ideal State Criteria

- Humans understand Scaffolde as a personal AI capability factory / operating stack, not a generic AI platform.
- Agents can retrieve canonical descriptions, routes, proof claims, markdown mirrors, and intake guidance without JavaScript.
- The site distinguishes evidenced, partial, planned, and do-not-claim-yet claims.
- The homepage visibly links to `/manual`, `/proof`, and `/llms.txt` above the fold.
- The design follows Scaffolde canonical direction: dense operator-console/docs hybrid, blueprint warmth, proof panels, lifecycle rails, CLI/status texture.
- The first implementation slice preserves the existing untracked `/src/app/v1/page.tsx` route unless intentionally moved later.
- `npm run lint` passes.
- `npm run build` passes.
- Browser smoke confirms key pages render and agent files return expected content.

## Known Friction Captured During Dogfood

- gstack CLI/browse/design were not initially on PATH; remediated with shims and runtime symlink, but canonical sync was blocked by unrelated Scaffolde projection drift.
- `claude doctor` looked hung because it waits for an interactive Enter prompt; automation should run it under PTY/expect.
- gbrain had 204 unacknowledged historical sync failures; backed up and acknowledged. Full doctor healthy.
- Website repo lacked node_modules during planning; lint/build required dependency install.
- Website repo had pre-existing untracked `src/app/v1/page.tsx`; preserve until deliberately retired.

## Verification Plan

1. Inspect git state and preserve unrelated dirt.
2. Install dependencies if missing.
3. Run `npm run lint`.
4. Run `npm run build`.
5. Start dev server.
6. Curl agent files and validate JSON.
7. Use browser/gstack to inspect `/`, `/manual`, `/proof`, `/agents`, `/stack`.
8. Record remaining backlog honestly.
