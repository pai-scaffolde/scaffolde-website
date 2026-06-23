# First Principles Analysis: What should the scaffolde.ai website accomplish?

> Produced by the `FirstPrinciples` skill (Deconstruct → Challenge → Reconstruct), 2026-06-22.
> Ground truth: live v2 branch `feat/honest-instrument-homepage`. Current thesis =
> "The Independent AI Verification & Audit Plane — the grader can't be the graded."

---

## Deconstruction

### What we're told a startup/agency site "must" be made of
Hero, nav, value prop, social proof, feature grid, capability counts, pricing,
booking CTA, footer, about, blog.

### Actual constituents (what the site is functionally made of)
Strip the conventions and a website reduces to five irreducible parts:

1. **A visitor** — arrives with an *identity* and an *intent* you cannot see.
2. **A claim** — what Scaffolde is / does.
3. **Evidence** — what makes the claim believable.
4. **A decision** — the one judgment the visitor is here to make.
5. **An action path** — the lowest-friction route from decision → next step.

Everything else (aesthetic, motion, counts, copy) is in service of moving a
visitor through 1→5, or it is weight.

### Who actually lands here — three audiences, three different decisions
| Visitor | The decision they're making | What actually moves it |
|---|---|---|
| **Investor** (pre-seed, time-bound) | "Is this a fundable company + founder?" | Thesis clarity, market/why-now, founder credibility, real traction |
| **Prospective client / design partner** | "Can this solve my problem — should I book?" | Problem resonance, capability proof, frictionless booking |
| **Technical skeptic / peer** | "Is this real or vapor?" | Substance, an inspectable demo, proof artifacts |

### Fundamental truths (irreducible)
- A website is **visitor-controlled and asynchronous**: they give you seconds, you can't interrogate them.
- **Attention is front-loaded**: the first viewport carries most of the decision weight.
- **Trust transfers by evidence, not assertion** — doubly so for a *verification/honesty* product, where the medium IS the message.
- **One page optimizes one primary conversion well**; co-equal CTAs dilute.
- At landing the **visitor's identity is unknown** — the site must self-segment fast or speak to the dominant audience.

### Stated → actual gap
| Stated | Actual | Gap |
|---|---|---|
| "Counts (158 skills / 41 agents) prove capability" | Counts read as vanity metrics to investors; don't move any of the three decisions | Volume ≠ evidence |
| "One page serves all three audiences equally" | Co-equal weighting dilutes every decision | Undifferentiated front door |
| "Clever thesis line lands on its own" | "The grader can't be the graded" requires the visitor to *already hold* the problem | Wit before setup |

---

## Constraint Classification

| Constraint | Type | Evidence | Challenge / "Remove it" |
|---|---|---|---|
| Serve investors **and** clients **and** skeptics on one undifferentiated page | **ASSUMPTION** | No data that one page must carry all three co-equally | Route/segment by intent → each decision gets a focused path |
| "Book a demo" as a primary CTA | **SOFT** | Chosen; valid for client path, noise on investor path | Demote to secondary on the investor-led front door |
| Instrument-black editorial aesthetic | **SOFT** | Aesthetic choice | Keep *only if* it advances the credibility decision; it currently does support "serious instrument" |
| Capability counts (7/12/158/41) | **ASSUMPTION** | Assumed to impress; likely reads as noise | Replace with **one inspectable proof artifact** |
| Single landing page | **SOFT** | Convention | Multi-route is cheap on Next.js; segment if it helps |
| The medium must demonstrate the thesis | **HARD** (for this product) | A verification company with an unverifiable marketing site is self-refuting | Cannot remove — the site must itself be inspectable evidence |
| Fast / accessible / mobile | **HARD** | Attention physics: latency & friction = abandonment | Non-negotiable, design around it |
| Company identity + founder credibility present | **HARD** | It's the company's front door | Keep; lead with it earlier |
| Visitor understands "AI Verification & Audit Plane" | **ASSUMPTION** (false for most) | Jargon; most visitors can't parse it cold | Plain-language thesis above the jargon line |

**Hidden constraints surfaced:** the site assumes the visitor already knows the
category exists, already feels the "grader can't be graded" pain, and will read
counts as proof. All three are unvalidated and probably false for a cold investor.

---

## Reconstruction

### Hard constraints only
1. Visitor arrives unknown, gives seconds, decides in the first viewport.
2. For a verification product, the artifact itself must be inspectable evidence.
3. One page optimizes one primary action well.
4. Performance + a11y + mobile are non-negotiable.
5. Must carry company identity + founder credibility.

### Function to optimize
> **Convert the right visitor to the right next action with the least friction — while the artifact itself proves the thesis.**

### Blank-slate options
- **A — Audience-routed front door.** Plain-language thesis + an explicit fork ("Evaluating Scaffolde" / "Investing") → two tailored paths, each with its own primary action.
- **B — One-audience spear (investor-first).** The live raise is the binding time constraint, so optimize the front door entirely for the investor decision; clients get a clear secondary booking route. Proof = a live, inspectable attestation record.
- **C — Demonstrate-don't-tell.** The hero *is* a live verification demo: the visitor watches an AI task get graded by Scaffolde in real time. Medium = message. Credibility as a supporting layer.

| Option | Satisfies hard constraints | Achieves function | Simpler than current |
|---|---|---|---|
| A | Yes | Partial (splits focus) | Same |
| B | Yes | Yes (focused) | Simpler |
| C | Yes | Yes (max proof) | More build effort |

### Recommended: **B's focus + C's proof mechanism**
Lead the front door with the **investor decision** (the raise is the time-bound
priority), state the thesis in **plain language above the jargon**, establish
**founder credibility immediately**, and prove the thesis with **one live,
inspectable verification artifact** instead of vanity counts. Self-segment
clients via a clear *secondary* path, not a co-equal CTA.

### What we eliminate
- Capability-count vanity metrics as the proof mechanism (from the "counts impress" assumption).
- Co-equal triple-CTA dilution (from the "one page serves all equally" assumption).
- Jargon-first headline (from the "visitor knows the category" assumption).

### What we add
- A plain-language thesis line *above* the clever one.
- One inspectable proof artifact (a real attestation/ledger the visitor can open).
- An explicit, secondary client path.

---

## Key Insight (one sentence)
**The limiting assumption is that one undifferentiated page must serve three
audiences with co-equal weight and category jargon — instead the site should
lead with the dominant, time-bound audience (investors) in plain language and
prove its thesis by being an inspectable instrument, not by listing capability
counts.**

---

## Carry-forward constraints for `design-consultation` (stage 3)
- HARD: the site must itself be inspectable evidence of the verification thesis.
- HARD: first viewport must resolve "what is this + why credible" in plain language.
- DECISION: primary audience = investor; client = secondary path; skeptic = served by the proof artifact.
- KEEP: serious "instrument" character (it advances credibility) — but earn it, don't assert it.
- DROP: vanity counts as the hero proof; jargon-first headline; co-equal CTAs.
