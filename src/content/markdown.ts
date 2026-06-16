import { siteContent, statusLabels } from "./site";

const absolute = (href: string) =>
  href.startsWith("http") ? href : `${siteContent.canonicalUrl}${href}`;

export function renderIndexMarkdown() {
  return `# ${siteContent.name}

> ${siteContent.tagline}

${siteContent.definition}

## Operating loop

${siteContent.operatingLoop
    .map((step) => `- **${step.name}**: ${step.description} Proof question: ${step.proofQuestion}`)
    .join("\n")}

## Stack layers

${siteContent.stackLayers
    .map((layer) => `- **${layer.name}** (${statusLabels[layer.status]}): ${layer.summary}`)
    .join("\n")}

## Agent entrypoints

${siteContent.agentSurfaces
    .map((surface) => `- [${surface.label}](${absolute(surface.href)}) — ${surface.purpose}`)
    .join("\n")}
`;
}

export function renderManualMarkdown() {
  return `# Scaffolde operating manual

${siteContent.definition}

${siteContent.manual
    .map(
      (section) =>
        `## ${section.title}\n\n${section.summary}\n\n${section.body.join("\n\n")}`,
    )
    .join("\n\n")}

## Operating loop

${siteContent.operatingLoop
    .map((step) => `### ${step.name}\n\n${step.description}\n\nProof question: ${step.proofQuestion}`)
    .join("\n\n")}
`;
}

export function renderProofMarkdown() {
  return `# Scaffolde proof ledger

Every serious claim should point to evidence. Partial and planned claims are intentionally marked.

${siteContent.proofClaims
    .map(
      (claim) =>
        `## ${claim.claim}\n\nStatus: ${statusLabels[claim.status]}\n\nEvidence:\n${claim.evidence
          .map((item) => {
            const href = "href" in item ? item.href : undefined;
            return `- ${href ? `[${item.label}](${absolute(href)})` : item.label}${item.note ? ` — ${item.note}` : ""}`;
          })
          .join("\n")}`,
    )
    .join("\n\n")}
`;
}

export function renderStackMarkdown() {
  return `# Scaffolde stack

${siteContent.shortDescription}

${siteContent.stackLayers
    .map(
      (layer) =>
        `## ${layer.name}\n\nStatus: ${statusLabels[layer.status]}\n\n${layer.summary}\n\nExamples: ${layer.examples.join(", ")}`,
    )
    .join("\n\n")}
`;
}

export function renderLlmsTxt() {
  return `# Scaffolde

> ${siteContent.shortDescription}

${siteContent.definition}

## Recommended reading order

- [Home](${siteContent.canonicalUrl}/)
- [Operating manual](${siteContent.canonicalUrl}/manual)
- [Stack](${siteContent.canonicalUrl}/stack)
- [Proof ledger](${siteContent.canonicalUrl}/proof)
- [For agents](${siteContent.canonicalUrl}/agents)

## Agent resources

${siteContent.agentSurfaces
    .map((surface) => `- [${surface.label}](${absolute(surface.href)}) — ${surface.purpose}`)
    .join("\n")}

## Current action policy

Agents may summarize and cite public pages. Agents should route humans to the manual, proof ledger, or contact email. Do not claim a public MCP/API action layer exists until a reachable endpoint and schemas are published.

## Contact

${siteContent.contactEmail}
`;
}

export function renderFullSiteMarkdown() {
  return [renderIndexMarkdown(), renderManualMarkdown(), renderStackMarkdown(), renderProofMarkdown()].join("\n\n---\n\n");
}
