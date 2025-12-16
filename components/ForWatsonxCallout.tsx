import React from "react";
import Link from "next/link";

type ForWatsonxCalloutProps = {
  title?: string;
  description: string;
  bullets: string[];
  linkHref?: string;
  linkLabel?: string;
  className?: string;
};

export function ForWatsonxCallout({
  title = "How this works with IBM watsonx",
  description,
  bullets,
  linkHref = "/watsonx-integration",
  linkLabel = "See watsonx integration blueprint",
  className = "",
}: ForWatsonxCalloutProps) {
  return (
    <section
      className={`mt-12 rounded-2xl border border-sky-100 bg-gradient-to-r from-sky-50 via-white to-white shadow-sm transition-all duration-200 ease-out hover:-translate-y-0.5 hover:border-sky-200 hover:shadow-md ${className}`}
    >
      <div className="flex flex-col gap-4 px-5 py-6 sm:px-6">
        {/* Header row */}
        <div className="flex items-center justify-between gap-3">
          <div>
            {/* Chip */}
            <span className="inline-flex items-center gap-2 rounded-full bg-sky-100 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-sky-700">
              For watsonx
            </span>

            {/* Title */}
            <h3 className="mt-2 text-sm font-semibold text-slate-900">
              {title}
            </h3>
          </div>

          {/* Badge */}
          <span className="hidden rounded-full border border-sky-100 bg-white px-3 py-1 text-[11px] font-medium text-slate-500 sm:inline">
            Platform lens
          </span>
        </div>

        {/* Description */}
        <p className="text-sm leading-relaxed text-slate-700">
          {description}
        </p>

        {/* Bullets */}
        {bullets.length > 0 && (
          <ul className="space-y-2 text-xs leading-relaxed text-slate-700">
            {bullets.map((item, idx) => (
              <li key={idx} className="flex gap-2">
                <span className="mt-[6px] h-1.5 w-1.5 flex-none rounded-full bg-sky-500" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Link */}
        {linkHref && linkLabel && (
          <div className="pt-1">
            <Link
              href={linkHref}
              className="inline-flex items-center gap-1 text-xs font-medium text-sky-700 hover:text-sky-900"
            >
              {linkLabel}
              <span aria-hidden="true">↗</span>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
