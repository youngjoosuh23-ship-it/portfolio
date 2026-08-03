import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import Link from "next/link";
import Script from "next/script";
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
      <head>
        <Script
          id="gtm-script"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-KGGNG7SC');`,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KGGNG7SC"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
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
