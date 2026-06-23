import Reveal from "../Reveal";

/**
 * Pull quote — the Scaffolde principle. Source: bundle pull-quote block.
 */
export default function PullQuote() {
  return (
    <section className="sec">
      <div className="wrap">
        <Reveal className="pull">
          <q>
            You can&rsquo;t trust an AI&rsquo;s word that it did the work. You
            can trust an independent, tamper-evident record of how it did the
            work.
          </q>
          <div className="attr">The Scaffolde principle</div>
        </Reveal>
      </div>
    </section>
  );
}
