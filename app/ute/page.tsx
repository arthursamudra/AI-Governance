import Image from "next/image";

export default function UtePage() {
  return (
    <div className="space-y-20 pb-20 bg-slate-50">

      {/* ========================================================= */}
      {/* HERO – full-width SAS-style banner                        */}
      {/* ========================================================= */}
      <section className="relative left-1/2 right-1/2 w-screen -translate-x-1/2 overflow-hidden bg-slate-900 h-[360px] md:h-[420px]">

        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/ute-hero.png"   // <--- NOW THIS WILL SHOW
            alt="Universal Tool Executor"
            fill
            priority
            className="object-cover object-[60%_40%]"
          />
        </div>

        {/* White → transparent overlay so text is readable on the left */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,1)_0%,rgba(255,255,255,1)_45%,rgba(255,255,255,0.35)_62%,rgba(15,23,42,0)_100%)]" />

        {/* Text content */}
        <div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-0 py-14 md:py-24">
          <div className="max-w-2xl space-y-5">

            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-sky-700">
              Universal Tool Executor
            </p>

            <h1 className="text-3xl md:text-4xl font-semibold leading-tight text-slate-900">
              UTE — One governed entrypoint for every tool and API.
            </h1>

            <p className="text-sm md:text-base text-slate-800 leading-relaxed">
              Instead of wiring agents directly to dozens of tools, UTE exposes
              a single, policy-enforced execution interface that works across
              clouds, runtimes, and vendors.
            </p>

            <p className="text-sm md:text-base text-slate-800 leading-relaxed">
              Agents describe what they want to do — UTE handles routing, authentication,
              retries, and observability with AI-IAM and SASF enforcing identity
              and policy controls.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* INTRO SECTION                                             */}
      {/* ========================================================= */}
      <section className="mx-auto max-w-6xl px-6 lg:px-0 space-y-4">

        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-sky-700">
          Role in the Infinite Suite
        </p>

        <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">
          Decouple agent logic from tool connectivity
        </h2>

        <div className="space-y-4 text-sm md:text-base text-slate-700 max-w-3xl leading-relaxed">
          <p>
            UTE is the execution backbone for tools and APIs. Agents never call systems directly —
            they submit a structured action to UTE, which centralizes governance, throttling,
            and observability.
          </p>

          <p>
            Works with REST APIs, watsonx agents, LangChain chains, and legacy microservices.
            Ideal for hybrid and multi-cloud environments.
          </p>
        </div>
      </section>

      {/* ========================================================= */}
      {/* HOW IT WORKS + BENEFITS                                  */}
      {/* ========================================================= */}
      <section className="mx-auto max-w-6xl px-6 lg:px-0 space-y-8">

        <div className="space-y-3">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-sky-700">
            How UTE works with the rest of the suite
          </p>

          <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">
            Request flow & unified governance
          </h2>

          <p className="text-sm md:text-base text-slate-500 max-w-3xl">
            Every tool invocation passes through the same governed path — via AI-IAM, SASF,
            EPPE and UTE — before reaching your enterprise systems.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-2 text-sm md:text-base text-slate-700 leading-relaxed">

          {/* Left column */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-slate-900">
              Request flow through UTE
            </h3>

            <ol className="list-decimal space-y-2 pl-5">
              <li>Agent calls UTE with a signed capability token from AI-IAM.</li>
              <li>UTE resolves the tool & checks SASF/EPPE policies.</li>
              <li>UTE executes with retries, timeouts & structured logging.</li>
              <li>Results return to the agent with full traceability.</li>
            </ol>
          </div>

          {/* Right column */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-slate-900">
              Why banks standardise on UTE
            </h3>

            <ul className="list-disc space-y-2 pl-5">
              <li><strong>Consistent governance</strong> for every tool.</li>
              <li><strong>Vendor flexibility</strong> with no prompt changes.</li>
              <li><strong>Safe experimentation</strong> in sandboxed mode.</li>
              <li><strong>Unified observability</strong> across all agents/tools.</li>
            </ul>
          </div>
        </div>

        <p className="text-xs text-slate-500 max-w-3xl">
          UTE completes the Infinite AI Governance Suite by giving you one controlled
          execution surface for every action your AI agents perform.
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
