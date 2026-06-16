import { OperatingStep } from "@/content/site";

export function OperatingLoop({ steps }: { steps: readonly OperatingStep[] }) {
  return (
    <div className="grid gap-4 md:grid-cols-5">
      {steps.map((step) => (
        <article key={step.id} className="rounded-2xl border border-[#d4d4cc] bg-white p-6 shadow-sm">
          <p className="font-[family-name:var(--font-jetbrains)] text-xs tracking-[0.2em] text-[#D9621C]">{step.shortName}</p>
          <h3 className="mt-4 font-[family-name:var(--font-display)] text-2xl font-bold">{step.name}</h3>
          <p className="mt-3 text-sm leading-6 text-[#4A5568]">{step.description}</p>
          <p className="mt-5 border-t border-[#e2e0d8] pt-4 font-[family-name:var(--font-jetbrains)] text-[11px] leading-5 text-[#666]">{step.proofQuestion}</p>
        </article>
      ))}
    </div>
  );
}
