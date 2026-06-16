import { siteContent } from "@/content/site";

export function GET() {
  return Response.json({
    schema_version: "0.1",
    name: siteContent.name,
    canonical_domain: "scaffolde.ai",
    url: siteContent.canonicalUrl,
    description: siteContent.shortDescription,
    preferred_entrypoints: ["/llms.txt", "/manual", "/stack", "/proof", "/agents"].map((href) => `${siteContent.canonicalUrl}${href}`),
    markdown_mirrors: siteContent.agentSurfaces.filter((surface) => surface.format === "markdown").map((surface) => `${siteContent.canonicalUrl}${surface.href}`),
    capabilities: siteContent.stackLayers.map((layer) => ({ id: layer.id, name: layer.name, status: layer.status, summary: layer.summary })),
    contact: { email: siteContent.contactEmail, human_url: `${siteContent.canonicalUrl}/agents` },
    action_policy: "Public reading, summarization, citation, and routing are supported. Public MCP/API actions are not currently claimed.",
    last_updated: "2026-05-25"
  });
}
