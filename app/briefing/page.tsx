import { getAllPostsBilingual } from "@/lib/blog";
import BlogList from "@/components/BlogList";

export default async function BriefingPage() {
  const posts = (await getAllPostsBilingual()).filter((p) => p.category === "briefing");
  return (
    <BlogList
      posts={posts}
      title={{ ko: "Daily Briefing", en: "Daily Briefing" }}
      tagline={{
        ko: "RA·중화권·AI 헬스케어·에이전트 AI 분야의 매일 뉴스 브리핑",
        en: "Daily news briefing on RA, Greater China, AI healthcare, and agentic AI",
      }}
    />
  );
}
