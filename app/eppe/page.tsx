"use client";

import Image from "next/image";
import { Section } from "../../components/section";
import { TabbedLayout } from "../../components/tabbed-layout";
import { ForWatsonxCallout } from "../../components/ForWatsonxCallout";

export default function EppePage() {
  return (
    <div className="space-y-20 pb-20 bg-slate-50">

      {/* ========================================================= */}
      {/* HERO — SAS Viya–style banner                              */}
      {/* ========================================================= */}
      <section className="relative left-1/2 right-1/2 w-screen -translate-x-1/2 h-[380px] md:h-[460px] overflow-hidden">

        {/* Background */}
        <div className="absolute inset-0">
          <Image
            src="/images/eppe-hero.png"
            alt="EPPE hero"
            fill
            priority
            className="object-cover object-[50%_50%]"
          />
        </div>

        {/* White → transparent overlay so text is readable on the left */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,1)_0%,rgba(255,255,255,1)_45%,rgba(255,255,255,0.35)_62%,rgba(15,23,42,0)_100%)]" />

        {/* HERO Text */}
        <div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-0 py-20 md:py-28">
          <p className="text-[11px] uppercase font-semibold tracking-[0.22em] text-sky-700">
            Enterprise Prompt Policy Engine
          </p>

          <h1 className="text-3xl md:text-4xl font-semibold leading-tight text-slate-900 max-w-2xl">
            EPPE — The control plane for enterprise prompts.
          </h1>

          <p className="text-sm md:text-base text-slate-800 mt-4 max-w-xl leading-relaxed">
            Prompts are the new source code of AI systems. EPPE turns them into governed,
            testable, approved enterprise assets with lifecycle and runtime control.
          </p>

          <p className="text-sm md:text-base text-slate-800 mt-3 max-w-xl leading-relaxed">
            Every system prompt, template, and guardrail is versioned, validated, tested,
            approved, and observable.
          </p>
        </div>
      </section>

      {/* ========================================================= */}
      {/* INTRO — Clean Viya-style content (NO CARDS)               */}
      {/* ========================================================= */}
      <section className="mx-auto max-w-6xl px-6 lg:px-0">
        <p className="text-[11px] uppercase tracking-[0.18em] font-semibold text-sky-700">
          Introduction
        </p>

        <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 mt-2">
          Turning prompts into governed enterprise assets
        </h2>

        <div className="mt-4 space-y-4 text-sm md:text-base leading-relaxed text-slate-700 max-w-3xl">
          <p>
            EPPE acts as the single registry for prompts across chatbots, copilots,
            RAG pipelines, and orchestrators — enforcing consistency and safety.
          </p>
          <p>
            Instead of embedding prompts inside scattered repos, apps fetch approved
            prompts at runtime, ensuring that changes roll out enterprise-wide instantly.
          </p>
        </div>

        {/* 🔵 For watsonx callout */}
        <ForWatsonxCallout
          description="EPPE becomes the prompt policy layer around watsonx: it governs the system prompts, templates and guardrails that Orchestrate agents and watsonx.ai models use, ensuring only approved, tested and masked prompts are sent to IBM models."
          bullets={[
            "Syncs prompt templates from watsonx projects and Prompt Lab into EPPE as governed assets with versioning and approvals.",
            "Inserts a policy check before Orchestrate → model calls, enforcing masking, redaction and guardrail patterns at runtime.",
            "Lets risk and governance teams manage prompt changes centrally while apps and agents in watsonx simply call approved prompt keys.",
            "Links prompt versions to behavioural traces so watsonx.govern and GiT can see which prompts drove which outcomes."
          ]}
        />
      </section>

      {/* ========================================================= */}
      {/* TABS — Clean, flat layout (NO CARDS)                      */}
      {/* ========================================================= */}
      <section className="mx-auto max-w-6xl px-6 lg:px-0">

        <p className="text-[11px] uppercase tracking-[0.18em] font-semibold text-sky-700">
          Prompt governance
        </p>

        <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 mt-2">
          Prompt governance, Viya-style
        </h2>

        <p className="text-sm md:text-base leading-relaxed text-slate-600 mt-4 mb-10 max-w-3xl">
          A structured lifecycle: Author → Test → Approve → Deliver
        </p>

        <div className="pt-2">
          <TabbedLayout
            tabs={[
              {
                id: "lifecycle",
                label: "Author → Test → Approve",
                content: (
                  <ul className="list-disc space-y-2 pl-5 text-sm md:text-base text-slate-700 max-w-3xl leading-relaxed">
                    <li><strong>Authoring.</strong> Collaborative prompt editor with templates.</li>
                    <li><strong>Policy validation.</strong> Checks for banned content, PII, schema drift.</li>
                    <li><strong>Testing.</strong> Safety & regression tests for reliability.</li>
                    <li><strong>Approvals.</strong> Risk-based workflow for compliance sign-off.</li>
                  </ul>
                ),
              },
              {
                id: "runtime",
                label: "Runtime delivery",
                content: (
                  <ul className="list-disc space-y-2 pl-5 text-sm md:text-base text-slate-700 max-w-3xl leading-relaxed">
                    <li>
                      Apps fetch prompts via
                      <code className="ml-1 px-1 py-0.5 bg-slate-100 rounded text-xs">
                        GET /runtime/prompts/&lt;key&gt;?env=prod
                      </code>
                    </li>
                    <li>Environment-aware rollout.</li>
                    <li>Observability links prompt versions to behaviour.</li>
                  </ul>
                ),
              },
              {
                id: "stack",
                label: "Where EPPE fits",
                content: (
                  <p className="text-sm md:text-base text-slate-700 max-w-3xl leading-relaxed">
                    EPPE governs model instructions.  
                    AI-IAM governs who may call prompts.  
                    SASF governs runtime routing and controls.  
                    GiT governs what models may learn.  
                    Together, they deliver enterprise-grade AI governance.
                  </p>
                ),
              },
            ]}
          />
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
