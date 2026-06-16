import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Scaffolde v1 — Build your AI infrastructure",
  description:
    "Brutally minimal Scaffolde v1 landing page: infrastructure over chatbots, with self-improving architecture.",
};

const proofPoints = [
  { value: "34", label: "Skills" },
  { value: "6", label: "Model Providers" },
  { value: "143", label: "Workflows" },
];

const features = [
  {
    title: "Persistent memory",
    body: "Retains project context, constraints, and prior decisions across sessions.",
  },
  {
    title: "Multi-agent orchestration",
    body: "Routes work to specialized agents in parallel with deterministic coordination.",
  },
  {
    title: "Self-improving loops",
    body: "Captures failures as constraints so the same mistake is less likely to repeat.",
  },
];

const personas = [
  {
    title: "Security Professionals",
    body: "Operationally strict AI workflows for threat analysis, audit, and verification-heavy tasks.",
  },
  {
    title: "Technical Founders",
    body: "Ship infrastructure-backed automation without stitching together fragile tooling.",
  },
  {
    title: "Solo Consultants",
    body: "Deliver more output with repeatable systems that keep client context intact.",
  },
  {
    title: "Developers",
    body: "Use AI as an execution layer that remembers architecture and enforces quality bars.",
  },
];

export default function V1LandingPage() {
  return (
    <main className="min-h-screen bg-[#F5F5F0] text-[#1A1A1A]">
      <div className="mx-auto max-w-5xl px-6 py-16 sm:px-10 sm:py-24">
        <header className="mb-20 border-b border-[#ddd9d0] pb-14">
          <p className="mb-10 font-[family-name:var(--font-jetbrains)] text-sm tracking-[0.2em] uppercase text-[#7d7d74]">
            <span className="text-[#D9621C]">[</span> Scaffolde
            <span className="text-[#D9621C]"> ]</span>
          </p>
          <h1 className="max-w-3xl font-[family-name:var(--font-display)] text-4xl font-semibold leading-tight sm:text-6xl">
            Build your AI infrastructure.
            <br />
            Not another chatbot.
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-[#505050]">
            Infrastructure for professionals who need reliability, memory,
            orchestration, and compounding improvements. Built by an enterprise
            architect for real operational constraints.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md bg-[#D9621C] px-6 py-3 font-medium text-white transition-colors hover:bg-[#c95717]"
            >
              Start Building
              <ArrowRight size={16} />
            </a>
            <a
              href="#system"
              className="inline-flex items-center rounded-md border border-[#1A1A1A] px-6 py-3 font-medium transition-colors hover:bg-[#ecebe6]"
            >
              View System
            </a>
          </div>
        </header>

        <section className="mb-20 grid gap-8 border-b border-[#ddd9d0] pb-14 sm:grid-cols-3">
          {proofPoints.map((item) => (
            <div key={item.label}>
              <p className="font-[family-name:var(--font-display)] text-5xl font-semibold text-[#D9621C]">
                {item.value}
              </p>
              <p className="mt-2 font-[family-name:var(--font-jetbrains)] text-xs uppercase tracking-[0.18em] text-[#66665f]">
                {item.label}
              </p>
            </div>
          ))}
        </section>

        <section id="system" className="mb-20 border-b border-[#ddd9d0] pb-14">
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-semibold sm:text-4xl">
            The AI that improves itself
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {features.map((feature) => (
              <article
                key={feature.title}
                className="rounded-lg border border-[#d8d5cc] bg-white p-6"
              >
                <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold">
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#55554f]">
                  {feature.body}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="mb-20 border-b border-[#ddd9d0] pb-14">
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-semibold sm:text-4xl">
            Why this exists
          </h2>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[#505050]">
            Most AI products optimize for a single chat session. Professionals
            need durable systems that keep context, verify outputs, and improve
            over time. Scaffolde is built for that requirement.
          </p>
        </section>

        <section className="mb-20 border-b border-[#ddd9d0] pb-14">
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-semibold sm:text-4xl">
            Built for
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {personas.map((persona) => (
              <article
                key={persona.title}
                className="rounded-lg border border-[#d8d5cc] bg-white p-6"
              >
                <h3 className="font-[family-name:var(--font-display)] text-2xl font-semibold">
                  {persona.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#55554f]">
                  {persona.body}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="rounded-lg border border-[#d8d5cc] bg-white p-8 sm:p-10">
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-semibold sm:text-4xl">
            Start with your highest-friction workflow
          </h2>
          <p className="mt-4 max-w-2xl text-[#55554f]">
            Bring one recurring workflow and we will map it into a reliable
            AI-driven system.
          </p>
          <a
            href="mailto:hello@scaffolde.ai"
            className="mt-8 inline-flex rounded-md bg-[#1A1A1A] px-6 py-3 font-medium text-[#F5F5F0] transition-colors hover:bg-black"
          >
            hello@scaffolde.ai
          </a>
        </section>
      </div>
    </main>
  );
}
