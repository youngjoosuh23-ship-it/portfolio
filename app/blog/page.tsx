import Link from "next/link";
import { getAllPosts } from "@/lib/blog";

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <main className="px-6 py-8 max-w-3xl mx-auto w-full min-h-[calc(100vh-2.5rem)] flex flex-col gap-8">
      <header className="flex flex-col gap-2">
        <h1
          className="font-mono text-3xl md:text-4xl font-bold tracking-tight"
          style={{ color: "#e8ffe8" }}
        >
          Blog
        </h1>
        <p className="font-mono text-xs md:text-sm tracking-wide" style={{ color: "#5a9a5a" }}>
          Notes on building things.
        </p>
      </header>

      <div className="flex flex-col gap-4">
        {posts.length === 0 ? (
          <div
            className="font-mono text-[11px] py-8 text-center border border-dashed rounded-2xl"
            style={{ color: "#1a4a1a", borderColor: "#001a00" }}
          >
            no posts yet
          </div>
        ) : (
          posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block rounded-xl border p-5 transition-colors hover:bg-[#00ff4108]"
              style={{ borderColor: "#1a3a1a" }}
            >
              <div className="flex items-center justify-between mb-1">
                <h2 className="font-mono text-base font-bold" style={{ color: "#e8ffe8" }}>
                  {post.title}
                </h2>
                <span className="font-mono text-[10px] tracking-widest" style={{ color: "#3a7a3a" }}>
                  {post.date}
                </span>
              </div>
              {post.summary && (
                <p className="font-mono text-[12px] leading-relaxed" style={{ color: "#3a7a3a" }}>
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
