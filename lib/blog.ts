import fs from "fs";
import path from "path";

const BLOG_DIR = path.join(process.cwd(), "content/blog");

export type PostMetadata = {
  title: string;
  date: string;
  summary?: string;
};

export type Post = PostMetadata & { slug: string };

export function getPostSlugs(): string[] {
  return fs
    .readdirSync(BLOG_DIR)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

export async function getAllPosts(): Promise<Post[]> {
  const slugs = getPostSlugs();
  const posts = await Promise.all(
    slugs.map(async (slug) => {
      const { metadata } = (await import(`@/content/blog/${slug}.mdx`)) as {
        metadata: PostMetadata;
      };
      return { ...metadata, slug };
    })
  );
  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}
