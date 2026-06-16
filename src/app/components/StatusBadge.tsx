// StatusBadge — supports both legacy Status type and new ProofBadge variant

export type Variant = "evidenced" | "partial" | "noclaim";

// Legacy type kept for backward compatibility with other pages
export type Status =
  | "Evidenced"
  | "Partial"
  | "Do not claim yet"
  | "Active"
  | "Planned"
  | "In Progress";

interface StatusBadgeProps {
  status: Status;
}

const legacyVariantMap: Record<Status, { cls: string; label: string }> = {
  Evidenced: {
    cls: "badge-evidenced",
    label: "Evidenced",
  },
  Partial: {
    cls: "badge-partial",
    label: "Partial",
  },
  "Do not claim yet": {
    cls: "badge-noclaim",
    label: "Do not claim yet",
  },
  Active: {
    cls: "badge-evidenced",
    label: "Active",
  },
  Planned: {
    cls: "badge-partial",
    label: "Planned",
  },
  "In Progress": {
    cls: "badge-partial",
    label: "In Progress",
  },
};

export default function StatusBadge({ status }: StatusBadgeProps) {
  const cfg = legacyVariantMap[status] ?? { cls: "badge-partial", label: status };
  return <span className={`proof-badge ${cfg.cls}`}>{cfg.label}</span>;
}

// ---- New ProofBadge for the Honest Instrument design ----

interface ProofBadgeProps {
  variant: Variant;
}

const variantConfig: Record<Variant, { label: string; style: React.CSSProperties }> = {
  evidenced: {
    label: "Evidenced",
    style: {
      color: "var(--evidenced)",
      borderColor: "color-mix(in srgb, var(--evidenced) 35%, transparent)",
      background: "color-mix(in srgb, var(--evidenced) 8%, transparent)",
    },
  },
  partial: {
    label: "Partial",
    style: {
      color: "var(--partial)",
      borderColor: "color-mix(in srgb, var(--partial) 35%, transparent)",
      background: "color-mix(in srgb, var(--partial) 8%, transparent)",
    },
  },
  noclaim: {
    label: "Do not claim yet",
    style: {
      color: "var(--noclaim)",
      borderColor: "color-mix(in srgb, var(--noclaim) 35%, transparent)",
      background: "color-mix(in srgb, var(--noclaim) 8%, transparent)",
    },
  },
};

export function ProofBadge({ variant }: ProofBadgeProps) {
  const cfg = variantConfig[variant];
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "6px",
        fontFamily: "var(--mono)",
        fontSize: "0.65rem",
        textTransform: "uppercase",
        letterSpacing: "0.08em",
        fontWeight: 500,
        padding: "3px 9px",
        borderRadius: "999px",
        border: "1px solid",
        ...cfg.style,
      }}
    >
      <span
        style={{
          display: "inline-block",
          width: "6px",
          height: "6px",
          borderRadius: "50%",
          background: "currentColor",
          flexShrink: 0,
        }}
      />
      {cfg.label}
    </span>
  );
}
