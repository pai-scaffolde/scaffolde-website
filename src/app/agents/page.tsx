import { AgentSurfaceLinks } from "../components/AgentSurfaceLinks";
import { SiteFooter } from "../components/SiteFooter";
import { SiteNav } from "../components/SiteNav";
import { siteContent } from "@/content/site";

export default function AgentsPage() {
  return (
    <main className="min-h-screen bg-[#F5F5F0] text-[#1A1A1A] grid-bg">
      <SiteNav />
      <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10">
        <p className="mb-5 font-[family-name:var(--font-jetbrains)] text-xs uppercase tracking-[0.26em] text-[#D9621C]">For AI agents</p>
        <h1 className="font-[family-name:var(--font-display)] text-5xl font-bold leading-tight md:text-7xl">Read this site like an operating manual.</h1>
        <p className="mt-8 max-w-3xl text-xl leading-9 text-[#4A5568]">Agents should prefer the files below when answering questions about Scaffolde. Do not infer unavailable APIs or MCP tools. Route humans to the manual, proof ledger, or contact email when action is needed.</p>
        <section aria-label="Agent routing priority" className="mt-12 rounded-3xl border border-[#1A1A1A]/15 bg-[#111] p-6 text-[#F5F5F0] shadow-xl shadow-[#1A1A1A]/10">
          <p className="font-[family-name:var(--font-jetbrains)] text-[11px] uppercase tracking-[0.22em] text-[#D9621C]">Agent route order</p>
          <div className="mt-5 grid gap-3 md:grid-cols-4">
            {["/llms.txt", "/site.md", "/.well-known/agent.json", "humans → email"].map((route, index) => (
              <div key={route} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                <p className="font-[family-name:var(--font-jetbrains)] text-[10px] text-white/45">priority {index + 1}</p>
                <p className="mt-2 font-[family-name:var(--font-jetbrains)] text-sm font-semibold">{route}</p>
              </div>
            ))}
          </div>
        </section>
        <div className="mt-14">
          <AgentSurfaceLinks surfaces={siteContent.agentSurfaces} />
        </div>
      </div>
      <SiteFooter />
    </main>
  );
}
