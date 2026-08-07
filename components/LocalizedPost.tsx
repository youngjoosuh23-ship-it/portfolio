"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import { useLang } from "@/components/LangProvider";

export default function LocalizedPost({
  koTitle,
  enTitle,
  date,
  image,
  ko,
  en,
}: {
  koTitle: string;
  enTitle: string;
  date: string;
  image?: string;
  ko: ReactNode;
  en: ReactNode;
}) {
  const { lang } = useLang();
  const title = lang === "en" ? enTitle : koTitle;

  return (
    <div className="flex flex-col gap-8">
      {image ? (
        <div className="relative w-full overflow-hidden rounded-2xl" style={{ height: 250 }}>
          <Image
            src={image}
            alt={title}
            fill
            sizes="768px"
            priority
            className="object-cover"
            style={{ objectPosition: "50% 65%" }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, rgba(10,10,11,0.95) 0%, rgba(10,10,11,0.35) 55%, transparent 100%)",
            }}
          />
          <div className="absolute inset-x-0 bottom-0 p-6">
            <h1
              className="font-mono text-3xl md:text-4xl font-bold tracking-tight mb-2"
              style={{ color: "#eaf1f8" }}
            >
              {title}
            </h1>
            <span className="font-mono text-[11px] tracking-widest" style={{ color: "#cddbe8" }}>
              {date}
            </span>
          </div>
        </div>
      ) : (
        <header>
          <h1
            className="font-mono text-3xl md:text-4xl font-bold tracking-tight mb-2"
            style={{ color: "#eaf1f8" }}
          >
            {title}
          </h1>
          <span className="font-mono text-[11px] tracking-widest" style={{ color: "#51687d" }}>
            {date}
          </span>
        </header>
      )}

      <article className="[&_img]:max-w-full [&_img]:h-auto [&_img]:box-border [&_img]:rounded-xl [&_img]:border [&_img]:border-[#1a2129] [&_img]:bg-[#0c0c0e] [&_img]:p-2 [&_img]:shadow-[0_2px_8px_rgba(0,0,0,0.3)]">
        {lang === "en" ? en : ko}
      </article>
    </div>
  );
}
