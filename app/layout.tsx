import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "THE ARCHIVE",
  description: "Building ideas around people, content, and AI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${geistMono.variable} h-full`}>
      <body className="h-full flex flex-col">
        {/* Nav */}
        <nav
          className="shrink-0 border-b"
          style={{
            borderColor: "#003300",
            backgroundColor: "rgba(0,0,0,0.85)",
            backdropFilter: "blur(8px)",
          }}
        >
          <div className="max-w-7xl mx-auto px-6 h-10 flex items-center justify-between">
            <Link href="/" className="font-mono text-xs tracking-[0.3em] transition-colors hover:text-[#e8ffe8]" style={{ color: "#5a9a5a" }}>
              HOME
            </Link>
            <span className="font-mono text-[10px] tracking-widest" style={{ color: "#2a4a2a" }}>
              THE_ARCHIVE — v1.0
            </span>
          </div>
        </nav>

        <div className="relative z-10 flex-1 flex flex-col min-h-0">
          {children}
        </div>
      </body>
    </html>
  );
}
