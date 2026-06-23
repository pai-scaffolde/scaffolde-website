import { Suspense } from "react";
import DashboardApp from "./DashboardApp";

export const metadata = {
  title: "Scaffolde: AI Verification Plane (Live Demo)",
  description:
    "The Scaffolde verification dashboard: a live, explorable demo. Inspect real attestation proofs across models, agents, skills, workflows, and sessions.",
};

export default function DashboardPage() {
  return (
    <Suspense fallback={<div style={{ minHeight: "100vh", background: "#f6f8fc" }} />}>
      <DashboardApp />
    </Suspense>
  );
}
