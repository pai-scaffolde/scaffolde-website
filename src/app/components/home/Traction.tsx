import Link from "next/link";
import Reveal from "../Reveal";

/**
 * "Traction — a working product, not a deck." Three roadmap/status cards
 * (Live product / Design partners / The raise) with the
 * Inspectable-today / In-progress / Open status treatment.
 *
 * The Live-product and Raise cards are real links so an investor can click
 * straight from the claim into the working product (/dashboard) or the
 * investor room (/investors) — proof, not a deck.
 * Source: bundle "Traction" block.
 */
type Status = "live" | "prog" | "open";

const CARDS: {
  lab: string;
  val: string;
  desc: string;
  status: string;
  statusClass: Status;
  href?: string;
  cta?: string;
}[] = [
  {
    lab: "Live product",
    val: "Inspectable today",
    desc: "A working dashboard of real, independently attested runs — not screenshots. Open it and click through the proof yourself.",
    status: "Live",
    statusClass: "live",
    href: "/dashboard",
    cta: "Inspect the dashboard",
  },
  {
    lab: "Design partners",
    val: "In conversation",
    desc: "In active discussions with regulated enterprise teams on the audit-export workflow as design partners.",
    status: "In progress",
    statusClass: "prog",
  },
  {
    lab: "The raise",
    val: "Pre-seed",
    desc: "Raising to convert the wedge into signed design-partner pilots and take the founder full-time.",
    status: "Open",
    statusClass: "open",
    href: "/investors",
    cta: "See the investor room",
  },
];

const STATUS_CLASS: Record<Status, string> = {
  live: "tr-status tr-live",
  prog: "tr-status tr-prog",
  open: "tr-status tr-open",
};

const CARD_MOD: Record<Status, string> = {
  live: "is-live",
  prog: "is-prog",
  open: "is-open",
};

export default function Traction() {
  return (
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
          {CARDS.map((c) => {
            const inner = (
              <>
                <span className="lab">{c.lab}</span>
                <span className="val">{c.val}</span>
                <span className="desc">{c.desc}</span>
                <span className="tr-foot">
                  <span className={STATUS_CLASS[c.statusClass]}>
                    {c.status}
                  </span>
                  {c.cta && (
                    <span className="tr-go">
                      {c.cta} <span className="arr">&rarr;</span>
                    </span>
                  )}
                </span>
              </>
            );
            const cls = `tr-card ${CARD_MOD[c.statusClass]}`;
            return c.href ? (
              <Link key={c.lab} href={c.href} className={cls}>
                {inner}
              </Link>
            ) : (
              <div key={c.lab} className={cls}>
                {inner}
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
