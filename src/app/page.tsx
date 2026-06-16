import TopBar from "./components/TopBar";
import HeroSection from "./components/HeroSection";
import FivePhaseLoop from "./components/FivePhaseLoop";
import ProofLedger from "./components/ProofLedger";

function Footer() {
  return (
    <footer
      style={{
        padding: "48px 0",
        color: "var(--muted)",
        fontFamily: "var(--mono)",
        fontSize: "0.72rem",
        borderTop: "1px solid var(--line)",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 32px",
        }}
      >
        Scaffolde — The Honest Instrument · 158 skills · 41 agents · 7
        providers · 12 surfaces · Gary Noonan, Sr. Principal Enterprise
        Architect at Comcast Advertising ·{" "}
        <a
          href="https://calendar.app.google/T9vjWKpBvC9w3APV6"
          style={{ color: "var(--accent)", textDecoration: "none" }}
        >
          Book a demo
        </a>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <main>
      <TopBar />
      <HeroSection />
      <FivePhaseLoop />
      <ProofLedger />
      <Footer />
    </main>
  );
}
