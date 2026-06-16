# New Scaffolde Website Implementation Plan

> For Hermes: implement this plan task-by-task, preserving pre-existing `/src/app/v1/page.tsx` unless explicitly superseded.

## Goal

Ship the first serious scaffolde.ai website slice: human-readable, agent-readable, proof-driven, and built from a single content model.

## Architecture

Use the existing Next 16 App Router. Keep pages as server components. Put reusable content in `src/content/site.ts` and markdown serializers in `src/content/markdown.ts`. Use static route handlers for machine-readable surfaces.

## Tasks

### Task 1: Create source-of-truth content model

Files:
- Create `src/content/site.ts`
- Create `src/content/markdown.ts`

Acceptance:
- All public claims have statuses.
- Agent surfaces and markdown mirrors are listed in content.
- Markdown serializers derive from the same content used by HTML pages.

### Task 2: Add shared website components

Files:
- Create `src/app/components/SiteNav.tsx`
- Create `src/app/components/SiteFooter.tsx`
- Create `src/app/components/SectionHeader.tsx`
- Create `src/app/components/StatusBadge.tsx`
- Create `src/app/components/OperatingLoop.tsx`
- Create `src/app/components/ProofCard.tsx`
- Create `src/app/components/AgentSurfaceLinks.tsx`

Acceptance:
- Components are typed.
- Components use existing Scaffolde visual tokens.
- Navigation exposes human and agent pages.

### Task 3: Replace homepage with proof-driven operating manual preview

Files:
- Modify `src/app/page.tsx`
- Modify `src/app/layout.tsx`

Acceptance:
- Homepage h1 explains Scaffolde in first viewport.
- First viewport links to `/manual`, `/proof`, `/llms.txt`.
- Page includes operating loop, stack layers, proof claims, built-with-Scaffolde section.
- Metadata avoids unsupported numbers.

### Task 4: Add secondary human pages

Files:
- Create `src/app/manual/page.tsx`
- Create `src/app/proof/page.tsx`
- Create `src/app/agents/page.tsx`
- Create `src/app/stack/page.tsx`

Acceptance:
- Each page has one h1.
- Manual explains what Scaffolde is/is not.
- Proof page distinguishes evidenced/partial/planned claims.
- Agents page tells AI agents how to read and route the site.
- Stack page maps layers without overclaiming readiness.

### Task 5: Add agent-first machine surfaces

Files:
- Create `src/app/llms.txt/route.ts`
- Create `src/app/llms-full.txt/route.ts`
- Create `src/app/index.md/route.ts`
- Create `src/app/manual.md/route.ts`
- Create `src/app/proof.md/route.ts`
- Create `src/app/stack.md/route.ts`
- Create `src/app/site.md/route.ts`
- Create `src/app/.well-known/agent.json/route.ts`
- Create `src/app/robots.txt/route.ts`
- Create `src/app/sitemap.xml/route.ts`

Acceptance:
- Text routes return correct content types.
- agent.json validates as JSON.
- sitemap includes canonical public routes.
- robots references sitemap and allows public docs/agent files.

### Task 6: Add visual system assets

Files:
- Create `public/images/scaffolde/capability-map.svg`
- Create `public/images/scaffolde/operating-loop.svg`
- Create `public/images/scaffolde/human-agent-surfaces.svg`
- Modify `src/app/page.tsx`

Acceptance:
- Homepage first viewport includes an actual visual map, not a terminal-text placeholder.
- Operating loop section pairs content with a visual loop diagram.
- Agent-readable section shows human and agent surfaces as a visual bridge.
- SVGs have accessible titles/descriptions and `img` alt text.

Friction found:
- First implementation was too text-heavy and failed the human-engagement requirement.
- Image generation produced attractive but unsafe assets with fake text/misspellings; use hand-authored SVG diagrams unless there is an explicit image QA/cropping pass.

### Task 7: Verify

Commands:
- `npm install` if node_modules is absent
- `npm run lint`
- `npm run build`
- start dev server and curl machine-readable endpoints
- browser/gstack smoke key pages
- browser/gstack screenshot homepage at desktop and mobile to verify visuals render above the fold

Acceptance:
- Build green or blocker documented with exact failure.
- Visual QA confirms the homepage is not all text and has no fake text artifacts in imagery.
