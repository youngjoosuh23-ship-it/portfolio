import { projects } from "@/lib/projects";
import ProjectGrid from "@/components/ProjectGrid";

export default function Home() {
  return (
    <main className="px-6 py-8 max-w-7xl mx-auto w-full h-full flex flex-col gap-8 min-h-0">
      {/* Header */}
      <header className="flex flex-col gap-4 shrink-0">
        <div className="flex flex-col gap-3">
          <h1
            className="font-mono text-4xl md:text-5xl font-bold tracking-tight"
            style={{ color: "#e8ffe8" }}
          >
            THE ARCHIVE
          </h1>
          <p className="font-mono text-xs md:text-sm tracking-wide" style={{ color: "#5a9a5a" }}>
            Building ideas around people, content, and AI.
          </p>

          {/* Contact */}
          <div className="font-mono text-[11px] flex flex-row flex-wrap gap-x-6 gap-y-1 mt-1" style={{ color: "#5a9a5a" }}>
            <a href="tel:+821097881938" className="transition-colors hover:text-[#e8ffe8]">
              +82 010-9788-1938
            </a>
            <a
              href="https://www.linkedin.com/in/youngjoosuh23"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-[#e8ffe8]"
            >
              linkedin.com/in/youngjoosuh23
            </a>
            <a href="mailto:youngjoosuh23@gmail.com" className="transition-colors hover:text-[#e8ffe8]">
              youngjoosuh23@gmail.com
            </a>
          </div>

          {/* Resume */}
          <div className="flex items-center gap-2 mt-1">
            <span className="font-mono text-[10px] tracking-widest" style={{ color: "#3a7a3a" }}>
              RESUME
            </span>
            <a
              href="/resume/youngjoo-suh-resume-en.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs px-3 py-1.5 rounded-md border transition-colors hover:bg-[#00ff4114]"
              style={{ borderColor: "#00ff4155", color: "#00ff41" }}
            >
              EN ↓
            </a>
            <a
              href="/resume/youngjoo-suh-resume-kr.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs px-3 py-1.5 rounded-md border transition-colors hover:bg-[#00ff4114]"
              style={{ borderColor: "#00ff4155", color: "#00ff41" }}
            >
              KR ↓
            </a>
          </div>
        </div>
      </header>

      {/* Grid */}
      <div className="flex-1 min-h-0">
        <ProjectGrid projects={projects} />
      </div>

      {/* Footer */}
      <footer
        className="pt-6 flex items-center justify-between shrink-0"
        style={{ borderTop: "1px solid #1a3a1a" }}
      >
        <span className="font-mono text-[10px] tracking-widest" style={{ color: "#2a5a2a" }}>
          THE ARCHIVE
        </span>
        <span className="font-mono text-[10px]" style={{ color: "#2a5a2a" }}>
          {new Date().getFullYear()}
        </span>
      </footer>
    </main>
  );
}
