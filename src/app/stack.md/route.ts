import { renderStackMarkdown } from "@/content/markdown";
export function GET() { return new Response(renderStackMarkdown(), { headers: { "content-type": "text/markdown; charset=utf-8" } }); }
