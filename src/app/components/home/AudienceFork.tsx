import Reveal from "../Reveal";

/**
 * Audience fork — two clickable cards (teams → /product, investors →
 * /investors). Source: bundle "For teams / For investors" block.
 */
export default function AudienceFork() {
  return (
    <section className="fork">
      <div className="wrap">
        <div className="fork-grid">
          <Reveal className="fork-card" href="/product">
            <div className="kicker">For teams</div>
            <h3>Evaluating Scaffolde</h3>
            <p>
              Open a real, inspectable verification artifact and see how
              independent attestation works across every model, agent, and
              workflow you run, including open-source and self-hosted models.
            </p>
            <span className="go">
              Explore the product <span className="arr">&rarr;</span>
            </span>
          </Reveal>
          <Reveal className="fork-card" href="/investors">
            <div className="kicker">For investors</div>
            <h3>Investing in the category</h3>
            <p>
              The thesis, the market and why now, the wedge, the founder, and
              the path into the data room.
            </p>
            <span className="go">
              See the opportunity <span className="arr">&rarr;</span>
            </span>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
