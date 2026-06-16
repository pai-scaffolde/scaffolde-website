import { renderLlmsTxt } from "@/content/markdown";
export function GET() { return new Response(renderLlmsTxt(), { headers: { "content-type": "text/plain; charset=utf-8" } }); }
