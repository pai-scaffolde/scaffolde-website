import { ProofBadge, type Variant } from "./StatusBadge";

interface Layer {
  index: string;
  name: string;
  variant: Variant;
  active?: boolean;
}

const layers: Layer[] = [
  { index: "L1", name: "Algorithm spine", variant: "evidenced" },
  { index: "L2", name: "Agents", variant: "partial" },
  { index: "L3", name: "Memory", variant: "partial" },
  { index: "L4", name: "Skills & workflows", variant: "evidenced", active: true },
  { index: "L5", name: "Surfaces", variant: "partial" },
  { index: "L6", name: "Proof & improvement", variant: "evidenced" },
];

export default function CapabilityMap() {
  return (
    <div
      style={{
        border: "1px solid var(--line)",
        borderRadius: "var(--r-lg)",
        background: "var(--surface)",
        overflow: "hidden",
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px 14px",
          borderBottom: "1px solid var(--line)",
        }}
      >
        <span
          style={{
            fontFamily: "var(--mono)",
            fontSize: "0.6875rem",
            textTransform: "uppercase",
            letterSpacing: "0.12em",
            color: "var(--muted)",
            fontWeight: 500,
          }}
        >
          Verification Plane
        </span>
        <span
          style={{
            width: "7px",
            height: "7px",
            borderRadius: "50%",
            background: "var(--evidenced)",
            boxShadow: "0 0 8px var(--evidenced)",
            display: "inline-block",
          }}
        />
      </div>

      {/* Layers */}
      {layers.map((layer) => (
        <div
          key={layer.index}
          style={{
            display: "grid",
            gridTemplateColumns: "22px 1fr auto",
            alignItems: "center",
            gap: "12px",
            padding: "13px 14px",
            borderBottom: "1px solid var(--line)",
            fontSize: "0.9rem",
            background: layer.active
              ? "linear-gradient(90deg, rgba(56,224,212,0.07), transparent)"
              : undefined,
          }}
        >
          <span
            style={{
              fontFamily: "var(--mono)",
              fontSize: "0.7rem",
              color: "var(--muted)",
            }}
          >
            {layer.index}
          </span>
          <span
            style={{
              color: layer.active ? "var(--accent)" : "var(--text)",
            }}
          >
            {layer.name}
          </span>
          <ProofBadge variant={layer.variant} />
        </div>
      ))}
    </div>
  );
}
