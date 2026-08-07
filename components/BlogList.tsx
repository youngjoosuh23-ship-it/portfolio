"use client";

import Link from "next/link";
import { useLang } from "@/components/LangProvider";
import type { BilingualPost } from "@/lib/blog";

const t = {
  title: { ko: "Blog", en: "Blog" },
  tagline: { ko: "무언가를 만드는 것에 대한 기록.", en: "Notes on building things." },
  empty: { ko: "아직 글이 없습니다", en: "no posts yet" },
};

export default function BlogList({ posts }: { posts: BilingualPost[] }) {
  const { lang } = useLang();

  return (
    <main className="px-6 py-8 max-w-5xl mx-auto w-full min-h-[calc(100vh-2.5rem)] flex flex-col gap-8">
      <header className="flex flex-col gap-2">
        <h1
          className="font-mono text-3xl md:text-4xl font-bold tracking-tight"
          style={{ color: "#eaf1f8" }}
        >
          {t.title[lang]}
        </h1>
        <p className="font-mono text-xs md:text-sm tracking-wide" style={{ color: "#7c97b0" }}>
          {t.tagline[lang]}
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {posts.length === 0 ? (
          <div
            className="font-mono text-[11px] py-8 text-center border border-dashed rounded-2xl"
            style={{ color: "#2c3947", borderColor: "#11161b" }}
          >
            {t.empty[lang]}
          </div>
        ) : (
          posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block rounded-xl border p-5 transition-colors hover:bg-[#ff634708]"
              style={{ borderColor: "#1a2129" }}
            >
              <h2 className="font-mono text-base font-bold mb-1" style={{ color: "#eaf1f8" }}>
                {post[lang].title}
              </h2>
              <span className="font-mono text-[10px] tracking-widest mb-2 block" style={{ color: "#51687d" }}>
                {post.date}
              </span>
              {post[lang].summary && (
                <p className="font-mono text-[12px] leading-relaxed" style={{ color: "#51687d" }}>
                  {post[lang].summary}
                </p>
              )}
            </Link>
          ))
        )}
      </div>
    </main>
  );
}
