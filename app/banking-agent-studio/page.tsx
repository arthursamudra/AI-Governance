import Image from "next/image";

export default function BankingAgentStudioPage() {
  return (
    <div className="space-y-20 pb-20 bg-slate-50">
      {/* ========================================================= */}
      {/* HERO – full-width, SAS-style                             */}
      {/* ========================================================= */}
      <section className="relative left-1/2 right-1/2 w-screen -translate-x-1/2 overflow-hidden bg-slate-900 h-[360px] md:h-[420px]">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/images/bas-hero.png" // update path / image name as needed
            alt="Banking Agent Studio in action"
            fill
            priority
            className="object-cover object-[70%_30%]"
          />
        </div>

        {/* White → transparent overlay so text is readable on the left */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,1)_0%,rgba(255,255,255,1)_45%,rgba(255,255,255,0.45)_62%,rgba(15,23,42,0)_100%)]" />

        {/* Text content */}
        <div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-0 py-16 md:py-24">
          <div className="max-w-2xl space-y-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-sky-700">
              SASF-Powered Banking Agent Studio
            </p>

            <h1 className="text-3xl md:text-4xl font-semibold leading-tight text-slate-900">
              Banking Agent Studio – domain copilots for digital finance.
            </h1>

            <p className="text-sm md:text-base text-slate-800 leading-relaxed">
              Design, test, and deploy banking-native agents – KYC,
              underwriting, AML, fraud – directly into SASF with governance
              built in from day one.
            </p>

            <p className="text-sm md:text-base text-slate-800 leading-relaxed">
              Product and operations teams focus on journeys and outcomes, while
              SASF and AI-IAM enforce policies, identity, and audit in
              production.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* INTRO – what the studio is                               */}
      {/* ========================================================= */}
      <section className="mx-auto max-w-6xl px-6 lg:px-0 space-y-4">
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-sky-700">
          Role in the suite
        </p>

        <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">
          Separate agent design from governed runtime
        </h2>

        <div className="space-y-4 text-sm md:text-base text-slate-700 leading-relaxed max-w-3xl">
          <p>
            Banking Agent Studio separates the <em>design</em> of AI agents from
            the <em>runtime</em> controls that keep them compliant. Product and
            operations teams configure workflows, prompts, and tools, while SASF
            and AI-IAM enforce policies, identity, and audit in production.
          </p>
          <p>
            The result: explainable banking agents that plug directly into
            online banking, contact-centre dashboards, and internal risk
            platforms without months of bespoke integration work.
          </p>
        </div>
      </section>

      {/* ========================================================= */}
      {/* WHAT YOU CAN BUILD – three concrete agent types           */}
      {/* ========================================================= */}
      <section className="mx-auto max-w-6xl px-6 lg:px-0 space-y-8">
        <div className="space-y-3">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-sky-700">
            Use cases
          </p>
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">
            What you can build with Banking Agent Studio
          </h2>
          <p className="text-sm md:text-base text-slate-500 max-w-3xl">
            Start from opinionated templates for high-value banking journeys and
            adapt them to your policies, data, and channels.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-3 text-sm md:text-base text-slate-700 leading-relaxed">
          {/* KYC */}
          <div className="space-y-2">
            <p className="text-[11px] uppercase font-semibold tracking-[0.2em] text-sky-700">
              KYC onboarding copilot
            </p>
            <h3 className="text-lg font-semibold text-slate-900">
              Faster, auditable onboarding
            </h3>
            <p>
              Automate document capture, OCR, biometric checks, sanctions
              screening, and CRM updates while keeping all customer data within
              the bank’s boundary. Each step is logged so KYC teams can replay
              decisions and override when needed.
            </p>
          </div>

          {/* Underwriting */}
          <div className="space-y-2">
            <p className="text-[11px] uppercase font-semibold tracking-[0.2em] text-sky-700">
              Credit underwriting assistant
            </p>
            <h3 className="text-lg font-semibold text-slate-900">
              Explainable credit decisions
            </h3>
            <p>
              Pull bureau data, compute FOIR/DSCR, apply policy rules, and
              draft underwriter memos with clear evidence and confidence
              scores. Human officers stay in the loop for final approval, with
              SASF capturing a full decision trail.
            </p>
          </div>

          {/* AML / Fraud */}
          <div className="space-y-2">
            <p className="text-[11px] uppercase font-semibold tracking-[0.2em] text-sky-700">
              AML &amp; fraud agents
            </p>
            <h3 className="text-lg font-semibold text-slate-900">
              Smarter investigations, governed data
            </h3>
            <p>
              Cluster related alerts, surface cross-channel patterns, and draft
              STRs while SASF ensures sensitive transaction data only flows to
              approved models and tools. Investigators see a clear story instead
              of a queue of isolated alerts.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* DELIVERY FLOW – 4 steps, inline (no cards)                */}
      {/* ========================================================= */}
      <section className="mx-auto max-w-6xl px-6 lg:px-0 space-y-6">
        <div className="space-y-3">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-sky-700">
            Delivery model
          </p>
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">
            From concept to production in four steps
          </h2>
          <p className="text-sm md:text-base text-slate-500 max-w-3xl">
            Studio packages each agent as a SASF-ready unit – with identity,
            prompts, tools, and policies wired in.
          </p>
        </div>

        <ol className="list-decimal space-y-3 pl-5 text-sm md:text-base text-slate-700 leading-relaxed max-w-3xl">
          <li>
            <strong>Configure.</strong> Choose a template, connect data sources,
            and attach AI-IAM roles, EPPE prompts, and compliance packs.
          </li>
          <li>
            <strong>Generate package.</strong> Studio creates an agent package
            with manifests, tools, and prompts ready to deploy.
          </li>
          <li>
            <strong>Deploy to SASF.</strong> The package is deployed into the
            bank&apos;s VPC, inheriting SASF&apos;s routing, logging, and policy
            controls.
          </li>
          <li>
            <strong>Integrate.</strong> Front-ends call the agent via REST or an
            embeddable widget, with no direct LLM access from channels.
          </li>
        </ol>

        <p className="text-xs text-slate-500 max-w-3xl">
          Banking Agent Studio sits on top of SASF, AI-IAM and EPPE – so every
          new agent automatically benefits from the same identity, policy, and
          audit fabric as the rest of your Infinite AI governance suite.
        </p>
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
