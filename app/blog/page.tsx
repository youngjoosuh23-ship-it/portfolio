import { getAllPostsBilingual } from "@/lib/blog";
import BlogList from "@/components/BlogList";

export default async function BlogPage() {
  const posts = (await getAllPostsBilingual()).filter((p) => p.category !== "briefing");
  return (
    <BlogList
      posts={posts}
      link={{ href: "/briefing", label: { ko: "Daily Briefing 보기 →", en: "View Daily Briefing →" } }}
    />
  );
}
