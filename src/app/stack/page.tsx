import { SiteFooter } from "../components/SiteFooter";
import { SiteNav } from "../components/SiteNav";
import { StatusBadge } from "../components/StatusBadge";
import { siteContent } from "@/content/site";

export default function StackPage() {
  return (
    <main className="min-h-screen bg-[#F5F5F0] text-[#1A1A1A] grid-bg">
      <SiteNav />
      <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10">
        <p className="mb-5 font-[family-name:var(--font-jetbrains)] text-xs uppercase tracking-[0.26em] text-[#D9621C]">Stack map</p>
        <h1 className="font-[family-name:var(--font-display)] text-5xl font-bold leading-tight md:text-7xl">The operating stack behind useful agents.</h1>
        <p className="mt-8 max-w-3xl text-xl leading-9 text-[#4A5568]">Scaffolde is easiest to understand as layers: algorithm, agents, memory, skills, surfaces, and proof. Each layer has a readiness status so the site does not overclaim.</p>
        <section aria-label="Layered Scaffolde stack diagram" className="mt-12 rounded-3xl border border-[#1A1A1A]/15 bg-white p-6 shadow-xl shadow-[#1A1A1A]/10">
          <div className="grid gap-3 md:grid-cols-3">
            {siteContent.stackLayers.map((layer) => (
              <div key={layer.id} className="rounded-2xl border border-[#d4d4cc] bg-[#F5F5F0] p-4">
                <p className="font-[family-name:var(--font-jetbrains)] text-[10px] uppercase tracking-[0.2em] text-[#D9621C]">{layer.status}</p>
                <p className="mt-2 font-[family-name:var(--font-display)] text-xl font-bold">{layer.name}</p>
              </div>
            ))}
          </div>
        </section>
        <div className="mt-14 grid gap-5">
          {siteContent.stackLayers.map((layer) => (
            <article key={layer.id} className="rounded-3xl border border-[#d4d4cc] bg-white p-8">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold">{layer.name}</h2>
                <StatusBadge status={layer.status} />
              </div>
              <p className="mt-5 text-lg leading-8 text-[#4A5568]">{layer.summary}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {layer.examples.map((example) => <span key={example} className="rounded-full border border-[#d4d4cc] bg-[#F5F5F0] px-3 py-1 font-[family-name:var(--font-jetbrains)] text-[11px] text-[#4A5568]">{example}</span>)}
              </div>
            </article>
          ))}
        </div>
      </div>
      <SiteFooter />
    </main>
  );
}
