import Reveal from "../Reveal";

/**
 * "Traction — a working product, not a deck." Three roadmap/status cards
 * (Live product / Design partners / The raise) with the
 * Inspectable-today / In-progress / Open status treatment.
 * Source: bundle "Traction" block.
 */
type Status = "live" | "prog" | "open";

const CARDS: {
  lab: string;
  val: string;
  desc: string;
  status: string;
  statusClass: Status;
}[] = [
  {
    lab: "Live product",
    val: "Inspectable today",
    desc: "A working dashboard with real, independently attested runs — not a mockup. Click in from any page.",
    status: "Live",
    statusClass: "live",
  },
  {
    lab: "Design partners",
    val: "In conversation",
    desc: "Engaging regulated enterprise teams on the audit-export workflow as design partners.",
    status: "In progress",
    statusClass: "prog",
  },
  {
    lab: "The raise",
    val: "Pre-seed",
    desc: "Raising to convert the wedge into signed design-partner pilots and take the founder full-time.",
    status: "Open",
    statusClass: "open",
  },
];

const STATUS_CLASS: Record<Status, string> = {
  live: "tr-status tr-live",
  prog: "tr-status tr-prog",
  open: "tr-status tr-open",
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
          {CARDS.map((c) => (
            <div className="tr-card" key={c.lab}>
              <span className="lab">{c.lab}</span>
              <span className="val">{c.val}</span>
              <span className="desc">{c.desc}</span>
              <br />
              <span className={STATUS_CLASS[c.statusClass]}>{c.status}</span>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
