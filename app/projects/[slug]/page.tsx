import { notFound } from "next/navigation";
import Link from "next/link";
import { getProject, projects } from "@/lib/projects";
import ProjectDetail from "@/components/ProjectDetail";
import LocalizedText from "@/components/LocalizedText";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) notFound();

  return (
    <main className="min-h-screen px-6 py-10 max-w-6xl mx-auto w-full">
      {/* Back nav */}
      <Link
        href="/"
        className="inline-flex items-center gap-2 font-mono text-xs transition-colors mb-10 hover:text-[#e8ffe8]"
        style={{ color: "#5a9a5a" }}
      >
        ← HOME
      </Link>

      {/* Project header */}
      <header className="mb-10">
        <div className="flex items-center gap-3 mb-3">
          {project.index && (
            <>
              <span className="font-mono text-[11px] tracking-wider" style={{ color: "#005500" }}>
                {project.index}
              </span>
              <span className="font-mono text-[11px]" style={{ color: "#003b00" }}>/</span>
            </>
          )}
          <span className="font-mono text-[11px]" style={{ color: "#005500" }}>{project.year}</span>
        </div>

        <h1 className="font-mono text-3xl md:text-4xl font-bold mb-2" style={{ color: "#e8ffe8" }}>
          {project.title}
        </h1>
        <p className="font-mono text-sm mb-5" style={{ color: "#1a6b1a" }}>
          <LocalizedText text={project.subtitle} />
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="font-mono text-[11px] rounded-sm px-2 py-0.5"
              style={{ color: "#005500", border: "1px solid #002800" }}
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-6 h-px" style={{ backgroundColor: "#002200" }} />
      </header>

      {/* Detail tabs */}
      <ProjectDetail project={project} />
    </main>
  );
}
