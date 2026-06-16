import { Status, statusLabels } from "@/content/site";

const classes: Record<Status, string> = {
  evidenced: "border-[#2C5F3D]/30 bg-[#2C5F3D]/10 text-[#2C5F3D]",
  partial: "border-[#C7A05F]/40 bg-[#C7A05F]/15 text-[#7A5A16]",
  planned: "border-[#4A5568]/25 bg-[#4A5568]/10 text-[#4A5568]",
  "do-not-claim-yet": "border-[#D9621C]/30 bg-[#D9621C]/10 text-[#A64512]",
};

export function StatusBadge({ status }: { status: Status }) {
  return (
    <span className={`inline-flex rounded-full border px-3 py-1 font-[family-name:var(--font-jetbrains)] text-[10px] uppercase tracking-[0.16em] ${classes[status]}`}>
      {statusLabels[status]}
    </span>
  );
}
