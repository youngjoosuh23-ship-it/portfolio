import { notFound } from "next/navigation";
import { getPostSlugs, importPost } from "@/lib/blog";
import LocalizedPost from "@/components/LocalizedPost";
import BackLink from "@/components/BackLink";

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

  const [{ default: PostKo, metadata: koMeta }, { default: PostEn, metadata: enMeta }] = await Promise.all([
    importPost(slug, "ko"),
    importPost(slug, "en"),
  ]);

  return (
    <main className="px-6 py-8 max-w-3xl mx-auto w-full min-h-[calc(100vh-2.5rem)] flex flex-col gap-8">
      <BackLink fallbackHref="/blog" label="← BACK" />

      <LocalizedPost
        koTitle={koMeta.title}
        enTitle={enMeta.title}
        date={koMeta.date}
        image={koMeta.image}
        ko={<PostKo />}
        en={<PostEn />}
      />
    </main>
  );
}
