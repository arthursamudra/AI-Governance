import "./globals.css";
import type { ReactNode } from "react";
import { SiteHeader } from "../components/site-header";
import { Inter, IBM_Plex_Sans } from "next/font/google";

export const metadata = {
  title: "Infinite AI Governance Suite",
  description:
    "SASF, AI-IAM, EPPE, Governance-in-Training, Banking Agent Studio, and UTE – a cohesive control plane for safe, explainable AI."
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
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



export const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
});

export const ibm = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-ibm",
});




