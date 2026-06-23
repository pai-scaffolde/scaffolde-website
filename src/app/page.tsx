import SiteNav from "./components/SiteNav";
import SiteFooter from "./components/SiteFooter";
import HeroSection from "./components/home/HeroSection";
import TrustStrip from "./components/home/TrustStrip";
import AudienceFork from "./components/home/AudienceFork";
import HowItWorks from "./components/home/HowItWorks";
import FlowSteps from "./components/home/FlowSteps";
import ProofSection from "./components/home/ProofSection";
import CoverageSection from "./components/home/CoverageSection";
import Scoreboard from "./components/home/Scoreboard";
import MarketWhyNow from "./components/home/MarketWhyNow";
import InvestorThesis from "./components/home/InvestorThesis";
import Traction from "./components/home/Traction";
import PullQuote from "./components/home/PullQuote";
import LiveCtaBand from "./components/home/LiveCtaBand";

const CAL_URL = "https://calendar.app.google/T9vjWKpBvC9w3APV6";

/**
 * Home — the richer verification homepage, reverse-engineered from the
 * "Scaffolde Verification Homepage" bundle and rebuilt as clean
 * Next/React on the existing DESIGN.md v2 design system. Section order
 * mirrors the source bundle. Shared SiteNav/SiteFooter are reused.
 */
export default function Home() {
  return (
    <>
      <SiteNav />
      <HeroSection />
      <TrustStrip />
      <AudienceFork />
      <HowItWorks />
      <FlowSteps />
      <ProofSection />
      <CoverageSection />
      <Scoreboard />
      <MarketWhyNow />
      <InvestorThesis />
      <Traction />
      <PullQuote />
      <LiveCtaBand />
      <SiteFooter />
    </>
  );
}

export { CAL_URL };
