import Reveal from "../Reveal";
import { COVERAGE } from "./coverageData";

/**
 * "What Scaffolde covers — one plane, every surface." 9-card grid,
 * including Full model support. Source: bundle "What Scaffolde covers"
 * block. Icons + cards reuse the product-page feature-card idiom.
 */
export default function CoverageSection() {
  return (
    <section className="sec">
      <div className="wrap">
        <Reveal className="sec-head">
          <div className="kicker">What Scaffolde covers</div>
          <h2>One plane, every surface.</h2>
          <p>
            The grader can&rsquo;t be the graded — and that now spans your
            entire AI stack, not just a model&rsquo;s output.
          </p>
        </Reveal>
        <Reveal className="feat-grid">
          {COVERAGE.map((c) => (
            <div className="feat-card" key={c.title}>
              <div className="feat-ic" aria-hidden="true">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {c.icon}
                </svg>
              </div>
              <h3>{c.title}</h3>
              <p>{c.body}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
