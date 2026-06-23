import type { Metadata } from "next";
import Link from "next/link";
import SiteNav from "../components/SiteNav";
import SiteFooter from "../components/SiteFooter";
import Reveal from "../components/Reveal";

export const metadata: Metadata = {
  title: "How it works: The independent AI verification layer | Scaffolde",
  description:
    "Scaffolde sits outside the model vendors. Criteria are set before the work, the result is checked and evidenced, an independent party attests it, and anyone can audit the proof.",
};

const FLOW = [
  {
    fn: "01 / VERIFY",
    title: "Criteria, then check",
    body: (
      <>
        Acceptance criteria are set <em>before</em> the AI does the work. When the
        run finishes, its ask, actions, and output are checked against those
        criteria.
      </>
    ),
  },
  {
    fn: "02 / ATTEST",
    title: "Independent signature",
    body: "A party with no stake in the model signs the result, recording what was asked, what was done, and whether it passed.",
  },
  {
    fn: "03 / PROVE",
    title: "Tamper-evident bundle",
    body: "The action trace, evidence, and attestation are sealed into a SHA-256 proof bundle you can open, export, and verify.",
  },
  {
    fn: "04 / AUDIT",
    title: "Reportable record",
    body: "Every proof rolls up into a running, queryable record: pass rates, provider coverage, and full history for any auditor.",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <SiteNav />

      {/* PAGE HERO */}
      <header className="page-hero">
        <Reveal className="wrap">
          <div className="kicker">How it works</div>
          <h1>The grader can&rsquo;t be the graded.</h1>
          <p className="lede">
            Scaffolde is an independent layer that sits outside the model vendors,
            between your AI and the people who must trust it. Here&rsquo;s how a run
            becomes a proof.
          </p>
          <div className="cta">
            <Link href="/dashboard" className="btn btn-primary">
              Inspect a live proof <span className="arr">&rarr;</span>
            </Link>
            <Link href="/product" className="btn btn-ghost">
              See the product
            </Link>
          </div>
        </Reveal>
      </header>

      {/* THE INDEPENDENT LAYER */}
      <section className="sec">
        <div className="wrap">
          <Reveal className="split">
            <div className="split-media">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/imagery/scaffolde-plane-diagram.png"
                alt="Diagram of Scaffolde as the independent verification layer between AI providers and the enterprise"
                width={900}
                height={640}
              />
            </div>
            <div className="split-body">
              <div className="kicker">The independent layer</div>
              <h2 className="h2-tight">Why an outside party has to do the proving.</h2>
              <p>
                When the company that builds the model also certifies that the model
                worked, the certificate is worth nothing. Scaffolde connects to
                Anthropic, OpenAI, Google, xAI, and open-source providers, but
                is owned by none of them. The party signing the proof has no stake in
                any model&rsquo;s reputation.
              </p>
              <p>
                That independence is the product. It&rsquo;s what makes a Scaffolde
                attestation something you can hand to a regulator, an auditor, or a
                customer and have it mean something.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* THE FLOW */}
      <section className="alt sec">
        <div className="wrap">
          <Reveal className="sec-head sec-head-center">
            <div className="kicker">The flow</div>
            <h2>Verify &rarr; attest &rarr; prove &rarr; audit.</h2>
            <p>
              Four steps turn an AI run into a tamper-evident record anyone can
              check.
            </p>
          </Reveal>
          <Reveal className="flow">
            {FLOW.map((s) => (
              <div className="flow-step" key={s.fn}>
                <span className="fn">{s.fn}</span>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* WHAT GETS RECORDED */}
      <section className="sec">
        <div className="wrap">
          <Reveal className="split split-rev">
            <div className="split-body">
              <div className="kicker">Inside a proof</div>
              <h2 className="h2-tight">What every record contains.</h2>
              <div className="step">
                <span className="step-n">A</span>
                <div>
                  <b>The original ask.</b> The exact request the AI was given,
                  captured verbatim.
                </div>
              </div>
              <div className="step">
                <span className="step-n">B</span>
                <div>
                  <b>The action trace.</b> Every step the AI took to reach its
                  result: tools, calls, and intermediate work.
                </div>
              </div>
              <div className="step">
                <span className="step-n">C</span>
                <div>
                  <b>The proof bundle.</b> Evidence checked against the up-front
                  criteria, sealed and hashed.
                </div>
              </div>
              <div className="step">
                <span className="step-n">D</span>
                <div>
                  <b>The independent attestation.</b> The signature of the party
                  that has no stake in the model.
                </div>
              </div>
              <div className="step">
                <span className="step-n">E</span>
                <div>
                  <b>The vendor boundary.</b> Which provider and model ran.
                  Recorded, never trusted to self-certify.
                </div>
              </div>
            </div>
            <div className="split-media">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/imagery/real-session-detail.png"
                alt="Session detail with verification proof: the ask, action trace, proof bundle, sealed attestation, and vendor boundary"
                width={1600}
                height={1000}
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* PULL QUOTE */}
      <section className="alt sec">
        <Reveal className="wrap">
          <div className="pull">
            <q>
              You can&rsquo;t trust an AI&rsquo;s word that it did the work. You can
              trust an independent, tamper-evident record of how it did the work.
            </q>
            <div className="attr">The Scaffolde principle</div>
          </div>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="cta-band">
        <Reveal className="wrap cta-band-inner">
          <div>
            <h2>See a real proof.</h2>
            <p>
              Open the live dashboard and walk a single run from ask to attestation
              yourself.
            </p>
          </div>
          <div className="cta-band-actions">
            <Link href="/dashboard" className="btn btn-primary btn-lg">
              Inspect a live proof <span className="arr">&rarr;</span>
            </Link>
            <Link href="/product" className="btn btn-ghost btn-lg">
              See the product
            </Link>
          </div>
        </Reveal>
      </section>

      <SiteFooter />
    </>
  );
}
