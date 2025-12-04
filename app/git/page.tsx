"use client";

import Image from "next/image";

export default function GitPage() {
  return (
    <div className="space-y-20 pb-20 bg-slate-50">
      {/* ========================================================= */}
      {/* HERO – matches SASF / AI-IAM / EPPE pattern               */}
      {/* ========================================================= */}
      <section className="relative left-1/2 right-1/2 w-screen -translate-x-1/2 overflow-hidden bg-slate-900 h-[360px] md:h-[420px]">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/images/git-hero.png" // adjust path if needed
            alt="Governance-in-Training oversight"
            fill
            priority
            className="object-cover object-[70%_30%]"
          />
        </div>

        {/* White → transparent overlay so text is readable on the left */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,1)_0%,rgba(255,255,255,1)_45%,rgba(255,255,255,0.35)_62%,rgba(15,23,42,0)_100%)]" />


        {/* Text content */}
        <div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-0 py-16 md:py-24">
          <div className="max-w-2xl space-y-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-sky-700">
              Governance-in-Training
            </p>

            <h1 className="text-3xl md:text-4xl font-semibold leading-tight text-slate-900">
              GiT – Training-time governance for fine-tuned models.
            </h1>

            <p className="text-sm md:text-base text-slate-800 leading-relaxed">
              GiT closes the biggest blind spot in today’s AI stacks: what
              happens to sensitive data while models are being fine-tuned.
            </p>

            <p className="text-sm md:text-base text-slate-800 leading-relaxed">
              It wraps your training pipelines with live oversight,
              memorisation detection, and compliance-grade reporting – before
              risks ever reach production.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 1 – WHY IT MATTERS (FLUSH, NO CARD)               */}
      {/* ========================================================= */}
      <section className="mx-auto max-w-6xl px-6 lg:px-0 space-y-4">
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-sky-700">
          Why it matters
        </p>

        <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">
          Where governance is missing today
        </h2>

        <p className="text-sm md:text-base text-slate-500">
          Fine-tuning is where your most sensitive data is exposed – often with
          the least oversight.
        </p>

        <div className="space-y-4 text-sm md:text-base text-slate-700 leading-relaxed">
          <p>
            Fine-tuning is where enterprises feed their most sensitive datasets
            into models – customer conversations, transaction logs, medical
            records, internal chat transcripts. Today, most governance controls
            start <em>after</em> training is complete, when memorisation or
            leaks are already baked into the weights.
          </p>
          <p>
            GiT inserts a governed layer around your ML pipelines. It observes
            what the model is internalising, detects memorisation of specific
            records, and can automatically intervene, redact, or stop a run
            before it becomes a compliance incident.
          </p>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 2 – FOUR LAYERS (INLINE, NO CARD)                 */}
      {/* ========================================================= */}
      <section className="mx-auto max-w-6xl px-6 lg:px-0 space-y-8">
        <div className="space-y-3">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-sky-700">
            Four layers of protection
          </p>
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">
            How GiT governs your training runs
          </h2>
          <p className="text-sm md:text-base text-slate-500">
            From dataset intake to final certification, GiT adds a continuous
            governance spine.
          </p>
        </div>

        <div className="space-y-10 text-sm md:text-base text-slate-700 leading-relaxed">
          {/* Layer 1 */}
          <div className="space-y-2 border-l-2 border-sky-500 pl-4">
            <p className="text-[11px] uppercase font-semibold tracking-[0.2em] text-sky-700">
              Layer 1 · Dataset intelligence
            </p>
            <h3 className="text-lg font-semibold text-slate-900">
              Understand what you’re feeding the model
            </h3>
            <p>
              GiT begins with a deep scan of training datasets to identify PII,
              PHI, financial details, secrets, and bias patterns. Instead of
              simply blocking all sensitive data, it marks high-risk slices and
              defines how they should be handled – masked, sampled, or
              excluded.
            </p>
          </div>

          {/* Layer 2 */}
          <div className="space-y-2 border-l-2 border-sky-500 pl-4">
            <p className="text-[11px] uppercase font-semibold tracking-[0.2em] text-sky-700">
              Layer 2 · Training-loop instrumentation
            </p>
            <h3 className="text-lg font-semibold text-slate-900">
              Live telemetry from inside the loop
            </h3>
            <p>
              Lightweight hooks integrate with your training loop (PyTorch,
              JAX, Keras) and surface governance metrics in real time:
              risk-bucket gradients, anomalous parameter changes, and drift
              signals – all without interrupting ML engineering workflows.
            </p>
          </div>

          {/* Layer 3 */}
          <div className="space-y-2 border-l-2 border-sky-500 pl-4">
            <p className="text-[11px] uppercase font-semibold tracking-[0.2em] text-sky-700">
              Layer 3 · Memorisation probes
            </p>
            <h3 className="text-lg font-semibold text-slate-900">
              Catch leaks before they ship
            </h3>
            <p>
              GiT continuously probes the model during training to see whether
              it can reconstruct individual training records or secrets. When
              memorisation is detected, policies can downgrade the dataset,
              inject noise, or halt the run entirely – before the model reaches
              production.
            </p>
          </div>

          {/* Layer 4 */}
          <div className="space-y-2 border-l-2 border-sky-500 pl-4">
            <p className="text-[11px] uppercase font-semibold tracking-[0.2em] text-sky-700">
              Layer 4 · Governance certification
            </p>
            <h3 className="text-lg font-semibold text-slate-900">
              An auditable record for every run
            </h3>
            <p>
              At the end of each run, GiT produces a governance report: which
              datasets were used, what risks were detected, which mitigations
              fired, and whether the model is allowed to move to staging or
              production. This becomes the signed evidence regulators and model
              risk teams increasingly expect.
            </p>
          </div>
        </div>

        <p className="mt-6 text-xs text-slate-500 max-w-3xl">
          GiT works alongside SASF, AI-IAM and EPPE to extend governance all the
          way from prompts and tools down to the data and weights that power
          your agentic AI.
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
