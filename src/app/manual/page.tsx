import { OperatingLoop } from "../components/OperatingLoop";
import { SectionHeader } from "../components/SectionHeader";
import { SiteFooter } from "../components/SiteFooter";
import { SiteNav } from "../components/SiteNav";
import { siteContent } from "@/content/site";

export default function ManualPage() {
  return (
    <main className="min-h-screen bg-[#F5F5F0] text-[#1A1A1A] grid-bg">
      <SiteNav />
      <div className="mx-auto max-w-5xl px-6 py-16 lg:px-10">
        <p className="mb-5 font-[family-name:var(--font-jetbrains)] text-xs uppercase tracking-[0.26em] text-[#D9621C]">Operating manual</p>
        <h1 className="font-[family-name:var(--font-display)] text-5xl font-bold leading-tight md:text-7xl">How to understand Scaffolde.</h1>
        <p className="mt-8 max-w-3xl text-xl leading-9 text-[#4A5568]">{siteContent.definition}</p>
        <section aria-label="Scaffolde operating journey" className="mt-12 rounded-3xl border border-[#1A1A1A]/15 bg-[#111] p-6 text-[#F5F5F0] shadow-xl shadow-[#1A1A1A]/10">
          <p className="font-[family-name:var(--font-jetbrains)] text-[11px] uppercase tracking-[0.22em] text-[#D9621C]">Workflow trace</p>
          <div className="mt-5 grid gap-3 md:grid-cols-5">
            {["Intent", "Artifact", "Worker", "Evidence", "Learning"].map((step, index) => (
              <div key={step} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                <p className="font-[family-name:var(--font-jetbrains)] text-[10px] text-white/45">0{index + 1}</p>
                <p className="mt-2 font-[family-name:var(--font-display)] text-xl font-bold">{step}</p>
              </div>
            ))}
          </div>
        </section>
        <div className="mt-14 grid gap-6">
          {siteContent.manual.map((section) => (
            <section key={section.id} id={section.id} className="rounded-3xl border border-[#d4d4cc] bg-white p-8">
              <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold">{section.title}</h2>
              <p className="mt-3 font-semibold text-[#4A5568]">{section.summary}</p>
              {section.body.map((paragraph) => <p key={paragraph} className="mt-5 leading-8 text-[#4A5568]">{paragraph}</p>)}
            </section>
          ))}
        </div>
        <section className="mt-16">
          <SectionHeader eyebrow="Loop" title="The phase model in practice." />
          <OperatingLoop steps={siteContent.operatingLoop} />
        </section>
      </div>
      <SiteFooter />
    </main>
  );
}
