import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import Link from "next/link";
import Script from "next/script";
import "./globals.css";
import { LangProvider } from "@/components/LangProvider";
import LangToggle from "@/components/LangToggle";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

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
        {GA_ID && (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
            <Script id="ga4-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}');
              `}
            </Script>
          </>
        )}
        <LangProvider>
          {/* Nav */}
          <nav
            className="sticky top-0 z-50 border-b"
            style={{
              borderColor: "#1a2129",
              backgroundColor: "rgba(0,0,0,0.85)",
              backdropFilter: "blur(8px)",
            }}
          >
            <div className="max-w-7xl mx-auto px-6 h-10 flex items-center justify-between">
              <div className="flex items-center gap-5">
                <Link href="/" className="font-mono text-xs tracking-[0.3em] transition-colors hover:text-[#eaf1f8]" style={{ color: "#7c97b0" }}>
                  HOME
                </Link>
                <Link href="/blog" className="font-mono text-xs tracking-[0.3em] transition-colors hover:text-[#eaf1f8]" style={{ color: "#7c97b0" }}>
                  BLOG
                </Link>
              </div>
              <div className="flex items-center gap-4">
                <span className="font-mono text-[10px] tracking-widest" style={{ color: "#3a4b5c" }}>
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
