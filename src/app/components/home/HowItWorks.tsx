import Link from "next/link";
import Reveal from "../Reveal";

/**
 * "How it works" — independent-layer intro + plane diagram + 3 steps.
 * Source: bundle "How it works" block. Imagery uses the plane diagram
 * (public/imagery/scaffolde-plane-diagram.png).
 */
export default function HowItWorks() {
  return (
    <section className="alt sec">
      <div className="wrap">
        <Reveal className="sec-head">
          <div className="kicker">How it works</div>
          <h2>Why the verifier has to be independent of the model.</h2>
          <p>
            Scaffolde sits outside the model vendors. It sets acceptance
            criteria before the work begins, then checks, evidences, and
            attests the result. The party proving the work has no stake in
            the model&rsquo;s reputation.
          </p>
        </Reveal>
        <Reveal className="split">
          <div className="split-media">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/imagery/scaffolde-plane-diagram.png"
              alt="Diagram: Scaffolde as the independent verification layer sitting between AI providers and the enterprise"
              width={900}
              height={640}
            />
          </div>
          <div className="split-body">
            <div className="step">
              <span className="step-n">1</span>
              <div>
                <b>Criteria set up front.</b> Acceptance criteria are defined
                before the AI does the work. &ldquo;Done&rdquo; is decided
                independently, not after the fact.
              </div>
            </div>
            <div className="step">
              <span className="step-n">2</span>
              <div>
                <b>Checked &amp; evidenced.</b> What the AI was asked, the
                actions it took, and what it produced are captured and verified
                against the criteria.
              </div>
            </div>
            <div className="step">
              <span className="step-n">3</span>
              <div>
                <b>Independently attested.</b> A party with no stake in the
                model&rsquo;s reputation signs a tamper-evident proof you can
                open, export, and audit.
              </div>
            </div>
            <Link href="/how-it-works" className="link-arrow">
              Read the full story <span className="arr">&rarr;</span>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
