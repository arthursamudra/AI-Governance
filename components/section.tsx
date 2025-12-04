import type { ReactNode } from "react";

export function Section({
  eyebrow,
  title,
  kicker,
  children
}: {
  eyebrow?: string;
  title: string;
  kicker?: string;
  children: ReactNode;
}) {
  return (
    <section className="mb-10 rounded-2xl bg-surface/90 p-6 shadow-soft">
      <div className="mb-4 space-y-1">
        {eyebrow && (
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-500">
            {eyebrow}
          </p>
        )}
        <h2 className="text-xl font-semibold text-primary-700">{title}</h2>
        {kicker && (
          <p className="max-w-3xl text-sm text-muted-500">{kicker}</p>
        )}
      </div>
      <div className="text-sm leading-relaxed text-slate-700">{children}</div>
    </section>
  );
}

