import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import { LangProvider } from "@/components/LangProvider";
import LangToggle from "@/components/LangToggle";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Youngjoo Suh",
  description: "Building ideas around people, experiences, and AI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${geistMono.variable} h-full`}>
      <body className="min-h-full flex flex-col">
        <LangProvider>
          {/* Nav */}
          <nav
            className="sticky top-0 z-50 border-b"
            style={{
              borderColor: "#003300",
              backgroundColor: "rgba(0,0,0,0.85)",
              backdropFilter: "blur(8px)",
            }}
          >
            <div className="max-w-7xl mx-auto px-6 h-10 flex items-center justify-between">
              <div className="flex items-center gap-5">
                <Link href="/" className="font-mono text-xs tracking-[0.3em] transition-colors hover:text-[#e8ffe8]" style={{ color: "#5a9a5a" }}>
                  HOME
                </Link>
                <Link href="/blog" className="font-mono text-xs tracking-[0.3em] transition-colors hover:text-[#e8ffe8]" style={{ color: "#5a9a5a" }}>
                  BLOG
                </Link>
              </div>
              <div className="flex items-center gap-4">
                <span className="font-mono text-[10px] tracking-widest" style={{ color: "#2a4a2a" }}>
                  THE_ARCHIVE — v1.0
                </span>
                <LangToggle />
              </div>
            </div>
          </nav>

          <div className="relative z-10 flex-1 flex flex-col">
            {children}
          </div>
        </LangProvider>
      </body>
    </html>
  );
}
