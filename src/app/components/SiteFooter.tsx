import { siteContent } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-[#d4d4cc] bg-[#111] text-[#F5F5F0]">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 md:grid-cols-[1.4fr_2fr] lg:px-10">
        <div>
          <p className="font-[family-name:var(--font-jetbrains)] text-sm tracking-[0.18em]"><span className="text-[#D9621C]">[</span> Scaffolde <span className="text-[#D9621C]">]</span></p>
          <p className="mt-4 max-w-md text-sm leading-6 text-[#F5F5F0]/60">{siteContent.definition}</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-3">
          <div>
            <h2 className="font-[family-name:var(--font-jetbrains)] text-xs uppercase tracking-[0.18em] text-[#D9621C]">Human</h2>
            <div className="mt-3 grid gap-2 text-sm text-[#F5F5F0]/70">
              <a href="/manual">Manual</a>
              <a href="/stack">Stack</a>
              <a href="/proof">Proof</a>
            </div>
          </div>
          <div>
            <h2 className="font-[family-name:var(--font-jetbrains)] text-xs uppercase tracking-[0.18em] text-[#D9621C]">Agent</h2>
            <div className="mt-3 grid gap-2 text-sm text-[#F5F5F0]/70">
              <a href="/llms.txt">llms.txt</a>
              <a href="/.well-known/agent.json">agent.json</a>
              <a href="/site.md">site.md</a>
            </div>
          </div>
          <div>
            <h2 className="font-[family-name:var(--font-jetbrains)] text-xs uppercase tracking-[0.18em] text-[#D9621C]">Contact</h2>
            <a className="mt-3 block text-sm text-[#F5F5F0]/70" href={`mailto:${siteContent.contactEmail}`}>{siteContent.contactEmail}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
