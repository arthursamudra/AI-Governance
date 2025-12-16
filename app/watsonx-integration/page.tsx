import React from "react";
import Image from "next/image";

export default function WatsonxIntegrationPage() {
  return (
    <main className="bg-slate-50 text-slate-900 pb-24">
      {/* HERO – full-width band with background image + gradient like other pages */}
      <section className="relative left-1/2 right-1/2 w-screen -translate-x-1/2 overflow-hidden border-b border-slate-200 bg-slate-900">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/images/watsonx-integration-hero.png"
            alt="Infinite and IBM watsonx integration"
            fill
            priority
            className="h-full w-full object-cover object-[50%_50%]"
          />
        </div>

       {/* soft white gradient overlay */}
       <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,1)_0%,rgba(255,255,255,1)_45%,rgba(255,255,255,0.35)_65%,rgba(255,255,255,0)_100%)]" />

        <div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-0 py-16 md:py-20 flex items-center">
          <div className="max-w-2xl space-y-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-sky-700">
              Infinite × IBM watsonx
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight text-slate-900 max-w-3xl">
              Make IBM watsonx agents safer and governed{" "}
              <span className="text-sky-700">without changing watsonx.</span>
            </h1>
            <p className="text-sm md:text-base text-slate-800 max-w-3xl leading-relaxed">
              Infinite’s AI Flow Intelligence Layer wraps IBM watsonx
              Orchestrate with identity, tool control, prompt policies, and
              training governance — so enterprises get watsonx power with
              Infinite-grade oversight.
            </p>
            <p className="text-sm md:text-base text-slate-700 max-w-2xl">
              watsonx stays the engine. Infinite becomes the control plane
              around it.
            </p>

            {/* Hero CTAs */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#integration"
                className="inline-flex items-center justify-center rounded-full bg-sky-700 px-7 py-3 text-sm font-semibold text-white hover:bg-sky-800 transition"
              >
                View watsonx integration blueprint
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-sky-700/70 bg-white px-7 py-3 text-sm font-semibold text-sky-800 hover:bg-sky-50 transition"
              >
                Talk about a joint PoC
              </a>
            </div>

            {/* Small flat “pills” – no cards */}
            <div className="mt-4 flex flex-wrap gap-3 text-[11px] text-slate-600">
              <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                Native-friendly: tools, APIs &amp; webhooks only
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1">
                <span className="h-1.5 w-1.5 rounded-full bg-sky-500" />
                Governance-first: AI-IAM, EPPE, GiT, UTE
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1">
                <span className="h-1.5 w-1.5 rounded-full bg-fuchsia-500" />
                Built for regulated IBM clients &amp; GSIs
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: Where Infinite sits next to watsonx */}
      <section className="mx-auto max-w-6xl px-6 lg:px-0 py-16 border-b border-slate-200">
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-sky-700 mb-2">
          Positioning
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-3">
          Where Infinite sits next to IBM watsonx
        </h2>
        <p className="text-sm md:text-base text-slate-700 max-w-3xl mb-8">
          Orchestrate continues to run agents, plan tool calls, and invoke IBM
          models. Infinite attaches at officially supported seams — tools, APIs
          and webhooks — to add a governance and observability spine around
          every agent run.
        </p>

        <div className="grid gap-10 md:grid-cols-2 md:items-start text-sm md:text-base text-slate-700">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500 mb-2">
              What stays in watsonx
            </h3>
            <ul className="space-y-2 list-disc pl-5">
              <li>Orchestrate flows and agents remain the system of record.</li>
              <li>
                Prompt Lab, watsonx.ai models and watsonx.govern keep their
                existing roles.
              </li>
              <li>
                watsonx project structure, deployment, and monitoring stay as-is.
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500 mb-2">
              What Infinite wraps around watsonx
            </h3>
            <ul className="space-y-2 list-disc pl-5">
              <li>
                AI-IAM defines what each agent can do using capability tokens and
                runtime policies.
              </li>
              <li>
                EPPE applies prompt policies before requests hit IBM models.
              </li>
              <li>
                UTE governs tools, RAG connectors, and external APIs as a single
                gateway.
              </li>
              <li>
                GiT decides which interactions are safe to become watsonx.ai
                training data.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* SECTION: How Infinite wraps IBM watsonx */}
      <section
        id="integration"
        className="mx-auto max-w-6xl px-6 lg:px-0 py-16 border-b border-slate-200"
      >
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-sky-700 mb-2">
          Integration blueprint
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-3">
          How Infinite wraps IBM watsonx
        </h2>
        <p className="text-sm md:text-base text-slate-700 max-w-3xl mb-8">
          Think of Infinite as a governance layer that sits just outside
          watsonx. Channels still talk to watsonx; Infinite is invoked via
          pre-/post-run webhooks, tools, and APIs to enforce policies and build
          a live graph of agent behaviour.
        </p>

        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr] md:items-start">
          {/* 3 “layers” as flat text blocks */}
          <div className="space-y-6 text-sm md:text-base text-slate-800">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-sky-700 mb-1">
                Layer 1 · Channels &amp; journeys
              </p>
              <p>
                Web, mobile, internal portals, and partner applications invoke
                watsonx Orchestrate agents via standard APIs, using IBM as the
                platform of record.
              </p>
            </div>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-sky-700 mb-1">
                Layer 2 · IBM watsonx platform
              </p>
              <p>
                Orchestrate agents, Prompt Lab, watsonx.ai models and
                watsonx.govern provide the reasoning and core governance for
                enterprise journeys.
              </p>
            </div>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-sky-700 mb-1">
                Layer 3 · Infinite AI Flow Governance Layer
              </p>
              <p>
                SASF, AI-IAM, EPPE, GiT, UTE and the Flow Intelligence / Energy
                Layer wrap watsonx, governing who can run which agents, which
                tools and data they can touch, and how prompts and training data
                are curated.
              </p>
              <p className="mt-3 text-[11px] text-slate-500 max-w-3xl">
                Channels and partners on top, watsonx at the core, Infinite as
                the surrounding control plane — so IBM can focus on models and
                orchestration, while Infinite hardens identity, tools, prompts,
                and training.
              </p>
            </div>
          </div>

          {/* End-to-end run – flat list, no card */}
          <div className="text-xs md:text-sm text-slate-700">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500 mb-2">
              End-to-end watsonx agent run
            </p>
            <p className="mb-3 font-semibold text-slate-900">
              Where Infinite is invoked in a typical Orchestrate flow
            </p>
            <ol className="space-y-2 list-decimal pl-4">
              <li>
                User calls a watsonx Orchestrate agent. A pre-run webhook hits
                Infinite, where AI-IAM evaluates policies and issues a capability
                token.
              </li>
              <li>
                Orchestrate plans the next step. Before prompts reach IBM models,
                they are routed through EPPE for masking, approvals and policy
                checks.
              </li>
              <li>
                When the agent needs tools or data, Orchestrate calls UTE as a
                tool. UTE enforces permissions, routes to backend APIs or RAG
                connectors and returns sanitised results.
              </li>
              <li>
                Throughout the run, Infinite logs a live graph of agents, tools,
                data sources and costs in the Flow Intelligence &amp; Energy
                Layer.
              </li>
              <li>
                When the run completes, post-run webhooks send summaries to GiT,
                which decides which interactions can safely become watsonx.ai
                training data.
              </li>
            </ol>
            <p className="mt-3 text-[11px] text-slate-500">
              All of this happens through supported watsonx extension points —
              no changes to Orchestrate internals.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION: How each Infinite capability connects into watsonx */}
      <section className="mx-auto max-w-6xl px-6 lg:px-0 py-16 border-b border-slate-200">
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-sky-700 mb-2">
          Capabilities
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-3">
          How each Infinite capability connects into watsonx
        </h2>
        <p className="text-sm md:text-base text-slate-700 max-w-3xl mb-8">
          The Infinite suite doesn&apos;t replace watsonx — it expresses agent,
          tool, prompt, and training decisions as policies around watsonx, using
          the same APIs IBM already exposes.
        </p>

        {/* Simple two-column text grid, no cards */}
        <div className="grid gap-10 md:grid-cols-2 text-sm md:text-base text-slate-800">
          <div>
            <h3 className="text-sm font-semibold text-slate-900 mb-1">
              SASF · Secure AI Sandbox Framework
            </h3>
            <p className="text-sm text-slate-700 mb-2">
              The execution fabric in which watsonx agent activity is observed,
              policy-checked and audited.
            </p>
            <p className="text-[12px] font-semibold text-slate-500">
              Invoked via
            </p>
            <ul className="text-[13px] text-slate-700 list-disc pl-5 mb-2">
              <li>Pre-/post-run webhooks from Orchestrate</li>
              <li>Tool calls routed through UTE</li>
              <li>Logging hooks from watsonx workloads</li>
            </ul>
            <p className="text-[12px] font-semibold text-slate-500">
              For watsonx teams
            </p>
            <p className="text-[13px] text-slate-700">
              A single, governed “tunnel” for prompts, tools and training jobs
              that touch IBM models.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-slate-900 mb-1">
              AI-IAM · AI Identity &amp; Authorization Manager
            </h3>
            <p className="text-sm text-slate-700 mb-2">
              IAM for agents and tools in the watsonx world, built on capability
              tokens and runtime policies.
            </p>
            <p className="text-[12px] font-semibold text-slate-500">
              Invoked via
            </p>
            <ul className="text-[13px] text-slate-700 list-disc pl-5 mb-2">
              <li>Pre-run / pre-message policy checks</li>
              <li>Capability tokens attached to tool &amp; RAG calls</li>
            </ul>
            <p className="text-[12px] font-semibold text-slate-500">
              For watsonx teams
            </p>
            <p className="text-[13px] text-slate-700">
              Express what each agent can and cannot do without editing the
              agent&apos;s internal logic.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-slate-900 mb-1">
              EPPE · Enterprise Prompt Policy Engine
            </h3>
            <p className="text-sm text-slate-700 mb-2">
              Policies for the prompts you run on IBM models, wrapped around
              Orchestrate and Prompt Lab.
            </p>
            <p className="text-[12px] font-semibold text-slate-500">
              Invoked via
            </p>
            <ul className="text-[13px] text-slate-700 list-disc pl-5 mb-2">
              <li>Middleware around Orchestrate → model calls</li>
              <li>Prompt templates synced from watsonx projects</li>
            </ul>
            <p className="text-[12px] font-semibold text-slate-500">
              For watsonx teams
            </p>
            <p className="text-[13px] text-slate-700">
              Turn prompts into governed assets with masking, approvals,
              versioning and auditable history.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-slate-900 mb-1">
              GiT · Governance-in-Training
            </h3>
            <p className="text-sm text-slate-700 mb-2">
              Decide which conversations, traces and tool outputs are safe to
              become watsonx training data.
            </p>
            <p className="text-[12px] font-semibold text-slate-500">
              Invoked via
            </p>
            <ul className="text-[13px] text-slate-700 list-disc pl-5 mb-2">
              <li>Post-run webhooks &amp; log exports</li>
              <li>Links into watsonx.govern and watsonx.ai pipelines</li>
            </ul>
            <p className="text-[12px] font-semibold text-slate-500">
              For watsonx teams
            </p>
            <p className="text-[13px] text-slate-700">
              Train models on curated, policy-approved slices of behaviour
              instead of raw transcript dumps.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-slate-900 mb-1">
              UTE · Universal Tool Executor
            </h3>
            <p className="text-sm text-slate-700 mb-2">
              A single governed gateway for all tools callable from Orchestrate.
            </p>
            <p className="text-[12px] font-semibold text-slate-500">
              Invoked via
            </p>
            <ul className="text-[13px] text-slate-700 list-disc pl-5 mb-2">
              <li>Python / OpenAPI tools wrapped around UTE</li>
              <li>RAG connectors and external agents</li>
            </ul>
            <p className="text-[12px] font-semibold text-slate-500">
              For watsonx teams
            </p>
            <p className="text-[13px] text-slate-700">
              One place to govern, version and audit use of enterprise APIs, RAG
              sources and third-party agents.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-slate-900 mb-1">
              Flow Intelligence &amp; Energy Layer
            </h3>
            <p className="text-sm text-slate-700 mb-2">
              The “radar” for watsonx agents — showing what ran, which tools
              were used, which data was touched, and what it cost.
            </p>
            <p className="text-[12px] font-semibold text-slate-500">
              Invoked via
            </p>
            <ul className="text-[13px] text-slate-700 list-disc pl-5 mb-2">
              <li>Logs &amp; webhooks from Orchestrate and UTE</li>
              <li>Telemetry from model and tool endpoints</li>
            </ul>
            <p className="text-[12px] font-semibold text-slate-500">
              For watsonx teams
            </p>
            <p className="text-[13px] text-slate-700">
              Give risk, architecture and operations teams a live graph of
              watsonx behaviour across agents, tools and datasets.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION: Why IBM cares */}
      <section className="mx-auto max-w-6xl px-6 lg:px-0 py-16 border-b border-slate-200">
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-sky-700 mb-2">
          For IBM &amp; partners
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-3">
          Why this matters for IBM watsonx and its partners
        </h2>
        <p className="text-sm md:text-base text-slate-700 max-w-3xl mb-8">
          The Infinite layer is designed to make watsonx easier to sell, safer
          to deploy and more compelling against hyperscaler stacks — without
          asking IBM to re-engineer the platform.
        </p>

        <div className="grid gap-8 md:grid-cols-2 text-sm md:text-base text-slate-800">
          <div>
            <h3 className="text-sm font-semibold text-slate-900 mb-1">
              Stronger story for regulated industries
            </h3>
            <p className="text-sm text-slate-700">
              Banks, insurers and public sector clients can see precisely how
              agents, tools and training data are governed around watsonx,
              closing gaps that typically block approvals.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-slate-900 mb-1">
              Differentiation vs. hyperscalers
            </h3>
            <p className="text-sm text-slate-700">
              Watsonx already leads on governance messaging. Infinite adds agent
              IAM, tool governance and training curation to push that lead
              further than AWS Bedrock or Azure OpenAI stories.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-slate-900 mb-1">
              Standard hardening layer for GSIs
            </h3>
            <p className="text-sm text-slate-700">
              IBM&apos;s GSI partners can reuse Infinite as their standard
              “watsonx hardening” blueprint across clients, instead of
              reinventing governance each time.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-slate-900 mb-1">
              Built for joint go-to-market
            </h3>
            <p className="text-sm text-slate-700">
              The ecosystem is intentionally framed as Infinite + IBM + GSI — a
              pattern that slots cleanly into existing watsonx sales and
              delivery motions.
            </p>
          </div>
        </div>
      </section>

      {/* BOTTOM CTA – full-width band, aligned with other pages */}
      <section
        id="contact"
        className="relative left-1/2 right-1/2 w-screen -translate-x-1/2 mt-12 bg-sky-900 text-white"
      >
        <div className="mx-auto max-w-6xl px-6 lg:px-0 py-12">
          <div className="grid gap-10 md:grid-cols-[1.3fr,1fr] items-start">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-sky-300 mb-2">
                Deploy side-by-side with watsonx
              </p>
              <h2 className="text-2xl md:text-3xl font-semibold mb-3">
                Run Infinite in your VPC, connect via watsonx tools and APIs
              </h2>
              <p className="text-sm md:text-base text-sky-100 max-w-xl mb-4">
                Infinite runs in the client&apos;s VPC — on IBM Cloud, AWS, Azure
                or on-prem via OpenShift — and connects to watsonx using only
                supported integration points.
              </p>
              <ul className="space-y-2 text-sm text-sky-100 max-w-xl">
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-300" />
                  <span>
                    Orchestrate tools (ADK / OpenAPI / Python) for the Universal
                    Tool Executor and RAG governance.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-300" />
                  <span>
                    Assistant and agent webhooks for pre-run, post-run and
                    logging callbacks into SASF, AI-IAM, EPPE and GiT.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-fuchsia-300" />
                  <span>
                    Platform APIs for orchestrated agent invocation, status and
                    export into watsonx.govern and watsonx.ai.
                  </span>
                </li>
              </ul>
            </div>

            <div className="space-y-4 text-sm">
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-sky-300">
                Get started
              </p>
              <p className="text-sky-100">
                Explore a sandbox where a watsonx Orchestrate agent runs
                entirely through the Infinite governance layer, or schedule a
                joint session with watsonx, architecture and risk teams.
              </p>
              <div className="flex flex-wrap gap-3">
                <button className="inline-flex flex-1 items-center justify-center rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-sky-900 hover:bg-sky-50 transition">
                  Explore integration sandbox
                </button>
                <button className="inline-flex flex-1 items-center justify-center rounded-full border border-sky-300 bg-sky-900 px-5 py-2.5 text-sm font-semibold text-sky-100 hover:bg-sky-800 transition">
                  Request Infinite × IBM session
                </button>
              </div>
              <p className="text-[11px] text-sky-200 max-w-md">
                This is positioned as a complementary control plane around
                watsonx — not a competing platform. The outcome: safer agents,
                clearer governance, and a stronger story for IBM and its
                partners.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
