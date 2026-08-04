import Link from "next/link";
import { getAllPosts } from "@/lib/blog";

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <main className="px-6 py-8 max-w-5xl mx-auto w-full min-h-[calc(100vh-2.5rem)] flex flex-col gap-8">
      <header className="flex flex-col gap-2">
        <h1
          className="font-mono text-3xl md:text-4xl font-bold tracking-tight"
          style={{ color: "#eaf1f8" }}
        >
          Blog
        </h1>
        <p className="font-mono text-xs md:text-sm tracking-wide" style={{ color: "#7c97b0" }}>
          Notes on building things.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {posts.length === 0 ? (
          <div
            className="font-mono text-[11px] py-8 text-center border border-dashed rounded-2xl"
            style={{ color: "#2c3947", borderColor: "#11161b" }}
          >
            no posts yet
          </div>
        ) : (
          posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block rounded-xl border p-5 transition-colors hover:bg-[#ff634708]"
              style={{ borderColor: "#1a2129" }}
            >
              <div className="flex items-center justify-between mb-1">
                <h2 className="font-mono text-base font-bold" style={{ color: "#eaf1f8" }}>
                  {post.title}
                </h2>
                <span className="font-mono text-[10px] tracking-widest" style={{ color: "#51687d" }}>
                  {post.date}
                </span>
              </div>
              {post.summary && (
                <p className="font-mono text-[12px] leading-relaxed" style={{ color: "#51687d" }}>
                  {post.summary}
                </p>
              )}
            </Link>
          ))
        )}
      </div>
    </main>
  );
}
