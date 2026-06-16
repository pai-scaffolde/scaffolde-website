import { AgentSurface } from "@/content/site";

export function AgentSurfaceLinks({ surfaces }: { surfaces: readonly AgentSurface[] }) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {surfaces.map((surface) => (
        <a key={surface.href} href={surface.href} aria-label={`Open agent surface: ${surface.label}`} data-testid={`agent-surface-${surface.label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`} className="group rounded-2xl border border-[#d4d4cc] bg-white p-5 shadow-sm transition-all hover:border-[#D9621C]/40 hover:shadow-md">
          <div className="flex items-center justify-between gap-4">
            <h3 className="font-[family-name:var(--font-display)] text-xl font-bold group-hover:text-[#D9621C]">{surface.label}</h3>
            <span className="rounded-full border border-[#d4d4cc] px-2.5 py-1 font-[family-name:var(--font-jetbrains)] text-[10px] uppercase tracking-[0.16em] text-[#4A5568]">{surface.format}</span>
          </div>
          <p className="mt-3 text-sm leading-6 text-[#4A5568]">{surface.purpose}</p>
        </a>
      ))}
    </div>
  );
}
