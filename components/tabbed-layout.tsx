"use client";
import type { ReactNode } from "react";
import { useState } from "react";

export type TabDef = {
  id: string;
  label: string;
  content: ReactNode;
};

export function TabbedLayout({ tabs }: { tabs: TabDef[] }) {
  const [active, setActive] = useState(tabs[0]?.id);
  return (
    <div className="mt-4">
      <div className="inline-flex rounded-full bg-slate-100 p-1 text-xs font-medium text-muted-500">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActive(tab.id)}
            className={`rounded-full px-3 py-1 transition ${tab.id === active ? "bg-white text-primary-700 shadow-soft" : "hover:bg-slate-200"}`}
            type="button"
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="mt-5 rounded-2xl border border-slate-100 bg-white/90 p-5 text-sm leading-relaxed text-slate-700 shadow-soft">
        {tabs.find((t) => t.id === active)?.content}
      </div>
    </div>
  );
}

