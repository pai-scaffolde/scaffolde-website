import { renderManualMarkdown } from "@/content/markdown";
export function GET() { return new Response(renderManualMarkdown(), { headers: { "content-type": "text/markdown; charset=utf-8" } }); }
