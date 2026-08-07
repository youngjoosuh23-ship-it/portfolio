import { getAllPostsBilingual } from "@/lib/blog";
import BlogList from "@/components/BlogList";

export default async function BlogPage() {
  const posts = await getAllPostsBilingual();
  return <BlogList posts={posts} />;
}
