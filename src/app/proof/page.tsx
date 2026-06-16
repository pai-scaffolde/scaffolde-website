import { ProofCard } from "../components/ProofCard";
import { SiteFooter } from "../components/SiteFooter";
import { SiteNav } from "../components/SiteNav";
import { siteContent } from "@/content/site";

export default function ProofPage() {
  return (
    <main className="min-h-screen bg-[#F5F5F0] text-[#1A1A1A] grid-bg">
      <SiteNav />
      <div className="mx-auto max-w-5xl px-6 py-16 lg:px-10">
        <p className="mb-5 font-[family-name:var(--font-jetbrains)] text-xs uppercase tracking-[0.26em] text-[#D9621C]">Proof ledger</p>
        <h1 className="font-[family-name:var(--font-display)] text-5xl font-bold leading-tight md:text-7xl">Claims need artifacts.</h1>
        <p className="mt-8 max-w-3xl text-xl leading-9 text-[#4A5568]">Scaffolde should be judged by evidence: task plans, verified outputs, runtime checks, browser QA, source maps, and honest limits. Partial claims stay partial.</p>
        <section aria-label="Evidence status preview" className="mt-12 grid gap-4 md:grid-cols-3">
          {[
            ["Evidenced", "Browser QA, routes, markdown mirrors"],
            ["Partial", "Runtime integrations still need end-to-end proof"],
            ["Do not claim", "No public action API until schemas exist"],
          ].map(([label, body]) => (
            <div key={label} className="rounded-3xl border border-[#d4d4cc] bg-white p-6 shadow-sm">
              <p className="font-[family-name:var(--font-jetbrains)] text-[10px] uppercase tracking-[0.2em] text-[#D9621C]">{label}</p>
              <p className="mt-3 text-sm leading-6 text-[#4A5568]">{body}</p>
            </div>
          ))}
        </section>
        <div className="mt-14 grid gap-5">
          {siteContent.proofClaims.map((claim) => <ProofCard key={claim.id} claim={claim} />)}
        </div>
      </div>
      <SiteFooter />
    </main>
  );
}
