import {
  RefreshCw,
  Brain,
  Layers,
  Shield,
  ArrowRight,
  Play,
  Rocket,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";
import { Terminal } from "./components/Terminal";
import { FadeIn } from "./components/FadeIn";

function SectionLabel({ number, label }: { number: string; label: string }) {
  return (
    <div className="flex items-center gap-5 mb-16 md:mb-20">
      <span className="font-[family-name:var(--font-jetbrains)] text-xs tracking-[0.2em] text-[#D9621C] font-medium">
        {number}
      </span>
      <div className="h-px flex-1 bg-[#ccc]" />
      <span className="font-[family-name:var(--font-jetbrains)] text-[11px] tracking-[0.15em] uppercase text-[#888]">
        {label}
      </span>
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F5F5F0] grid-bg">
      {/* ─── Navigation ─── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#F5F5F0]/85 backdrop-blur-xl border-b border-[#d4d4cc]">
        <div className="max-w-6xl mx-auto px-8 md:px-16 lg:px-20 h-[72px] flex items-center justify-between">
          <a
            href="/"
            className="font-[family-name:var(--font-jetbrains)] text-[15px] tracking-wider"
          >
            <span className="text-[#D9621C] font-bold">[</span>
            <span className="text-[#1A1A1A] font-semibold mx-1.5">
              Scaffolde
            </span>
            <span className="text-[#D9621C] font-bold">]</span>
          </a>
          <div className="flex items-center gap-5">
            <a
              href="#demo"
              className="hidden sm:inline-flex items-center gap-2 text-sm text-[#4A5568] hover:text-[#1A1A1A] transition-colors font-medium"
            >
              <Play size={14} />
              Watch Demo
            </a>
            <a
              href="#contact"
              className="text-sm bg-[#1A1A1A] text-[#F5F5F0] px-6 py-2.5 rounded-full hover:bg-[#333] transition-colors font-semibold"
            >
              Book a Consultation
            </a>
          </div>
        </div>
      </nav>

      {/* ─── Hero ─── */}
      <section className="min-h-screen flex items-center pt-[72px]">
        <div className="max-w-6xl mx-auto px-8 md:px-16 lg:px-20 w-full py-16 lg:py-0">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            <div>
              <p className="font-[family-name:var(--font-jetbrains)] text-xs tracking-[0.3em] uppercase text-[#D9621C] mb-8">
                Personal AI Infrastructure
              </p>
              <h1 className="font-[family-name:var(--font-display)] text-5xl sm:text-6xl lg:text-[76px] font-bold tracking-tight text-[#1A1A1A] leading-[0.92] mb-8">
                Your work,
                <br />
                amplified
                <span className="text-[#D9621C]">.</span>
              </h1>
              <p className="text-lg md:text-[19px] text-[#4A5568] leading-[1.7] max-w-[460px] mb-12">
                34 specialized skills. 6 AI models working in concert.
                Architecture that improves itself with every task. Built by a
                security professional who needed more than a chatbot.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#demo"
                  className="inline-flex items-center gap-3 bg-[#D9621C] text-white px-8 py-4 rounded-full font-semibold text-[15px] hover:bg-[#c0561a] transition-colors shadow-lg shadow-[#D9621C]/25"
                >
                  <Play size={17} fill="white" />
                  Watch Demo
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2.5 border-2 border-[#1A1A1A]/20 text-[#1A1A1A] px-8 py-4 rounded-full font-semibold text-[15px] hover:border-[#1A1A1A]/35 hover:bg-white/60 transition-all"
                >
                  Book a Consultation
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <Terminal />
            </div>
          </div>
        </div>
      </section>

      {/* ─── Stats Strip ─── */}
      <section className="border-y border-[#ccc]">
        <div className="max-w-6xl mx-auto px-8 md:px-16 lg:px-20">
          <FadeIn>
            <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-[#ccc]">
              {[
                { value: "34", label: "Specialized Skills" },
                { value: "6", label: "AI Model Providers" },
                { value: "\u221E", label: "Improvement Cycles" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="py-12 sm:py-14 sm:px-10 first:sm:pl-0 last:sm:pr-0 text-center sm:text-left"
                >
                  <div className="font-[family-name:var(--font-display)] text-5xl md:text-6xl font-bold text-[#1A1A1A] mb-2">
                    {stat.value}
                  </div>
                  <div className="font-[family-name:var(--font-jetbrains)] text-[11px] tracking-[0.15em] uppercase text-[#888]">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─── 01 / The Problem ─── */}
      <section className="py-32 md:py-40">
        <div className="max-w-6xl mx-auto px-8 md:px-16 lg:px-20">
          <FadeIn>
            <SectionLabel number="01" label="The Problem" />
          </FadeIn>
          <div className="max-w-[680px] mb-20">
            <FadeIn delay={0.1}>
              <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-[42px] font-bold text-[#1A1A1A] leading-[1.15] mb-6">
                Generic AI tools weren&apos;t built for professionals.
              </h2>
              <p className="text-lg md:text-[19px] text-[#4A5568] leading-[1.7]">
                Every AI tool gives you a general-purpose assistant. That&apos;s
                like giving a surgeon a Swiss Army knife. Useful, but not what
                they need in the operating room.
              </p>
            </FadeIn>
          </div>
          <div className="grid md:grid-cols-3 gap-7">
            {[
              {
                title: "They forget",
                description:
                  "Every session starts from zero. No memory of your projects, your preferences, your domain. You re-explain context every single time.",
              },
              {
                title: "They can\u2019t orchestrate",
                description:
                  "80% of teams attempt multi-agent workflows. Fewer than 10% succeed. One model trying to do everything is a bottleneck, not a solution.",
              },
              {
                title: "They don\u2019t improve",
                description:
                  "Static systems that make the same mistakes repeatedly. No learning from failures, no adaptation to your workflow, no compounding value.",
              },
            ].map((card, i) => (
              <FadeIn key={card.title} delay={0.1 + i * 0.1}>
                <div className="bg-white rounded-2xl border border-[#d4d4cc] p-10 shadow-sm hover:shadow-md hover:border-[#D9621C]/30 transition-all h-full">
                  <div className="font-[family-name:var(--font-jetbrains)] text-xs tracking-[0.15em] text-[#D9621C] mb-5">
                    0{i + 1}
                  </div>
                  <h3 className="font-[family-name:var(--font-display)] text-[22px] font-bold text-[#1A1A1A] mb-4">
                    {card.title}
                  </h3>
                  <p className="text-[#4A5568] leading-[1.7] text-[15px]">
                    {card.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 02 / The Solution ─── */}
      <section className="py-32 md:py-40 bg-white border-y border-[#d4d4cc]">
        <div className="max-w-6xl mx-auto px-8 md:px-16 lg:px-20">
          <FadeIn>
            <SectionLabel number="02" label="The Solution" />
          </FadeIn>
          <div className="max-w-[680px] mb-20">
            <FadeIn delay={0.1}>
              <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-[42px] font-bold text-[#1A1A1A] leading-[1.15] mb-6">
                AI infrastructure that works the way you do.
              </h2>
              <p className="text-lg md:text-[19px] text-[#4A5568] leading-[1.7]">
                Not a chatbot. Not a framework. A complete infrastructure stack
                that remembers, orchestrates, verifies, and improves &mdash;
                autonomously.
              </p>
            </FadeIn>
          </div>
          <div className="grid md:grid-cols-2 gap-7">
            {[
              {
                icon: RefreshCw,
                title: "Self-Improvement Loop",
                description:
                  "Every failure becomes a constraint that prevents future failures. The system rewrites its own rules. Performance compounds over time.",
                accent: "#D9621C",
              },
              {
                icon: Brain,
                title: "Persistent Memory",
                description:
                  "Attention-aware architecture that remembers across sessions. Real operational context, project state, learned patterns, and domain knowledge.",
                accent: "#C7A05F",
              },
              {
                icon: Layers,
                title: "Multi-Agent Orchestration",
                description:
                  "Dispatch 5+ specialized AI models simultaneously. File-based coordination eliminates race conditions. Zero conflicts at any scale.",
                accent: "#4A5568",
              },
              {
                icon: Shield,
                title: "Security-First Architecture",
                description:
                  "Built by a security professional. Pen testing, OSINT, threat modeling built in. Mechanical enforcement at point-of-action.",
                accent: "#2C5F3D",
              },
            ].map((feature, i) => (
              <FadeIn key={feature.title} delay={0.1 + i * 0.08}>
                <div className="bg-[#F5F5F0] rounded-2xl border border-[#d4d4cc] p-10 md:p-12 shadow-sm hover:shadow-md hover:border-[#D9621C]/30 transition-all h-full">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-7"
                    style={{ background: `${feature.accent}15` }}
                  >
                    <feature.icon
                      size={22}
                      style={{ color: feature.accent }}
                      strokeWidth={1.8}
                    />
                  </div>
                  <h3 className="font-[family-name:var(--font-display)] text-[22px] font-bold text-[#1A1A1A] mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-[#4A5568] leading-[1.7] text-[15px]">
                    {feature.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 03 / How It Works ─── */}
      <section className="py-32 md:py-40">
        <div className="max-w-6xl mx-auto px-8 md:px-16 lg:px-20">
          <FadeIn>
            <SectionLabel number="03" label="Architecture" />
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-[42px] font-bold text-[#1A1A1A] leading-[1.15] mb-6 max-w-[680px]">
              Define. Dispatch. Coordinate. Verify. Learn.
            </h2>
            <p className="text-lg md:text-[19px] text-[#4A5568] leading-[1.7] max-w-[560px] mb-20">
              Every task follows the same rigorous pipeline. Success criteria
              are defined before work begins. Results are verified before
              delivery. Lessons are captured automatically.
            </p>
          </FadeIn>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              {
                step: "01",
                title: "Define",
                subtitle: "ISC Methodology",
                description:
                  "Convert requirements into binary, testable success criteria before writing a single line.",
              },
              {
                step: "02",
                title: "Dispatch",
                subtitle: "Ralph Loop",
                description:
                  "Route to the right agent with the right model. Autonomous work, results to disk.",
              },
              {
                step: "03",
                title: "Coordinate",
                subtitle: "Multi-Agent",
                description:
                  "Multiple agents work in parallel. File-based isolation prevents conflicts.",
              },
              {
                step: "04",
                title: "Verify",
                subtitle: "Proof Gate",
                description:
                  "Every output tested against success criteria. No claiming done without evidence.",
              },
              {
                step: "05",
                title: "Learn",
                subtitle: "Self-Improve",
                description:
                  "Failures captured as constraints. Memory updated. Tomorrow is better than today.",
              },
            ].map((step, i) => (
              <FadeIn key={step.step} delay={0.1 + i * 0.08}>
                <div className="text-center bg-white rounded-2xl border border-[#d4d4cc] p-6 md:p-8 shadow-sm h-full">
                  <div className="font-[family-name:var(--font-jetbrains)] text-[11px] tracking-[0.2em] text-[#D9621C] mb-4">
                    {step.step}
                  </div>
                  <h3 className="font-[family-name:var(--font-display)] text-lg font-bold text-[#1A1A1A] mb-1.5">
                    {step.title}
                  </h3>
                  <div className="font-[family-name:var(--font-jetbrains)] text-[10px] tracking-wider uppercase text-[#999] mb-4">
                    {step.subtitle}
                  </div>
                  <p className="text-[13px] text-[#4A5568] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 04 / Built For ─── */}
      <section className="py-32 md:py-40 bg-white border-y border-[#d4d4cc]">
        <div className="max-w-6xl mx-auto px-8 md:px-16 lg:px-20">
          <FadeIn>
            <SectionLabel number="04" label="Built For" />
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-[42px] font-bold text-[#1A1A1A] leading-[1.15] mb-20 max-w-[680px]">
              Infrastructure for people who build.
            </h2>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-7">
            {[
              {
                icon: Rocket,
                title: "Technical Founders & CTOs",
                description:
                  "Ship AI-powered products faster. Multi-agent orchestration solves the coordination problem that stops 90% of AI projects from reaching production.",
                example:
                  "\u201CReduced our AI pipeline development from 3 months to 2 weeks.\u201D",
              },
              {
                icon: ShieldCheck,
                title: "Security Professionals",
                description:
                  "AI-augmented security assessment. Pen testing, OSINT, threat modeling &mdash; delivered 3x faster with built-in verification and audit trails.",
                example:
                  "\u201CFull vulnerability assessment with 5 concurrent analysis agents.\u201D",
              },
              {
                icon: TrendingUp,
                title: "Solo Consultants",
                description:
                  "Multiply your output without multiplying your hours. Replace fragmented AI tools with integrated infrastructure that learns your workflow.",
                example:
                  "\u201COne system replaced 6 SaaS subscriptions and actually remembers my clients.\u201D",
              },
            ].map((persona, i) => (
              <FadeIn key={persona.title} delay={0.1 + i * 0.1}>
                <div className="bg-[#F5F5F0] rounded-2xl border border-[#d4d4cc] p-10 shadow-sm hover:shadow-md hover:border-[#D9621C]/30 transition-all h-full flex flex-col">
                  <div className="w-12 h-12 rounded-xl bg-[#D9621C]/8 flex items-center justify-center mb-7">
                    <persona.icon
                      size={22}
                      className="text-[#D9621C]"
                      strokeWidth={1.8}
                    />
                  </div>
                  <h3 className="font-[family-name:var(--font-display)] text-[22px] font-bold text-[#1A1A1A] mb-4">
                    {persona.title}
                  </h3>
                  <p className="text-[#4A5568] leading-[1.7] text-[15px] flex-1 mb-7">
                    {persona.description}
                  </p>
                  <p className="font-[family-name:var(--font-jetbrains)] text-xs text-[#888] leading-relaxed border-t border-[#d4d4cc] pt-6">
                    {persona.example}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 05 / CTA ─── */}
      <section id="contact" className="py-32 md:py-44 bg-[#1A1A1A]">
        <div className="max-w-6xl mx-auto px-8 md:px-16 lg:px-20 text-center">
          <FadeIn>
            <p className="font-[family-name:var(--font-jetbrains)] text-xs tracking-[0.3em] uppercase text-[#D9621C] mb-8">
              05 / Get Started
            </p>
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-5xl lg:text-[52px] font-bold text-[#F5F5F0] leading-[1.1] mb-6 max-w-2xl mx-auto">
              Ready to build your AI infrastructure?
            </h2>
            <p className="text-lg md:text-[19px] text-[#F5F5F0]/40 leading-[1.7] max-w-xl mx-auto mb-12">
              See how multi-agent orchestration, self-improvement, and
              persistent memory work together. Watch the demo or book a
              consultation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#demo"
                id="demo"
                className="inline-flex items-center gap-3 bg-[#D9621C] text-white px-9 py-[18px] rounded-full font-semibold text-[15px] hover:bg-[#c0561a] transition-colors shadow-lg shadow-[#D9621C]/25"
              >
                <Play size={17} fill="white" />
                Watch Demo
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2.5 border-2 border-[#F5F5F0]/15 text-[#F5F5F0] px-9 py-[18px] rounded-full font-semibold text-[15px] hover:border-[#F5F5F0]/30 hover:bg-white/5 transition-all"
              >
                Book a Consultation
                <ArrowRight size={16} />
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─── Footer ─── */}
      <footer className="py-14 border-t border-[#d4d4cc]">
        <div className="max-w-6xl mx-auto px-8 md:px-16 lg:px-20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <a
            href="/"
            className="font-[family-name:var(--font-jetbrains)] text-[15px] tracking-wider"
          >
            <span className="text-[#D9621C] font-bold">[</span>
            <span className="text-[#1A1A1A] font-semibold mx-1.5">
              Scaffolde
            </span>
            <span className="text-[#D9621C] font-bold">]</span>
          </a>
          <p className="font-[family-name:var(--font-jetbrains)] text-xs text-[#999] tracking-wider">
            &copy; 2026 Scaffolde. Personal AI Infrastructure.
          </p>
        </div>
      </footer>
    </div>
  );
}
