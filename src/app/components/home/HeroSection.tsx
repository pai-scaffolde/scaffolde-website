import Link from "next/link";
import Reveal from "../Reveal";
import MotionGate from "../MotionGate";

/**
 * Hero — left copy + primary/secondary CTA, right floating product shot.
 * Source: bundle "hero" block. Imagery uses the real Overview dashboard
 * (public/imagery/real-overview.png) per the truthful-imagery rule.
 */
export default function HeroSection() {
  return (
    <header className="hero">
      <div className="wrap hero-grid">
        <Reveal className="hero-copy">
          <div className="kicker">Independent AI verification &amp; audit</div>
          <h1>
            Independent proof of what your AI{" "}
            <span className="grad">actually did.</span>
          </h1>
          <p className="lede">
            Scaffolde records what every model, agent, and workflow across your
            business was asked, did, and proved: Anthropic, OpenAI, Google, xAI,
            and open-source models. Attested independently. The grader can&rsquo;t be the
            graded.
          </p>
          <div className="cta">
            <Link href="/dashboard" className="btn btn-primary">
              Inspect a live proof <span className="arr">&rarr;</span>
            </Link>
            <Link href="/product" className="btn btn-ghost">
              See the product
            </Link>
          </div>
          <ul className="trust">
            <li>
              <span className="tick">✓</span> Tamper-evident records
            </li>
            <li>
              <span className="tick">✓</span> Multi-provider
            </li>
            <li>
              <span className="tick">✓</span> Independent attestation
            </li>
          </ul>
        </Reveal>
        <Reveal className="hero-shot-reveal">
          <MotionGate className="hero-shot">
            <div className="shot-glow"></div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/imagery/real-overview.png"
              alt="Scaffolde Overview dashboard: independently verified runs, pass rate, and per-model mix across providers"
              width={1600}
              height={1000}
              loading="eager"
            />
          </MotionGate>
        </Reveal>
      </div>
    </header>
  );
}
