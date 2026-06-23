/**
 * Provider trust strip. Source: bundle "Verifies AI work across" block.
 * Pure static markup — no Reveal needed (sits directly under the hero).
 */
export default function TrustStrip() {
  return (
    <div className="strip">
      <div className="wrap strip-inner">
        <span className="strip-label">Verifies AI work across</span>
        <span className="strip-prov">Anthropic Claude</span>
        <span className="strip-dot">·</span>
        <span className="strip-prov">OpenAI GPT</span>
        <span className="strip-dot">·</span>
        <span className="strip-prov">Google Gemini</span>
        <span className="strip-dot">·</span>
        <span className="strip-prov">xAI Grok</span>
        <span className="strip-dot">·</span>
        <span className="strip-prov">Open-source models</span>
        <span className="strip-sep"></span>
        <span className="strip-note">
          Agents · Skills · Workflows · Sessions · Learnings · Memories
        </span>
      </div>
    </div>
  );
}
