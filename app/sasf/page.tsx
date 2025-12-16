"use client";

import Image from "next/image";
import { ForWatsonxCallout } from "../../components/ForWatsonxCallout";

export default function SASFPage() {
  return (
    <div className="bg-slate-50 pb-20 space-y-16">
      {/* FULL-BLEED HERO (like Overview) */}
      <section className="relative left-1/2 right-1/2 w-screen -translate-x-1/2 overflow-hidden bg-slate-900">
        {/* Background image across the whole strip */}
        <div className="absolute inset-0">
          <Image
            src="/images/sasf-flow.png"
            alt="SASF execution fabric"
            fill
            priority
            className="h-full w-full object-cover object-[60%_40%]"
          />
        </div>

        {/* White → transparent overlay so text sits on top, image visible on right */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,1)_0%,rgba(255,255,255,1)_45%,rgba(255,255,255,0.25)_62%,rgba(15,23,42,0)_100%)]" />

        {/* Content aligned with page grid */}
        <div className="relative z-10 mx-auto flex max-w-6xl items-center px-6 py-16 lg:px-0">
          <div className="max-w-xl space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sky-700">
              SASF · Secure AI Sandbox Framework
            </p>
            <h1 className="text-3xl md:text-4xl font-semibold leading-tight text-slate-900">
              The execution fabric for governed{" "}
              <span className="text-sky-700">agentic AI</span>.
            </h1>
            <p className="text-sm md:text-base leading-relaxed text-slate-800">
              SASF is where every agent, prompt, tool call and model interaction
              actually runs – behind guardrails, audit trails, and bank-grade
              controls.
            </p>
            <ul className="text-xs md:text-sm text-slate-800 space-y-1.5">
              <li>• Single entrypoint for all agentic AI flows.</li>
              <li>• Policy-aware routing, throttling and fallbacks.</li>
              <li>• Full trace of prompts, tools, and decisions.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ROLE IN THE SUITE – PLAIN SECTION, NO CARDS */}
      <section className="mx-auto max-w-6xl px-6 pt-4 lg:px-0 border-b border-slate-100 pb-12">
        <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-sky-700 mb-2">
          Role in the suite
        </p>
        <h2 className="text-xl md:text-2xl font-semibold text-slate-900 mb-3">
          What SASF is responsible for
        </h2>
        <p className="text-sm md:text-base text-slate-700 leading-relaxed mb-6 max-w-3xl">
          Think of SASF as the neutral, governed runtime where every AI action
          is executed. It doesn&apos;t replace your models or tools – it wraps
          them with a controlled sandbox that understands prompts, tools and
          agent workflows, and enforces bank policies every time something runs.
        </p>

        <div className="grid gap-6 md:grid-cols-3 text-xs md:text-sm text-slate-700 leading-relaxed">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-sky-600 mb-2">
              1 · Controlled execution
            </p>
            <p>
              Route requests through SASF instead of calling models or tools
              directly. SASF applies timeouts, rate limits, environment
              isolation, and redaction where needed.
            </p>
          </div>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-sky-600 mb-2">
              2 · Policy-aware orchestration
            </p>
            <p>
              Works hand-in-hand with EPPE and AI-IAM to decide which tools and
              models are allowed, under which prompts, for which users – and
              records every decision.
            </p>
          </div>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-sky-600 mb-2">
              3 · Audit graph
            </p>
            <p>
              Every step – inputs, prompt variants, tools, outputs – is logged
              into an audit graph that can be explored later by model risk,
              audit and operations.
            </p>
          </div>
        </div>

        {/* For watsonx callout */}
        <ForWatsonxCallout
          description="SASF becomes the execution fabric in which watsonx agent activity is observed, policy-checked and audited — without changing Orchestrate internals."
          bullets={[
            "Pre-run and post-run webhooks from watsonx Orchestrate pass each agent invocation through SASF.",
            "Tool calls from Orchestrate are routed via the Universal Tool Executor, which runs inside SASF.",
            "All prompts, tool results and training candidates touching IBM models flow through a governed sandbox.",
          ]}
          className="mt-10"
        />
      </section>

      {/* EXAMPLE FLOWS – TEXT ONLY, NO IMAGE, NO CARDS */}
      <section className="mx-auto max-w-6xl px-6 lg:px-0">
        <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-sky-700 mb-2">
          Example flows
        </p>
        <h2 className="text-xl md:text-2xl font-semibold text-slate-900 mb-3">
          Where SASF shows up in a bank
        </h2>
        <p className="text-sm md:text-base text-slate-700 leading-relaxed mb-5 max-w-3xl">
          A few concrete journeys where SASF becomes the invisible runtime
          behind agentic AI.
        </p>

        <div className="space-y-5 text-xs md:text-sm text-slate-700 leading-relaxed">
          <div>
            <p className="font-semibold text-slate-900">
              1. Contact-centre agent assist
            </p>
            <p>
              Every suggested response is generated inside SASF. EPPE controls
              the prompt, AI-IAM authenticates the agent, and the sandbox
              enforces which customer data can be retrieved or summarised.
            </p>
          </div>

          <div>
            <p className="font-semibold text-slate-900">
              2. Collections negotiation co-pilot
            </p>
            <p>
              Co-pilot agents blend policy, historical outcomes and LLMs. SASF
              orchestrates these tools in a single governed workflow with
              replayable traces for disputes and QA.
            </p>
          </div>

          <div>
            <p className="font-semibold text-slate-900">
              3. Internal productivity agents
            </p>
            <p>
              Developer assistants, SQL helpers, and policy summarisation
              agents all run through SASF so no data or tool is accessed outside
              governance – even for purely internal use-cases.
            </p>
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

