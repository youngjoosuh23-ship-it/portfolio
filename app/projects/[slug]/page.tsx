import { notFound } from "next/navigation";
import Link from "next/link";
import { getProject, hasReport, projects } from "@/lib/projects";
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

  let report: React.ReactNode | undefined;
  if (hasReport(slug)) {
    const { default: ReportContent } = await import(`@/content/reports/${slug}.mdx`);
    report = <ReportContent />;
  }

  return (
    <main className="min-h-screen px-6 py-10 max-w-6xl mx-auto w-full">
      {/* Back nav */}
      <Link
        href="/"
        className="inline-flex items-center gap-2 font-mono text-xs transition-colors mb-10 hover:text-[#eaf1f8]"
        style={{ color: "#7c97b0" }}
      >
        ← HOME
      </Link>

      {/* Project header */}
      <header className="mb-10">
        <div className="flex items-center gap-3 mb-3">
          {project.index && (
            <>
              <span className="font-mono text-[11px] tracking-wider" style={{ color: "#6e8cad" }}>
                {project.index}
              </span>
              <span className="font-mono text-[11px]" style={{ color: "#3a4b5c" }}>/</span>
            </>
          )}
          <span className="font-mono text-[11px]" style={{ color: "#6e8cad" }}>{project.year}</span>
        </div>

        <h1 className="font-mono text-3xl md:text-4xl font-bold mb-2" style={{ color: "#eaf1f8" }}>
          {project.title}
        </h1>
        <p className="font-mono text-sm mb-5" style={{ color: "#4d6f8a" }}>
          <LocalizedText text={project.subtitle} />
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="font-mono text-[11px] rounded-sm px-2 py-0.5"
              style={{ color: "#6e8cad", border: "1px solid #1a2129" }}
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-6 h-px" style={{ backgroundColor: "#11161b" }} />
      </header>

      {/* Detail tabs */}
      <ProjectDetail project={project} report={report} />
    </main>
  );
}
