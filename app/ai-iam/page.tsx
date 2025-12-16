"use client";

import Image from "next/image";
import { ForWatsonxCallout } from "../../components/ForWatsonxCallout";

export default function AIIamPage() {
  return (
    <div className="bg-slate-50 pb-20 space-y-16">
      {/* FULL-BLEED HERO */}
      <section className="relative left-1/2 right-1/2 w-screen -translate-x-1/2 overflow-hidden bg-slate-900">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/images/ai-iam-hero.png"
            alt="AI-IAM identity and authorization"
            fill
            priority
            className="h-full w-full object-cover object-[60%_40%]"
          />
        </div>

        {/* White gradient overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,1)_0%,rgba(255,255,255,1)_45%,rgba(255,255,255,0.35)_62%,rgba(15,23,42,0)_100%)]" />

        {/* Content */}
        <div className="relative z-10 mx-auto flex max-w-6xl items-center px-6 py-16 lg:px-0">
          <div className="max-w-xl space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sky-700">
              AI Identity &amp; Authorization Manager
            </p>

            <h1 className="text-3xl md:text-4xl font-semibold leading-tight text-slate-900">
              AI-IAM – identity, capabilities and governance for{" "}
              <span className="text-sky-700">AI agents</span>.
            </h1>

            <p className="text-sm md:text-base leading-relaxed text-slate-800">
              Traditional IAM secures humans and APIs. AI-IAM extends the model
              to autonomous agents, giving every agent a verifiable identity,
              scoped capabilities, and continuous runtime enforcement.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT AI-IAM IS RESPONSIBLE FOR */}
      <section className="mx-auto max-w-6xl px-6 pt-4 lg:px-0 border-b border-slate-100 pb-12">
        <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-sky-700 mb-2">
          Role in the suite
        </p>

        <h2 className="text-xl md:text-2xl font-semibold text-slate-900 mb-3">
          What AI-IAM is responsible for
        </h2>

        <p className="text-sm md:text-base text-slate-700 leading-relaxed mb-3 max-w-3xl">
          AI-IAM treats copilots, orchestrators, and background agents as
          first-class identities. Each agent is onboarded with a purpose,
          attestation, and risk tier. At runtime, agents receive short-lived
          session tokens and per-action capability tokens instead of long-lived
          API keys or static service accounts.
        </p>

        <p className="text-sm md:text-base text-slate-700 leading-relaxed max-w-3xl">
          Every call into SASF or UTE passes through a Policy Enforcement Point
          backed by AI-IAM. Policies decide who can call which tools, with what
          data, and under which risk conditions – and every decision is logged
          for audit and explainability.
        </p>

        {/* 🔵 WATSONX CALLOUT INSERTED HERE */}
        <ForWatsonxCallout
          description="AI-IAM becomes the identity & authorization layer that governs which Orchestrate agents, tools, and data scopes a user or system is allowed to access. Every watsonx agent run is issued a short-lived capability token, and every downstream tool or RAG connector verifies that token at runtime."
          bullets={[
            "Issues capability tokens for each Orchestrate agent invocation, encoding allowed tools, data access levels, and output constraints.",
            "Enforces policy-based access control on every downstream tool call triggered by a watsonx agent.",
            "Integrates with SASF and UTE to ensure only authorized actions are executed inside the governed runtime.",
            "Provides an audit trail of identity → agent → tool chain of custody, essential for regulated industries."
          ]}
        />
      </section>

      {/* KEY CAPABILITIES – THREE COLUMNS */}
      <section className="mx-auto max-w-6xl px-6 lg:px-0 border-b border-slate-100 pb-12">
        <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-sky-700 mb-2">
          Key capabilities
        </p>

        <h2 className="text-xl md:text-2xl font-semibold text-slate-900 mb-6">
          How AI-IAM keeps agents under control
        </h2>

        <div className="grid gap-8 md:grid-cols-3 text-xs md:text-sm text-slate-700 leading-relaxed">
          {/* Runtime policy enforcement */}
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-sky-600 mb-2">
              Runtime policy enforcement
            </p>
            <ul className="space-y-2 list-disc pl-4">
              <li>
                <strong>Per-action checks.</strong> Each tool call is evaluated
                by a Policy Decision Point that considers agent identity,
                intent, and live risk signals before allowing or denying it.
              </li>
              <li>
                <strong>Capability-based access.</strong> Agents receive
                fine-grained capabilities such as{" "}
                <code>can-read-transactions</code> or{" "}
                <code>can-invoke-llm</code>.
              </li>
              <li>
                <strong>Continuous authorization.</strong> Capabilities can be
                revoked mid-session when risk scores increase.
              </li>
            </ul>
          </div>

          {/* Control plane & console */}
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-sky-600 mb-2">
              Control plane &amp; console
            </p>
            <ul className="space-y-2 list-disc pl-4">
              <li>
                <strong>Agent & tool registry.</strong> Register agents, tools,
                and policies with lifecycle states and attestation.
              </li>
              <li>
                <strong>Strivacity-style console.</strong> Governance teams use
                a clean UI mapped directly to secure APIs.
              </li>
              <li>
                <strong>Dual-control approvals.</strong> Required for high-risk
                policy changes.
              </li>
            </ul>
          </div>

          {/* Explainability & audit */}
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-sky-600 mb-2">
              Explainability &amp; audit
            </p>
            <ul className="space-y-2 list-disc pl-4">
              <li>
                <strong>Ledger-backed events.</strong> Every decision is
                cryptographically verifiable.
              </li>
              <li>
                <strong>Decision chains.</strong> Reconstruct who acted, what
                policy applied, what data was masked.
              </li>
              <li>
                <strong>Regulator alignment.</strong> Built with ISO/IEC 42001
                & NIST AI RMF in mind.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* DEPLOYMENT MODEL */}
      <section className="mx-auto max-w-6xl px-6 lg:px-0">
        <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-sky-700 mb-2">
          Deployment model
        </p>

        <h2 className="text-xl md:text-2xl font-semibold text-slate-900 mb-3">
          SaaS agility with hybrid enforcement
        </h2>

        <p className="text-sm md:text-base text-slate-700 leading-relaxed max-w-3xl">
          AI-IAM is built as a hybrid-ready platform. A SaaS control plane
          manages dashboards, analytics, and policy authoring, while enforcement
          nodes run inside the bank’s VPC for sovereign policy evaluation and
          log storage.
        </p>
      </section>

      {/* CTA STRIP */}
      <section
        id="contact-strip"
        className="relative left-1/2 right-1/2 w-screen -translate-x-1/2 mt-20 bg-sky-900 text-white"
      >
        <div className="mx-auto max-w-6xl px-6 lg:px-0 py-12">
          <div className="grid gap-10 md:grid-cols-[1.4fr,repeat(3,minmax(0,1fr))] items-start">
            {/* Left */}
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-sky-300 mb-2">
                Get started
              </p>
              <h2 className="text-2xl md:text-3xl font-semibold mb-3">
                Explore Infinite’s AI governance capabilities
              </h2>
              <p className="text-sm md:text-base text-sky-100 max-w-md mb-6">
                Experience the suite in a guided pilot.
              </p>
              <a
                href="#"
                className="inline-flex items-center rounded-full bg-gradient-to-r from-pink-500 to-rose-500 px-6 py-2.5 text-sm font-semibold text-white hover:brightness-110 transition"
              >
                Try Infinite sandbox
              </a>
            </div>

            {/* Pricing */}
            <div className="space-y-2 text-sm">
              <p className="text-xs uppercase tracking-[0.2em] text-sky-300">
                Request pricing
              </p>
              <p className="text-sky-100">
                Understand licensing & deployment options.
              </p>
              <button className="mt-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition">
                <span className="text-lg">→</span>
              </button>
            </div>

            {/* Demo */}
            <div className="space-y-2 text-sm">
              <p className="text-xs uppercase tracking-[0.2em] text-sky-300">
                Request a demo
              </p>
              <p className="text-sky-100">
                See the full Infinite governance suite in action.
              </p>
              <button className="mt-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition">
                <span className="text-lg">→</span>
              </button>
            </div>

            {/* Contact */}
            <div className="space-y-2 text-sm">
              <p className="text-xs uppercase tracking-[0.2em] text-sky-300">
                Contact us
              </p>
              <p className="text-sky-100">
                Talk to us about pilots or co-innovation.
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
