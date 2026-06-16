import { ProofClaim } from "@/content/site";
import { StatusBadge } from "./StatusBadge";

export function ProofCard({ claim }: { claim: ProofClaim }) {
  return (
    <article className="rounded-2xl border border-[#d4d4cc] bg-white p-6 shadow-sm">
      <div className="mb-5 flex flex-wrap items-start justify-between gap-3">
        <h3 className="max-w-2xl font-[family-name:var(--font-display)] text-xl font-bold leading-snug">{claim.claim}</h3>
        <StatusBadge status={claim.status} />
      </div>
      <ul className="grid gap-2 text-sm leading-6 text-[#4A5568]">
        {claim.evidence.map((item) => (
          <li key={`${claim.id}-${item.label}`} className="border-l-2 border-[#D9621C]/30 pl-3">
            {item.href ? <a className="font-semibold text-[#1A1A1A] underline decoration-[#D9621C]/40 underline-offset-4" href={item.href}>{item.label}</a> : <span className="font-semibold text-[#1A1A1A]">{item.label}</span>}
            {item.note ? <span> — {item.note}</span> : null}
          </li>
        ))}
      </ul>
    </article>
  );
}
