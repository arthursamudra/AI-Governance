"use client";

import { useState } from "react";
import Image from "next/image";
import VideoPlaceholder from "../components/video-placeholder";

const productTabs = [
  {
    id: "sasf",
    label: "SASF",
    title: "Secure AI Sandbox Framework (SASF)",
    summary:
      "The secure execution fabric where every agent, prompt, and model interaction is routed, governed, and fully audited.",
    href: "/sasf",
  },
  {
    id: "ai-iam",
    label: "AI-IAM",
    title: "AI Identity & Authorization Manager (AI-IAM)",
    summary:
      "Extends IAM to AI agents with identities, capability tokens, and runtime policy decisions for every tool call.",
    href: "/ai-iam",
  },
  {
    id: "eppe",
    label: "EPPE",
    title: "Enterprise Prompt Policy Engine (EPPE)",
    summary:
      "Turns prompts into governed enterprise assets with lifecycle, testing, approvals, and runtime delivery APIs.",
    href: "/eppe",
  },
  {
    id: "git",
    label: "GiT",
    title: "Governance-in-Training (GiT)",
    summary:
      "Wraps fine-tuning pipelines with live oversight, memorisation checks, and governance reports regulators can trust.",
    href: "/git",
  },
  {
    id: "bas",
    label: "Banking Agent Studio",
    title: "SASF-Powered Banking Agent Studio",
    summary:
      "Templates and tooling to design, test, and deploy banking-native agents – KYC, underwriting, AML, and fraud.",
    href: "/banking-agent-studio",
  },
  {
    id: "ute",
    label: "UTE",
    title: "Universal Tool Executor (UTE)",
    summary:
      "One governed entrypoint for every tool, API, and watsonx agent so orchestration stays simple and secure.",
    href: "/ute",
  },
] as const;

// ---------------------------------------------
// Autonomy / balance section (flat, Viya-ish)
// ---------------------------------------------
function AutonomyBalanceSection() {
  const [activeTab, setActiveTab] = useState<"decisioning" | "balance" | "governance">(
    "decisioning"
  );

  const copy = {
    decisioning: {
      eyebrow: "Decisioning",
      title: "Decision intelligence with governed autonomy",
      body: "Use LLMs and agents to make smarter decisions – without losing auditability or control.",
      bullets: [
        "Route every decision through SASF with clear guardrails and fail-safes.",
        "Combine rules, scores, and LLM judgement into a single governed flow.",
        "Expose decisions with full rationale for model risk and business owners.",
      ],
    },
    balance: {
      eyebrow: "Human / AI balance",
      title: "Risk-based autonomy levels",
      body: "Dial up or down AI autonomy based on product, risk tier and user segment.",
      bullets: [
        "Define autonomy tiers – suggest, co-pilot, auto-approve – per journey.",
        "Use AI-IAM to enforce who can act, approve, or only recommend.",
        "Surface “human in the loop” checkpoints for high-risk decisions.",
      ],
    },
    governance: {
      eyebrow: "Governance",
      title: "Prompt + tool + identity governance",
      body: "Treat prompts, tools and identities as first-class governed assets.",
      bullets: [
        "EPPE manages prompt versions, approvals, and rollout safety.",
        "UTE exposes tools behind a single governed execution gateway.",
        "AI-IAM ties every action back to a signed-in human or service identity.",
      ],
    },
  } as const;

  const active = copy[activeTab];

  return (
    <section className="mx-auto max-w-6xl px-6 lg:px-0 py-24">
      <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-sky-700 mb-2">
        Decisioning · Human–AI balance · Governance
      </p>
      <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-2">
        How Infinite balances autonomy and control
      </h2>
      <p className="text-sm md:text-base text-slate-700 max-w-2xl mb-10">
        Three lenses that keep agentic AI powerful for the business and safe for the bank.
      </p>

      <div className="mb-10 flex flex-wrap gap-3">
        {[
          { id: "decisioning", label: "Decisioning" },
          { id: "balance", label: "Human / AI balance" },
          { id: "governance", label: "Governance" },
        ].map((t) => (
          <button
            key={t.id}
            type="button"
            onClick={() => setActiveTab(t.id as typeof activeTab)}
            className={`rounded-full px-5 py-2 text-sm font-semibold border transition ${
              activeTab === t.id
                ? "bg-slate-900 text-white border-slate-900"
                : "bg-slate-100 text-slate-600 border-slate-100 hover:bg-slate-200"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className="grid gap-12 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1.4fr)] items-center">
        {/* Circular illustration */}
        <div className="flex justify-center">
          <div className="relative h-72 w-72 md:h-80 md:w-80">
            {/* outer ring */}
            <div className="absolute inset-0 rounded-full border border-slate-200" />

            {/* inner visual per tab – no card, just pure SVG-like shapes */}
            {activeTab === "decisioning" && (
              <div className="absolute inset-[10%] rounded-full bg-gradient-to-tr from-slate-900 via-sky-800 to-sky-400" />
            )}
            {activeTab === "balance" && (
              <div className="absolute inset-[10%] rounded-full overflow-hidden bg-slate-900">
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-sky-500 to-sky-300 [clip-path:polygon(0_50%,100%_50%,100%_100%,0_100%)]" />
              </div>
            )}
            {activeTab === "governance" && (
              <div className="absolute inset-[10%] rounded-full bg-slate-900">
                <div className="absolute inset-[18%] rounded-[40%] border-2 border-sky-400" />
              </div>
            )}

            {/* centre disc */}
            <div className="absolute inset-[28%] rounded-full bg-white flex flex-col items-center justify-center text-[10px] tracking-[0.18em] uppercase text-slate-700">
              <span>Enterprise</span>
              <span className="mt-1 text-[9px] font-semibold tracking-[0.22em] text-sky-700">
                Agentic AI
              </span>
              <span className="mt-2 tracking-[0.18em] text-slate-400">with Infinite</span>
            </div>

            {/* labels around ring */}
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-[10px] tracking-[0.22em] uppercase text-slate-400">
              Human / AI balance
            </div>
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] tracking-[0.22em] uppercase text-slate-400">
              Decisioning
            </div>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 text-[10px] tracking-[0.22em] uppercase text-slate-400">
              Governance
            </div>
          </div>
        </div>

        {/* Text side */}
        <div>
          <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-sky-700 mb-2">
            {active.eyebrow}
          </p>
          <h3 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-3">
            {active.title}
          </h3>
          <p className="text-sm md:text-base text-slate-700 mb-4">{active.body}</p>
          <ul className="space-y-2 text-sm text-slate-700">
            {active.bullets.map((b) => (
              <li key={b} className="flex gap-2">
                <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-sky-500" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------
// Main page
// ---------------------------------------------
export default function HomePage() {
  const [activeId, setActiveId] =
    useState<(typeof productTabs)[number]["id"]>("sasf");
  const active = productTabs.find((t) => t.id === activeId) ?? productTabs[0];

  return (
    <div className="bg-slate-50 pb-24">
      {/* HERO – full-width band */}
      <section className="relative left-1/2 right-1/2 w-screen -translate-x-1/2 overflow-hidden bg-slate-900">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-people.png"
            alt="Banking professionals collaborating with AI"
            fill
            priority
            className="h-full w-full object-cover object-[50%_30%]"
          />
        </div>

        {/* soft white gradient overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,1)_0%,rgba(255,255,255,1)_45%,rgba(255,255,255,0.35)_65%,rgba(255,255,255,0)_100%)]" />

        <div className="relative z-10 mx-auto flex max-w-6xl items-center px-6 lg:px-0 py-20">
          <div className="max-w-2xl space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sky-700">
              Infinite AI Governance Suite
            </p>

            <h1 className="text-4xl md:text-5xl font-semibold leading-tight text-slate-900">
              Strengthen the integrity of your{" "}
              <span className="text-sky-700">agentic AI decisions</span>.
            </h1>

            <p className="text-base md:text-lg text-slate-800 leading-relaxed">
              A unified governance layer that brings together SASF, AI-IAM,
              EPPE, Governance-in-Training, Banking Agent Studio, and UTE so
              banks can deploy agentic AI with confidence, auditability, and
              control.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="#suite-overview"
                className="inline-flex items-center justify-center rounded-full bg-sky-700 px-7 py-3 text-sm font-semibold text-white hover:bg-sky-800 transition"
              >
                Explore the governance suite
              </a>
              <a
                href="#contact-strip"
                className="inline-flex items-center justify-center rounded-full border border-sky-700/70 bg-white px-7 py-3 text-sm font-semibold text-sky-800 hover:bg-sky-50 transition"
              >
                Talk to an AI governance expert
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* METRICS – flat, 3 columns */}
      <section className="mx-auto max-w-6xl px-6 lg:px-0 py-16 border-b border-slate-200">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">
              Governance coverage
            </p>
            <p className="mt-3 text-xl font-semibold text-slate-900">
              End-to-end AI control
            </p>
            <p className="mt-3 text-sm md:text-base text-slate-700 leading-relaxed">
              From prompts and tools to agents and training data, everything is
              governed under a single suite.
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">
              Designed for banking
            </p>
            <p className="mt-3 text-xl font-semibold text-slate-900">
              RBI &amp; PCI-aligned patterns
            </p>
            <p className="mt-3 text-sm md:text-base text-slate-700 leading-relaxed">
              Built with digital banking, payments, lending, and fraud
              operations in mind.
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">
              Deployment
            </p>
            <p className="mt-3 text-xl font-semibold text-slate-900">
              SaaS + hybrid ready
            </p>
            <p className="mt-3 text-sm md:text-base text-slate-700 leading-relaxed">
              Control plane in the cloud, enforcement nodes inside the bank&apos;s
              VPC for data residency.
            </p>
          </div>
        </div>
      </section>

      {/* PRODUCT TABS + VIDEO – STRIP UPDATED HERE */}
      <section
        id="suite-overview"
        className="mx-auto max-w-6xl px-6 lg:px-0 py-20"
      >
        <div className="flex flex-wrap justify-center gap-4 text-sm font-semibold mb-10">
          {productTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveId(tab.id)}
              className={`group flex items-center gap-2 rounded-full px-5 py-2.5 transition border ${
                activeId === tab.id
                  ? "bg-slate-900 text-white border-slate-900"
                  : "bg-slate-100 border-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
              type="button"
            >
              <span
                className={`inline-flex h-6 w-6 items-center justify-center rounded-full text-[10px] font-bold
                  border transition
                  ${
                    activeId === tab.id
                      ? "bg-slate-900 border-slate-700 text-white"
                      : "bg-white border-slate-300 text-slate-700 group-hover:border-slate-400"
                  }
                `}
              >
                {tab.label === "Banking Agent Studio"
                  ? "B"
                  : tab.label.replace(/-.*/, "").charAt(0)}
              </span>
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        <div className="grid items-start gap-12 md:grid-cols-2">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-sky-700 mb-2">
              Suite overview
            </p>
            <h2 className="mb-3 text-2xl font-semibold text-slate-900">
              {active.title}
            </h2>
            <p className="mb-4 text-sm md:text-base text-slate-700 max-w-md leading-relaxed">
              {active.summary}
            </p>
            <ul className="mb-6 list-disc space-y-2 pl-5 text-sm text-slate-700">
              <li>High-level narrative aligned to your banking stack.</li>
              <li>Deep dives, diagrams, and flows on each product page.</li>
              <li>Use the video panel to host a demo or explainer.</li>
            </ul>
            <a
              href={active.href}
              className="inline-block text-sm font-semibold text-sky-700 hover:underline"
            >
              Explore {active.label} in detail →
            </a>
          </div>
          <VideoPlaceholder title={active.title} />
        </div>
      </section>

      {/* Autonomy / balance */}
      <AutonomyBalanceSection />

      {/* How the Infinite suite hangs together – flat */}
      <section className="mx-auto max-w-6xl px-6 lg:px-0 py-20 border-t border-slate-200">
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-sky-700 mb-2">
          Architecture &amp; flows
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-2">
          How the Infinite suite hangs together
        </h2>
        <p className="text-sm md:text-base text-slate-700 max-w-3xl mb-10">
          A layered control plane that sits between your channels and models –
          similar in spirit to Viya, but tuned for agentic AI.
        </p>

        <div className="grid gap-10 md:grid-cols-[3fr,2fr] md:items-start">
          <div className="space-y-10 text-sm md:text-base text-slate-800">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-sky-700 mb-1">
                Layer 1 · Channels &amp; journeys
              </p>
              <p>
                Where customers and bankers interact with AI – all calling a
                single governed API surface.
              </p>
              <div className="mt-3 flex flex-wrap gap-2 text-xs">
                {["Online banking", "Mobile app", "Contact centre", "RM tools"].map(
                  (chip) => (
                    <span
                      key={chip}
                      className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-slate-700"
                    >
                      {chip}
                    </span>
                  )
                )}
              </div>
            </div>

            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-sky-700 mb-1">
                Layer 2 · Infinite governance control plane
              </p>
              <p>
                The opinionated layer that routes, authorises, and records every
                prompt, tool call, and training job.
              </p>
              <div className="mt-3 flex flex-wrap gap-2 text-xs">
                {[
                  "SASF · Execution fabric",
                  "AI-IAM · Identities & capabilities",
                  "EPPE · Prompt policies",
                  "GiT · Training governance",
                  "Banking Agent Studio",
                  "UTE · Tool gateway",
                ].map((chip) => (
                  <span
                    key={chip}
                    className="rounded-full border border-sky-100 bg-sky-50 px-3 py-1 text-sky-900"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-sky-700 mb-1">
                Layer 3 · Models, tools &amp; data
              </p>
              <p>
                Any mix of LLMs, domain models, and banking data stores –
                swapped in and out without changing governance.
              </p>
              <div className="mt-3 flex flex-wrap gap-2 text-xs">
                {[
                  "Cloud LLMs (GPT, Claude, Gemini)",
                  "On-prem LLaMA / Granite",
                  "Fraud / risk models",
                  "Core & data warehouse",
                  "Third-party APIs & tools",
                ].map((chip) => (
                  <span
                    key={chip}
                    className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-slate-700"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </div>

            <p className="text-[11px] text-slate-500">
              Channels on top, Infinite as the governance spine in the middle,
              and models/tools beneath – so you can evolve each layer
              independently.
            </p>
          </div>

          <div className="relative h-64 md:h-72">
            <Image
              src="/images/architecture-suite.png"
              alt="Infinite AI Governance Suite architecture"
              fill
              className="border border-slate-200 bg-slate-50 object-contain p-4"
            />
          </div>
        </div>
      </section>

      {/* Why choose Infinite – flat four-column like SAS */}
      <section className="mx-auto max-w-6xl px-6 lg:px-0 py-20 border-t border-slate-200">
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-sky-700 mb-2">
          Why Infinite
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-2">
          Why choose Infinite for AI governance solutions?
        </h2>
        <p className="text-sm md:text-base text-slate-700 max-w-3xl mb-10">
          Empowering responsible agentic AI in banking with a governance-first
          control layer.
        </p>

        <p className="text-sm md:text-base text-slate-700 max-w-3xl mb-12">
          The Infinite AI Governance Suite is built specifically for regulated
          enterprises that want agentic AI – but cannot compromise on audit,
          identity, or control. Each capability brings a distinct piece of the
          governance puzzle.
        </p>

        <div className="mt-6 flex flex-col gap-10 md:flex-row md:items-start md:divide-x md:divide-slate-200">
          <div className="flex-1 text-center md:px-8">
            <Image
              src="/images/icon-trust.png"
              alt=""
              width={48}
              height={48}
              className="mx-auto mb-4"
            />
            <h3 className="mb-2 text-sm md:text-base font-semibold text-slate-900">
              Strengthen trust in AI decisions
            </h3>
            <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
              SASF and EPPE ensure every decision is traceable – from prompts
              and tools to the final answer – with an auditable trail regulators
              can follow.
            </p>
          </div>

          <div className="flex-1 text-center md:px-8">
            <Image
              src="/images/icon-regulations.png"
              alt=""
              width={48}
              height={48}
              className="mx-auto mb-4"
            />
            <h3 className="mb-2 text-sm md:text-base font-semibold text-slate-900">
              Confidently navigate changing AI regulations
            </h3>
            <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
              AI-IAM and GiT encode risk policies as runtime controls and
              training-time checks, helping answer “Are we using AI OK?” with
              evidence.
            </p>
          </div>

          <div className="flex-1 text-center md:px-8">
            <Image
              src="/images/icon-operations.png"
              alt=""
              width={48}
              height={48}
              className="mx-auto mb-4"
            />
            <h3 className="mb-2 text-sm md:text-base font-semibold text-slate-900">
              Simplify your operations
            </h3>
            <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
              UTE and Banking Agent Studio standardise how channels call tools,
              agents, and models – reducing one-off glue code and operational
              risk.
            </p>
          </div>

          <div className="flex-1 text-center md:px-8">
            <Image
              src="/images/icon-future.png"
              alt=""
              width={48}
              height={48}
              className="mx-auto mb-4"
            />
            <h3 className="mb-2 text-sm md:text-base font-semibold text-slate-900">
              Future-proof your AI systems
            </h3>
            <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
              Because governance is model-agnostic, you can swap LLMs, channels,
              or tools over time while keeping policies, identity, and audit
              consistent.
            </p>
          </div>
        </div>
      </section>

      {/* Advisory group – flat, two-column */}
      <section className="mx-auto max-w-6xl px-6 lg:px-0 py-20 border-t border-slate-200">
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-sky-700 mb-2">
          Advisory
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-2">
          What is the Infinite AI Governance Advisory Group?
        </h2>
        <p className="text-sm md:text-base text-slate-700 max-w-3xl mb-10">
          A specialist advisory layer that helps banks turn our suite into a
          practical, phased governance roadmap.
        </p>

        <div className="grid gap-12 md:grid-cols-2 md:items-start">
          <div className="space-y-4 text-sm md:text-base text-slate-700 leading-relaxed">
            <p>
              The Infinite AI Governance Advisory Group works alongside your
              risk, technology, and business teams to design how SASF, AI-IAM,
              EPPE, GiT, Banking Agent Studio and UTE land in your environment.
            </p>
            <p className="font-semibold text-slate-900">Our advisors can help you:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Identify gaps in your current AI and model risk posture.</li>
              <li>
                Prioritise high-value use cases (fraud, collections, customer
                service) that benefit from governance first.
              </li>
              <li>
                Shape policies for prompts, tools, and training that reflect RBI
                / PCI and internal standards.
              </li>
              <li>
                Define a pragmatic rollout plan – from one pilot journey to a
                bank-wide AI governance fabric.
              </li>
            </ul>

            <button className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-sky-700 hover:underline">
              Contact us <span aria-hidden>→</span>
            </button>
          </div>

          <div className="space-y-6 text-sm md:text-base text-slate-700 leading-relaxed">
            <h3 className="text-base md:text-lg font-semibold text-slate-900">
              Where are you in your AI governance journey?
            </h3>
            <p>
              We use a simple maturity map to locate your organisation across
              four dimensions – Oversight, Compliance, Operations, and Culture –
              and recommend next steps.
            </p>

            <div className="flex flex-wrap gap-3 text-xs">
              {["Oversight", "Compliance", "Operations", "Culture"].map((step) => (
                <span
                  key={step}
                  className="inline-flex items-center rounded-full bg-slate-100 px-4 py-1.5 font-semibold text-slate-700"
                >
                  {step}
                </span>
              ))}
            </div>

            <div className="mt-4 border-l-2 border-sky-500 pl-4 text-xs md:text-sm text-slate-600">
              <p className="font-semibold text-slate-800 mb-1">
                Example: a “responsive” bank
              </p>
              <p>
                Has model risk policies on paper and some manual reviews, but
                LLM prompts, tools, and training datasets are not yet covered.
                The advisory group helps close this gap using the Infinite
                suite.
              </p>
            </div>

            <button className="mt-4 inline-flex items-center gap-2 text-xs md:text-sm font-semibold text-sky-700 hover:underline">
              Take a quick self-assessment <span aria-hidden>→</span>
            </button>
          </div>
        </div>
      </section>

      {/* Bottom CTA strip – full-width blue band */}
      <section
        id="contact-strip"
        className="relative left-1/2 right-1/2 w-screen -translate-x-1/2 mt-20 bg-sky-900 text-white"
      >
        <div className="mx-auto max-w-6xl px-6 lg:px-0 py-12">
          <div className="grid gap-10 md:grid-cols-[1.4fr,repeat(3,minmax(0,1fr))] items-start">
            {/* Left: main CTA */}
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-sky-300 mb-2">
                Get started
              </p>
              <h2 className="text-2xl md:text-3xl font-semibold mb-3">
                Explore Infinite’s AI governance capabilities
              </h2>
              <p className="text-sm md:text-base text-sky-100 max-w-md mb-6">
                Experience the suite in a guided pilot, see it in your banking
                flows, or just talk through options with us.
              </p>
              <a
                href="#"
                className="inline-flex items-center rounded-full bg-gradient-to-r from-pink-500 to-rose-500 px-6 py-2.5 text-sm font-semibold text-white hover:brightness-110 transition"
              >
                Try Infinite sandbox
              </a>
            </div>

            {/* Column 1 */}
            <div className="space-y-2 text-sm">
              <p className="text-xs uppercase tracking-[0.2em] text-sky-300">
                Request pricing
              </p>
              <p className="text-sky-100">
                Understand licensing, deployment options, and how Infinite can
                fit your landscape.
              </p>
              <button className="mt-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition">
                <span className="text-lg">→</span>
              </button>
            </div>

            {/* Column 2 */}
            <div className="space-y-2 text-sm">
              <p className="text-xs uppercase tracking-[0.2em] text-sky-300">
                Request a demo
              </p>
              <p className="text-sky-100">
                See how SASF, AI-IAM, EPPE, GiT and UTE work together in a real
                banking flow.
              </p>
              <button className="mt-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition">
                <span className="text-lg">→</span>
              </button>
            </div>

            {/* Column 3 */}
            <div className="space-y-2 text-sm">
              <p className="text-xs uppercase tracking-[0.2em] text-sky-300">
                Contact us
              </p>
              <p className="text-sky-100">
                Talk to us about pilots, integration approaches, or
                co-innovation opportunities.
              </p>
              <button className="mt-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition">
                <span className="text-lg">→</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
