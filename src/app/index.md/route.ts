import { renderIndexMarkdown } from "@/content/markdown";
export function GET() { return new Response(renderIndexMarkdown(), { headers: { "content-type": "text/markdown; charset=utf-8" } }); }
