import { renderProofMarkdown } from "@/content/markdown";
export function GET() { return new Response(renderProofMarkdown(), { headers: { "content-type": "text/markdown; charset=utf-8" } }); }
