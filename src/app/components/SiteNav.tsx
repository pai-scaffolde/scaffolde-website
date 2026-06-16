import Link from "next/link";
import { siteContent } from "@/content/site";

export function SiteNav() {
  return (
    <nav className="sticky top-0 z-50 border-b border-[#d4d4cc] bg-[#F5F5F0]/90 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-10">
        <Link href="/" aria-label="Scaffolde home" data-testid="nav-home" className="font-[family-name:var(--font-jetbrains)] text-[15px] font-semibold tracking-wider">
          <span className="text-[#D9621C]">[</span>
          <span className="mx-1.5">Scaffolde</span>
          <span className="text-[#D9621C]">]</span>
        </Link>
        <div className="hidden items-center gap-5 md:flex">
          {siteContent.nav.map((link) =>
            link.href.startsWith("/") && !link.href.includes(".") ? (
              <Link key={link.href} href={link.href} aria-label={`Navigate to ${link.label}`} data-testid={`nav-${link.label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`} className="text-sm font-medium text-[#4A5568] transition-colors hover:text-[#1A1A1A]">
                {link.label}
              </Link>
            ) : (
              <a key={link.href} href={link.href} aria-label={`Open ${link.label}`} data-testid={`nav-${link.label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`} className="text-sm font-medium text-[#4A5568] transition-colors hover:text-[#1A1A1A]">
                {link.label}
              </a>
            ),
          )}
        </div>
        <a href={`mailto:${siteContent.contactEmail}`} aria-label="Contact Scaffolde about bringing a workflow" data-testid="nav-contact-workflow" className="rounded-full bg-[#1A1A1A] px-4 py-2 text-sm font-semibold text-[#F5F5F0] transition-colors hover:bg-black">
          Bring a workflow
        </a>
      </div>
    </nav>
  );
}
