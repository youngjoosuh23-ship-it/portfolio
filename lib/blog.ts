import fs from "fs";
import path from "path";

const BLOG_DIR = path.join(process.cwd(), "content/blog");

export type Lang = "ko" | "en";

export type PostMetadata = {
  title: string;
  date: string;
  summary?: string;
  image?: string;
};

export type Post = PostMetadata & { slug: string };

export type BilingualPost = {
  slug: string;
  date: string;
  image?: string;
  ko: { title: string; summary?: string };
  en: { title: string; summary?: string };
};

export function getPostSlugs(): string[] {
  return fs
    .readdirSync(BLOG_DIR)
    .filter((file) => file.endsWith(".mdx") && !file.endsWith(".en.mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

export function hasTranslation(slug: string): boolean {
  return fs.existsSync(path.join(BLOG_DIR, `${slug}.en.mdx`));
}

export async function importPost(slug: string, lang: Lang) {
  const file = lang === "en" && hasTranslation(slug) ? `${slug}.en` : slug;
  return (await import(`@/content/blog/${file}.mdx`)) as {
    default: React.ComponentType;
    metadata: PostMetadata;
  };
}

export async function getAllPosts(lang: Lang): Promise<Post[]> {
  const slugs = getPostSlugs();
  const posts = await Promise.all(
    slugs.map(async (slug) => {
      const { metadata } = await importPost(slug, lang);
      return { ...metadata, slug };
    })
  );
  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getAllPostsBilingual(): Promise<BilingualPost[]> {
  const slugs = getPostSlugs();
  const posts = await Promise.all(
    slugs.map(async (slug) => {
      const [ko, en] = await Promise.all([importPost(slug, "ko"), importPost(slug, "en")]);
      return {
        slug,
        date: ko.metadata.date,
        image: ko.metadata.image,
        ko: { title: ko.metadata.title, summary: ko.metadata.summary },
        en: { title: en.metadata.title, summary: en.metadata.summary },
      };
    })
  );
  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}
