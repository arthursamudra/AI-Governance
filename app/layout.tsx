import "./globals.css";
import type { ReactNode } from "react";
import { SiteHeader } from "../components/site-header";
import { inter, ibm } from "./fonts"; // ✅ Import fonts from separate file

export const metadata = {
  title: "Infinite AI Governance Suite",
  description:
    "SASF, AI-IAM, EPPE, Governance-in-Training, Banking Agent Studio, and UTE – a cohesive control plane for safe, explainable AI."
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${ibm.variable}`}>
      <body className="min-h-screen bg-background text-slate-900">
        <div className="min-h-screen">
          <div className="mx-auto max-w-6xl px-4 pb-12 pt-6">
            <SiteHeader />
            <main className="mt-6">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
