# Expanding the "AI Verification" surface — beyond attestations

> 2026-06-22. Gary's steer: attestations is one pillar; the real product verifies *everything the AI does*
> across the business. This reframes Scaffolde from a compliance tool into the **verification & observability
> plane for an AI-native org.** Strengthens the CEO-review "bigger wedge / platform" gap.

## Reframe
Scaffolde records and independently verifies **what your AI actually does** — which models and agents ran,
on what sessions and projects, what they cost (tokens/spend), what they produced, what was learned and
remembered, and whether each was verified. Attestations are the *proof artifacts*; the platform is the
observability + verification layer that produces them.

## Concept → surface mapping (Gary's list)
| Gary's concept | Surface in the demo | What it shows |
|---|---|---|
| tokens used | **Overview** + **Models** | tokens by model / agent / project / time; spend |
| models used | **Models** | model mix (Claude/GPT/Gemini + versions), per-model pass rate, cost |
| sessions | **Sessions** | every AI session as the unit of work; each inspectable → its attestation |
| projects | **Projects** | work grouped by project / business unit; verified % per project |
| agents evaluating across the business | **Agents** | which agents run where, what they're allowed to do, pass rate, what they're evaluating |
| skills | **Skills** | which skills invoked, frequency, verified outcomes, drift |
| workflows | **Workflows** | multi-step pipelines, run history, step-by-step verification |
| learnings captured | **Learnings** | what the system learned / promoted (self-improvement loop), provenance |
| memories captured | **Memories** | what memories are stored, source, what referenced them |
| (existing) | **Attestations** | the tamper-evident proof records (the image Gary loved) |

## New top-line KPIs (the "AI verification" scoreboard)
Verified runs · Pass rate · **Tokens used** · **Spend** · Models in use · Active agents · Active projects ·
Sessions verified · **Learnings captured** · **Memories captured**.

## Proposed demo IA (sidebar)
`Overview` · `Agents` · `Skills` · `Workflows` · `Sessions` · `Projects` · `Models` · `Learnings` ·
`Memories` · `Attestations` · `Evidence` · `Reports` · `Settings`
(Providers/Frameworks/Policies fold under Attestations/Compliance.)

## Centerpiece (updated — Sessions over Attestations)
Gary's steer: **the SESSION is the unit, not the attestation.** Attestation is demoted from a pillar to
the *proof inside a session* — it shows the session was independently verified. Swap the Attestations
emphasis for Sessions; the rest of the metrics stay.

- **Overview** (landing): KPI scoreboard (Verified runs · Pass rate · Tokens · Spend · Agents · Sessions · Models · Learnings · Memories) + activity chart + model-mix (USAGE vs PASS-RATE, clearly labeled) + top agents + recent sessions.
- **Live Observability** (new): real-time stream of AI activity being verified now.
- **Sessions** (the heart): each session shows its **subject** (what it was about), **duration**, agent/project/model/tokens, SCA-#### key, verified status. Detail view shows what the session **produced** — skills used, learnings captured, improvements made, memories captured — plus the **verification timeline + proof** (the old "attestation" content, now living inside the session).
- **Agents**: what each agent does across the business + whether it's verified.
- Identifiers use **SCA-####** (Paperclip), not fake SES-#### strings.

## Why this is the stronger story (strategy)
- Bigger wedge: observability+verification for AI-native ops > compliance attestation of clouds.
- On-thesis: "the grader can't be the graded" now spans agents/skills/workflows, not just model outputs.
- True to product: this is what Scaffolde/PAI already does (agents, skills, workflows, sessions, learnings, memories).
- Demo-able: every surface is inspectable evidence — the self-serve product the CEO review asked for.
