import { Suspense } from "react";
import DashboardApp from "./DashboardApp";

export const metadata = {
  title: "Scaffolde — AI Verification Plane",
  description:
    "The live Scaffolde verification dashboard — every model, agent, skill, workflow, and session, independently verified. Inspect a real attestation proof.",
};

export default function DashboardPage() {
  return (
    <Suspense fallback={<div style={{ minHeight: "100vh", background: "#f6f8fc" }} />}>
      <DashboardApp />
    </Suspense>
  );
}
