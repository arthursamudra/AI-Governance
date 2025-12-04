import Link from "next/link";
import type { ReactNode } from "react";

export function ConceptCard({
  title,
  tagline,
  href,
  children
}: {
  title: string;
  tagline: string;
  href: string;
  children: ReactNode;
}) {
  return (
    <Link
      href={href}
      className="flex flex-col rounded-2xl bg-surface/95 p-5 text-left shadow-soft transition hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-accent-500">
        Capability
      </div>
      <h3 className="mb-1 text-base font-semibold text-primary-700">
        {title}
      </h3>
      <p className="mb-3 text-xs text-muted-500">{tagline}</p>
      <div className="mt-auto text-xs text-slate-600">{children}</div>
      <span className="mt-4 text-xs font-semibold text-primary-500">
        Explore {title} →
      </span>
    </Link>
  );
}

