import { projects } from "@/lib/projects";
import { getAllPostsBilingual } from "@/lib/blog";
import ProjectGrid from "@/components/ProjectGrid";
import RotatingWord from "@/components/RotatingWord";

export default async function Home() {
  const posts = await getAllPostsBilingual();

  return (
    <main className="px-6 py-8 max-w-7xl mx-auto w-full min-h-[calc(100vh-2.5rem)] flex flex-col gap-8">
      {/* Header */}
      <header className="flex flex-col gap-4 shrink-0">
        <div className="flex flex-col gap-3">
          <h1
            className="font-mono text-4xl md:text-5xl font-bold tracking-tight"
            style={{ color: "#eaf1f8" }}
          >
            Youngjoo Suh
          </h1>
          <p className="font-mono text-xs md:text-sm tracking-wide" style={{ color: "#7c97b0" }}>
            Building ideas around <RotatingWord />.
          </p>

          {/* Contact */}
          <div className="font-mono text-[11px] flex flex-row flex-wrap gap-x-6 gap-y-1 mt-1" style={{ color: "#7c97b0" }}>
            <a href="tel:+821097881938" className="transition-colors hover:text-[#eaf1f8]">
              +82 010-9788-1938
            </a>
            <a
              href="https://www.linkedin.com/in/youngjoosuh23"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-[#eaf1f8]"
            >
              linkedin.com/in/youngjoosuh23
            </a>
            <a href="mailto:youngjoosuh23@gmail.com" className="transition-colors hover:text-[#eaf1f8]">
              youngjoosuh23@gmail.com
            </a>
          </div>

          {/* Resume */}
          <div className="flex items-center gap-2 mt-1">
            <span className="font-mono text-[10px] tracking-widest" style={{ color: "#51687d" }}>
              RESUME
            </span>
            <a
              href="/resume/youngjoo-suh-resume-en.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs px-3 py-1.5 rounded-md border transition-colors hover:bg-[#ff634714]"
              style={{ borderColor: "#ff634755", color: "#ff6347" }}
            >
              EN ↓
            </a>
            <a
              href="/resume/youngjoo-suh-resume-kr.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs px-3 py-1.5 rounded-md border transition-colors hover:bg-[#ff634714]"
              style={{ borderColor: "#ff634755", color: "#ff6347" }}
            >
              KR ↓
            </a>
          </div>
        </div>
      </header>

      {/* Grid */}
      <div className="flex-1 min-h-0">
        <ProjectGrid projects={projects} posts={posts} />
      </div>

      {/* Footer */}
      <footer
        className="pt-6 flex items-center justify-between shrink-0"
        style={{ borderTop: "1px solid #1a2129" }}
      >
        <span className="font-mono text-[10px] tracking-widest" style={{ color: "#3a4b5c" }}>
          Youngjoo Suh
        </span>
        <span className="font-mono text-[10px]" style={{ color: "#3a4b5c" }}>
          {new Date().getFullYear()}
        </span>
      </footer>
    </main>
  );
}
