"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Overview" },
  { href: "/sasf", label: "SASF" },
  { href: "/ai-iam", label: "AI-IAM" },
  { href: "/eppe", label: "EPPE" },
  { href: "/git", label: "GiT" },
  { href: "/banking-agent-studio", label: "Banking Agent Studio" },
  { href: "/ute", label: "UTE" },
  { href: "/watsonx-integration", label: "IBM watsonx", variant: "platform" },


];

export function SiteHeader() {
  const pathname = usePathname();
  return (
    <header className="mb-4 flex items-center justify-between gap-6">
      <Link href="/" className="flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-primary-600 text-sm font-semibold text-white shadow-soft">
          AI
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-semibold tracking-wide text-primary-600">
            Infinite
          </span>
          <span className="text-xs text-slate-500">
            Secure AI Governance Suite
          </span>
        </div>
      </Link>
      <nav className="hidden items-center gap-3 rounded-full bg-white/70 px-3 py-1 text-xs font-medium text-slate-600 shadow-soft backdrop-blur md:flex">
        {navItems.map((item) => {
          const active = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded-full px-3 py-1 transition ${active ? "bg-primary-600 text-white shadow" : "hover:bg-slate-100"}`}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}

