import { notFound } from "next/navigation";
import Link from "next/link";
import { getPostSlugs } from "@/lib/blog";
import type { PostMetadata } from "@/lib/blog";

export function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

export const dynamicParams = false;

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  if (!getPostSlugs().includes(slug)) {
    notFound();
  }

  const { default: Post, metadata } = (await import(`@/content/blog/${slug}.mdx`)) as {
    default: React.ComponentType;
    metadata: PostMetadata;
  };

  return (
    <main className="px-6 py-8 max-w-3xl mx-auto w-full min-h-[calc(100vh-2.5rem)] flex flex-col gap-8">
      <Link
        href="/blog"
        className="font-mono text-xs tracking-widest transition-colors hover:text-[#eaf1f8]"
        style={{ color: "#7c97b0" }}
      >
        ← BLOG
      </Link>

      <article>
        <header className="mb-8">
          <h1
            className="font-mono text-3xl md:text-4xl font-bold tracking-tight mb-2"
            style={{ color: "#eaf1f8" }}
          >
            {metadata.title}
          </h1>
          <span className="font-mono text-[11px] tracking-widest" style={{ color: "#51687d" }}>
            {metadata.date}
          </span>
        </header>

        <Post />
      </article>
    </main>
  );
}
