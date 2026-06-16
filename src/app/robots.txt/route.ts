import { siteContent } from "@/content/site";
export function GET() {
  return new Response(`User-agent: *
Allow: /
Disallow: /api/private/

Sitemap: ${siteContent.canonicalUrl}/sitemap.xml
`, { headers: { "content-type": "text/plain; charset=utf-8" } });
}
