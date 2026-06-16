import Image from "next/image";
import { AgentSurfaceLinks } from "./components/AgentSurfaceLinks";
import { OperatingLoop } from "./components/OperatingLoop";
import { ProofCard } from "./components/ProofCard";
import { SectionHeader } from "./components/SectionHeader";
import { SiteFooter } from "./components/SiteFooter";
import { SiteNav } from "./components/SiteNav";
import { StatusBadge } from "./components/StatusBadge";
import { siteContent } from "@/content/site";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F5F5F0] text-[#1A1A1A] grid-bg">
      <SiteNav />
      <section className="border-b border-[#d4d4cc]">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-[1.1fr_0.9fr] md:py-24 lg:px-10">
          <div>
            <p className="mb-6 font-[family-name:var(--font-jetbrains)] text-xs uppercase tracking-[0.28em] text-[#D9621C]">Personal AI capability factory</p>
            <h1 className="font-[family-name:var(--font-display)] text-5xl font-bold leading-[0.95] tracking-tight md:text-7xl">
              AI infrastructure for agents that actually do work.
            </h1>
            <div className="mt-7 grid grid-cols-3 gap-2 md:hidden" aria-label="Scaffolde capability preview">
              {["Intent", "Agents", "Proof"].map((item) => (
                <div key={item} className="rounded-2xl border border-[#d4d4cc] bg-white/85 px-3 py-3 text-center shadow-sm">
                  <p className="font-[family-name:var(--font-jetbrains)] text-[10px] uppercase tracking-[0.18em] text-[#D9621C]">{item}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 max-w-2xl text-xl leading-9 text-[#4A5568]">{siteContent.definition}</p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="/manual" aria-label="Read the Scaffolde operating manual" data-testid="hero-read-manual" className="rounded-full bg-[#D9621C] px-6 py-3 font-semibold text-white shadow-lg shadow-[#D9621C]/20">Read the manual</a>
              <a href="/proof" aria-label="Inspect the Scaffolde proof ledger" data-testid="hero-inspect-proof" className="rounded-full border border-[#1A1A1A]/25 bg-white/70 px-6 py-3 font-semibold">Inspect proof</a>
              <a href="/llms.txt" aria-label="Open the Scaffolde agent entrypoint llms.txt" data-testid="hero-agent-entrypoint" className="rounded-full border border-[#1A1A1A]/25 px-6 py-3 font-semibold">Agent entrypoint</a>
            </div>
          </div>
          <figure className="overflow-hidden rounded-[2rem] border border-[#1A1A1A]/15 bg-white shadow-2xl shadow-[#1A1A1A]/15">
            <Image
              src="/images/scaffolde/capability-map.svg"
              alt="Scaffolde capability factory map: intent flows through PAI, Hermes, specialist agents, memory, GStack proof, and public surfaces."
              width={1200}
              height={820}
              priority
              className="h-auto w-full object-contain md:min-h-[420px]"
            />
            <figcaption className="border-t border-[#d4d4cc] bg-[#111] px-5 py-4 font-[family-name:var(--font-jetbrains)] text-xs uppercase tracking-[0.2em] text-[#F5F5F0]/70">
              Live dogfood: the site is a map of the system that built it.
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <SectionHeader eyebrow="Operating loop" title="From intent to verified work." body="Scaffolde is organized around explicit phase boundaries and proof questions. The loop matters more than the logo on any one model or tool." />
        <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
          <figure className="overflow-hidden rounded-[2rem] border border-[#1A1A1A]/15 bg-white shadow-xl shadow-[#1A1A1A]/10">
            <Image
              src="/images/scaffolde/operating-loop.svg"
              alt="A circular Scaffolde operating loop connecting skills, memory, define, dispatch, verify, and learn around an ideal-state artifact."
              width={900}
              height={900}
              className="w-full"
            />
          </figure>
          <OperatingLoop steps={siteContent.operatingLoop} />
        </div>
      </section>

      <section className="border-y border-[#d4d4cc] bg-white/70">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
          <SectionHeader eyebrow="Stack" title="Agents, memory, workflows, skills, surfaces, proof." body="The breadth only makes sense when it is arranged as an operating stack. Status badges are deliberate: partial means useful but not safe to overclaim." />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {siteContent.stackLayers.map((layer) => (
              <article key={layer.id} className="rounded-2xl border border-[#d4d4cc] bg-[#F5F5F0] p-6">
                <div className="mb-4 flex items-start justify-between gap-3">
                  <h3 className="font-[family-name:var(--font-display)] text-2xl font-bold">{layer.name}</h3>
                  <StatusBadge status={layer.status} />
                </div>
                <p className="text-sm leading-6 text-[#4A5568]">{layer.summary}</p>
                <p className="mt-5 font-[family-name:var(--font-jetbrains)] text-[11px] leading-5 text-[#666]">{layer.examples.join(" / ")}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <SectionHeader eyebrow="Proof ledger" title="No fake green." body="The site exposes what is evidenced, what is partial, and what should not be claimed yet. This is a product principle, not just a page." />
        <div className="grid gap-4">
          {siteContent.proofClaims.slice(0, 4).map((claim) => <ProofCard key={claim.id} claim={claim} />)}
        </div>
      </section>

      <section className="border-y border-[#d4d4cc] bg-white/70">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[1fr_0.95fr] lg:items-center lg:px-10">
          <div>
            <SectionHeader eyebrow="Agent readable" title="The website is an operating surface." body="Agents should not have to infer Scaffolde from screenshots or animation. Public context is available as HTML, Markdown, text, JSON, XML, and stable routes." />
            <AgentSurfaceLinks surfaces={siteContent.agentSurfaces.slice(0, 6)} />
          </div>
          <figure className="overflow-hidden rounded-[2rem] border border-[#1A1A1A]/15 bg-[#F5F5F0] shadow-xl shadow-[#1A1A1A]/10">
            <Image
              src="/images/scaffolde/human-agent-surfaces.svg"
              alt="Human-facing pages and agent-facing machine-readable routes connected through Scaffolde."
              width={1200}
              height={700}
              loading="eager"
              className="w-full object-contain md:h-full md:min-h-[360px] md:object-cover"
            />
          </figure>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="rounded-3xl border border-[#d4d4cc] bg-[#1A1A1A] p-8 text-[#F5F5F0] md:p-12">
          <p className="font-[family-name:var(--font-jetbrains)] text-xs uppercase tracking-[0.24em] text-[#D9621C]">Built using Scaffolde</p>
          <h2 className="mt-5 max-w-3xl font-[family-name:var(--font-display)] text-4xl font-bold leading-tight md:text-5xl">This website is also a test harness.</h2>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-[#F5F5F0]/65">The build surfaced real friction: missing gstack commands, an interactive Claude diagnostic, stale GBrain sync failures, and absent website tests. Those are not hidden. They become backlog and proof of where the operating system needs to improve.</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href={`mailto:${siteContent.contactEmail}`} aria-label="Contact Scaffolde to bring a workflow" data-testid="cta-contact-workflow" className="rounded-full bg-[#D9621C] px-6 py-3 font-semibold text-white">Bring a workflow</a>
            <a href="/site.md" aria-label="Download the Scaffolde site context markdown" data-testid="cta-download-site-context" className="rounded-full border border-white/20 px-6 py-3 font-semibold">Download site context</a>
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
