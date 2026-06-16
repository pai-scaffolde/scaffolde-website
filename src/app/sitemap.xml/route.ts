import { siteContent } from "@/content/site";
const routes = ["/", "/manual", "/stack", "/proof", "/agents", "/llms.txt", "/llms-full.txt", "/index.md", "/manual.md", "/proof.md", "/stack.md", "/site.md", "/.well-known/agent.json"];
export function GET() {
  const urls = routes.map((route) => `<url><loc>${siteContent.canonicalUrl}${route}</loc><lastmod>2026-05-25</lastmod></url>`).join("");
  return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`, { headers: { "content-type": "application/xml; charset=utf-8" } });
}
