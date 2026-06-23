import Link from "next/link";

const CAL_URL = "https://calendar.app.google/T9vjWKpBvC9w3APV6";

export default function SiteFooter() {
  return (
    <footer className="footer">
      <div className="wrap footer-grid">
        <div className="footer-brand">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/brand/scaffolde-logo.svg"
            alt="Scaffolde — AI verification"
            height={42}
          />
          <p>
            The independent AI verification &amp; audit plane. Across Anthropic,
            OpenAI &amp; Google.
          </p>
        </div>
        <div className="footer-cols">
          <div className="footer-col">
            <span className="footer-h">Product</span>
            <Link href="/product">Overview</Link>
            <Link href="/how-it-works">How it works</Link>
            <Link href="/dashboard">Live dashboard</Link>
          </div>
          <div className="footer-col">
            <span className="footer-h">Company</span>
            <Link href="/investors">Investors</Link>
            <a href={CAL_URL}>Book a call</a>
          </div>
          <div className="footer-col">
            <span className="footer-h">Get started</span>
            <Link href="/dashboard">Sign in</Link>
            <Link href="/dashboard">Inspect a live proof</Link>
          </div>
        </div>
      </div>
      <div className="wrap footer-base">
        <span>&copy; 2026 Scaffolde. Founded by Gary Noonan.</span>
        <span className="footer-mono">The grader can&rsquo;t be the graded.</span>
      </div>
    </footer>
  );
}
