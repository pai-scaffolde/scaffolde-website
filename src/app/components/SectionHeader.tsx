export function SectionHeader({ eyebrow, title, body }: { eyebrow: string; title: string; body?: string }) {
  return (
    <div className="mb-10 max-w-3xl">
      <p className="mb-4 font-[family-name:var(--font-jetbrains)] text-xs uppercase tracking-[0.24em] text-[#D9621C]">{eyebrow}</p>
      <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold leading-tight text-[#1A1A1A] md:text-5xl">{title}</h2>
      {body ? <p className="mt-5 text-lg leading-8 text-[#4A5568]">{body}</p> : null}
    </div>
  );
}
