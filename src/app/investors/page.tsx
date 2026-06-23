import type { Metadata } from "next";
import Link from "next/link";
import SiteNav from "../components/SiteNav";
import SiteFooter from "../components/SiteFooter";
import Reveal from "../components/Reveal";

const CAL_URL = "https://calendar.app.google/T9vjWKpBvC9w3APV6";

export const metadata: Metadata = {
  title: "Investors — The independent AI verification category | Scaffolde",
  description:
    "Scaffolde is the independent verification and audit plane for AI-native business. The thesis, the market and why now, the wedge, the founder, and the path to the data room.",
};

export default function InvestorsPage() {
  return (
    <>
      <SiteNav variant="investors" />

      {/* PAGE HERO */}
      <header className="page-hero">
        <Reveal className="wrap">
          <div className="kicker">For investors · Pre-seed</div>
          <h1>Someone has to certify AI. It can&rsquo;t be the AI vendors.</h1>
          <p className="lede">
            Scaffolde is the independent verification and audit plane for AI-native
            business — the notary for what AI was asked, did, and proved. We&rsquo;re
            raising a pre-seed round to own that category.
          </p>
          <div className="cta">
            <a href={CAL_URL} className="btn btn-primary">
              Request the data room <span className="arr">&rarr;</span>
            </a>
            <Link href="/dashboard" className="btn btn-ghost">
              Inspect the live product
            </Link>
          </div>
        </Reveal>
      </header>

      {/* THESIS (navy diligence section) */}
      <section className="navy-sec sec">
        <div className="wrap">
          <Reveal className="sec-head">
            <div className="kicker">The thesis</div>
            <h2>The grader can&rsquo;t be the graded.</h2>
            <p>
              Enterprises are putting AI into decisions they have to defend. The
              companies that build the models can&rsquo;t be the ones who certify the
              models worked. That independent verification layer doesn&rsquo;t exist
              yet — and it&rsquo;s a category, not a feature.
            </p>
          </Reveal>
          <Reveal className="thesis-grid">
            <div className="thesis-card">
              <span className="num">01</span>
              <h3>An independent plane</h3>
              <p>
                Scaffolde sits outside Anthropic, OpenAI, and Google — recording and
                attesting what every model, agent, and workflow actually did, with no
                stake in any vendor&rsquo;s reputation.
              </p>
            </div>
            <div className="thesis-card">
              <span className="num">02</span>
              <h3>Tamper-evident proof</h3>
              <p>
                Every run becomes a sealed, signed, exportable record. The artifact
                is the moat: once it&rsquo;s the proof a regulator accepts, it&rsquo;s
                the standard.
              </p>
            </div>
            <div className="thesis-card">
              <span className="num">03</span>
              <h3>Become the standard</h3>
              <p>
                The endgame is to be the notary for AI attestation — the layer every
                audited AI decision routes through. Narrow wedge, broad future.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* MARKET & WHY NOW */}
      <section className="sec">
        <div className="wrap">
          <Reveal className="sec-head">
            <div className="kicker">Market &amp; why now</div>
            <h2>The governance wave is arriving before the proof layer exists.</h2>
            <p>
              AI moved into regulated, high-stakes decisions faster than anyone built
              the means to verify it. The enforcement and the budgets are landing now
              — the independent proof layer is the missing piece.
            </p>
          </Reveal>
          <Reveal className="deflist">
            <div className="defitem">
              <h3>Regulation is enforcing</h3>
              <p>
                The EU AI Act and a wave of sector rules now demand auditable
                evidence of how AI reached a decision — not vendor assurances.
              </p>
            </div>
            <div className="defitem">
              <h3>Governance budgets are funded</h3>
              <p>
                AI observability and governance has become a named line item.
                Enterprises are buying the means to prove their AI, not just run it.
              </p>
            </div>
            <div className="defitem">
              <h3>Agents made it urgent</h3>
              <p>
                Autonomous agents act across the business. &ldquo;Did the model give
                a good answer&rdquo; became &ldquo;what did our agents actually do,
                everywhere, and can we prove it.&rdquo;
              </p>
            </div>
            <div className="defitem">
              <h3>No independent layer exists</h3>
              <p>
                Every current tool either belongs to a model vendor or grades the
                model with the model. The neutral party is an open lane.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* THE WEDGE */}
      <section className="alt sec">
        <div className="wrap">
          <Reveal className="split">
            <div className="split-media">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/imagery/scaffolde-plane-diagram.png"
                alt="Scaffolde as the independent verification layer between AI providers and the regulated enterprise"
                width={900}
                height={640}
              />
            </div>
            <div className="split-body">
              <div className="kicker">The wedge</div>
              <h2 className="h2-tight">One buyer. One trigger. One workflow.</h2>
              <p>
                <b>Beachhead:</b> the regulated enterprise that must prove an AI
                decision to an outside auditor. One buyer (the risk / compliance
                owner), one trigger (an audit or a regulator request), one workflow
                (export an independent attestation).
              </p>
              <p>
                That narrow wedge implies the broad future: once we&rsquo;re the proof
                a regulated buyer trusts, the same attestation layer extends to every
                agent, skill, and workflow across the AI-native business —
                observability and verification, not just compliance.
              </p>
              <Link href="/product" className="link-arrow">
                See the surface it spans <span className="arr">&rarr;</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FOUNDER */}
      <section className="sec">
        <div className="wrap">
          <Reveal className="sec-head">
            <div className="kicker">Why this founder</div>
            <h2>
              Built by someone who has shipped enterprise AI under real constraints.
            </h2>
          </Reveal>
          <Reveal className="founder">
            <div className="founder-avatar" aria-hidden="true">
              GN
            </div>
            <div>
              <h3>Gary Noonan</h3>
              <div className="role">
                Founder · Sr. Principal Enterprise Architect, Comcast Advertising
              </div>
              <p>
                Gary has spent his career architecting large-scale enterprise systems
                where AI decisions have to hold up to scrutiny — the exact buyer and
                the exact constraint Scaffolde is built for. He has lived the gap
                between &ldquo;the AI gave an answer&rdquo; and &ldquo;we can prove the
                answer to an auditor,&rdquo; and built Scaffolde to close it.
              </p>
              <div className="commit">
                <b>Commitment:</b> Gary is transitioning to Scaffolde full-time on
                close of the pre-seed round. This is the company, not a side project.
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* TRACTION */}
      <section className="alt sec">
        <div className="wrap">
          <Reveal className="sec-head">
            <div className="kicker">Traction</div>
            <h2>A working product, not a deck.</h2>
            <p>
              The verification plane is live and inspectable today. The proof
              you&rsquo;d show an investor is the same proof you&rsquo;d show an
              auditor.
            </p>
          </Reveal>
          <Reveal className="traction">
            <div className="tr-card">
              <span className="lab">Live product</span>
              <div className="val">Inspectable today</div>
              <p className="desc">
                A working dashboard with real, independently attested runs — not a
                mockup. Click in from any page.
              </p>
              <span className="tr-status tr-live">
                <span className="dot"></span>Live
              </span>
            </div>
            <div className="tr-card">
              <span className="lab">Design partners</span>
              <div className="val">In conversation</div>
              <p className="desc">
                Engaging regulated enterprise teams on the audit-export workflow as
                design partners.
              </p>
              <span className="tr-status tr-prog">
                <span className="dot"></span>In progress
              </span>
            </div>
            <div className="tr-card">
              <span className="lab">The raise</span>
              <div className="val">Pre-seed</div>
              <p className="desc">
                Raising to convert the wedge into signed design-partner pilots and
                take the founder full-time.
              </p>
              <span className="tr-status tr-prog">
                <span className="dot"></span>Open
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* VENTURE NOT SERVICE */}
      <section className="sec">
        <Reveal className="wrap">
          <div className="pull">
            <q>
              This is a product, not a consultancy. The proof artifact is self-serve
              and inspectable — open it before you ever talk to us.
            </q>
            <div className="attr">Venture-scale, not services</div>
          </div>
        </Reveal>
      </section>

      {/* DATA ROOM CTA */}
      <section className="cta-band">
        <Reveal className="wrap cta-band-inner">
          <div>
            <h2>Request the data room.</h2>
            <p>Get the deck, the model, and a walkthrough of the live verification plane.</p>
          </div>
          <div className="cta-band-actions">
            <a href={CAL_URL} className="btn btn-primary btn-lg">
              Request the data room <span className="arr">&rarr;</span>
            </a>
            <Link href="/dashboard" className="btn btn-ghost btn-lg">
              Inspect the live product
            </Link>
          </div>
        </Reveal>
      </section>

      <SiteFooter />
    </>
  );
}
