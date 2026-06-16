import { renderFullSiteMarkdown } from "@/content/markdown";
export function GET() { return new Response(renderFullSiteMarkdown(), { headers: { "content-type": "text/markdown; charset=utf-8" } }); }
