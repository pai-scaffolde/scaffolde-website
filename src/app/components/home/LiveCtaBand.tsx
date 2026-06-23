import Link from "next/link";
import Reveal from "../Reveal";

/**
 * "See it live" CTA band. Both CTAs route to the live dashboard — this is
 * a self-serve product, not a request-a-demo form. Source: bundle CTA
 * band block.
 */
export default function LiveCtaBand() {
  return (
    <section className="cta-band">
      <Reveal className="wrap cta-band-inner">
        <div>
          <h2>See it live.</h2>
          <p>
            This isn&rsquo;t a request-a-demo form. Open the real dashboard and
            inspect a live verification proof yourself.
          </p>
        </div>
        <div className="cta-band-actions">
          <Link href="/dashboard" className="btn btn-primary btn-lg">
            Inspect a live proof <span className="arr">&rarr;</span>
          </Link>
          <Link href="/dashboard" className="btn btn-ghost btn-lg">
            Get started
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
