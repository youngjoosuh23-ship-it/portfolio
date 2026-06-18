"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import type { Project } from "@/lib/projects";

const typeColor: Record<Project["type"], string> = {
  ai: "#00ff41",
  leadership: "#39d0ff",
  work: "#ffe400",
};

const typeLabel: Record<Project["type"], string> = {
  ai: "AI",
  leadership: "LEADERSHIP",
  work: "WORK",
};

const sectionTitle: Record<Project["type"], string> = {
  ai: "AI",
  leadership: "Leadership & Planning",
  work: "Work Experience",
};

const sectionOrder: Project["type"][] = ["ai", "leadership", "work"];

const spring = { type: "spring", stiffness: 380, damping: 22 } as const;

// ── single card ──────────────────────────────────────────────
function ProjectCard({ project }: { project: Project }) {
  const color = typeColor[project.type];

  return (
    <motion.div
      whileHover={{ scale: 1.035, y: -6 }}
      whileTap={{ scale: 0.97 }}
      transition={spring}
      style={{ position: "relative", zIndex: 1 }}
    >
      <Link href={`/projects/${project.slug}`} className="block">
        <motion.div
          className="relative border rounded-2xl overflow-hidden flex flex-col"
          style={{
            backgroundColor: "rgba(0,18,0,0.55)",
            borderColor: "#002800",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
          }}
          whileHover={{
            backgroundColor: "rgba(0,28,0,0.75)",
            borderColor: color + "55",
            boxShadow: `0 16px 40px rgba(0,0,0,0.5), 0 0 0 0.5px ${color}33`,
          }}
          transition={spring}
        >
          {/* image preview */}
          {project.image && (
            <div className="relative w-full overflow-hidden" style={{ height: 130 }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover object-top"
                style={{ opacity: 0.88 }}
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to bottom, transparent 40%, rgba(0,18,0,0.95) 100%)",
                }}
              />
            </div>
          )}

          <div className="p-4 flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] tracking-widest" style={{ color: "#3a7a3a" }}>
                {project.index ?? ""}
              </span>
              <span className="font-mono text-[10px]" style={{ color: "#3a7a3a" }}>
                {project.year}
              </span>
            </div>

            <h3 className="font-mono text-sm font-bold leading-snug" style={{ color: "#ccffcc" }}>
              {project.title}
            </h3>

            <p className="font-mono text-[11px] leading-relaxed" style={{ color: "#3a7a3a" }}>
              {project.description}
            </p>

            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-[10px] px-1.5 py-0.5 rounded-md"
                  style={{
                    color: "#3a7a3a",
                    border: "1px solid #002800",
                    backgroundColor: "rgba(0,20,0,0.4)",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex justify-end">
              <span className="font-mono text-xs" style={{ color }}>→</span>
            </div>
          </div>

          <motion.div
            className="absolute inset-x-0 top-0 h-px"
            style={{ background: `linear-gradient(90deg, transparent, ${color}55, transparent)` }}
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
          />
        </motion.div>
      </Link>
    </motion.div>
  );
}

// ── folder stack (multiple projects) ─────────────────────────
const PEEK = 10;          // px peeking below top card when closed
const EST_H = 180;        // estimated card height for closed-state overlap
const OPEN_GAP = 12;      // gap between cards when open

function FolderStack({ projects, color }: { projects: Project[]; color: string }) {
  const [open, setOpen] = useState(false);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [heights, setHeights] = useState<number[]>([]);

  useEffect(() => {
    const measure = () =>
      setHeights(cardRefs.current.map((el) => el?.offsetHeight ?? EST_H));
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [projects]);

  if (projects.length === 1) {
    return <ProjectCard project={projects[0]} />;
  }

  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {/* folder label */}
      <motion.div
        className="flex items-center gap-1.5 mb-2 pl-1"
        animate={{ opacity: open ? 0 : 1 }}
        transition={{ duration: 0.15 }}
        style={{ pointerEvents: "none" }}
      >
        <span className="font-mono text-[10px]" style={{ color: "#3a7a3a" }}>
          📁
        </span>
      </motion.div>

      {/* stack */}
      <div style={{ position: "relative" }}>
        {projects.map((project, i) => {
          const prevHeight = heights[i - 1] ?? EST_H;
          return (
            <motion.div
              key={project.slug}
              ref={(el) => {
                cardRefs.current[i] = el;
              }}
              animate={
                open
                  ? { marginTop: i > 0 ? OPEN_GAP : 0, scale: 1, opacity: 1, zIndex: i }
                  : {
                      marginTop: i > 0 ? -(prevHeight - PEEK) : 0,
                      scale: 1 - i * 0.03,
                      opacity: i === 0 ? 1 : 0.6,
                      zIndex: projects.length - i,
                    }
              }
              transition={spring}
              style={{ position: "relative", zIndex: projects.length - i }}
            >
              <ProjectCard project={project} />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

// ── drag-to-scroll wrapper ────────────────────────────────────
function DragScrollArea({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const dragState = useRef({ dragging: false, startY: 0, startScroll: 0, moved: false });

  const onMouseDown = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    dragState.current = { dragging: true, startY: e.clientY, startScroll: el.scrollTop, moved: false };
  };

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      const state = dragState.current;
      const el = ref.current;
      if (!state.dragging || !el) return;
      const delta = e.clientY - state.startY;
      if (Math.abs(delta) > 4) state.moved = true;
      el.scrollTop = state.startScroll - delta;
    };
    const onMouseUp = () => {
      dragState.current.dragging = false;
    };
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };
  }, []);

  const onClickCapture = (e: React.MouseEvent) => {
    if (dragState.current.moved) {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  return (
    <div
      ref={ref}
      onMouseDown={onMouseDown}
      onClickCapture={onClickCapture}
      className="h-full overflow-y-auto cursor-grab active:cursor-grabbing [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:bg-[#1a3a1a] [&::-webkit-scrollbar-thumb]:rounded-full"
    >
      {children}
    </div>
  );
}

// ── grid ─────────────────────────────────────────────────────
export default function ProjectGrid({ projects }: { projects: Project[] }) {
  const grouped = sectionOrder.reduce<Record<Project["type"], Project[]>>(
    (acc, type) => {
      acc[type] = projects.filter((p) => p.type === type);
      return acc;
    },
    { ai: [], leadership: [], work: [] }
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-full">
      {sectionOrder.map((type, colIdx) => {
        const group = grouped[type];
        const color = typeColor[type];

        return (
          <motion.div
            key={type}
            className="flex flex-col gap-4 min-h-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: colIdx * 0.1, ease: "easeOut" }}
          >
            {/* section header */}
            <div className="flex flex-col gap-1 shrink-0">
              <div className="flex items-center gap-2">
                <span
                  className="font-mono text-[10px] tracking-[0.25em] px-2 py-0.5 rounded-sm"
                  style={{ color, backgroundColor: color + "14", border: `1px solid ${color}33` }}
                >
                  {typeLabel[type]}
                </span>
                <span className="font-mono text-[10px]" style={{ color: "#2a5a2a" }}>
                  {group.length}
                </span>
              </div>
              <h2 className="font-mono text-xs tracking-widest" style={{ color: "#5a9a5a" }}>
                {sectionTitle[type]}
              </h2>
              <div className="h-px w-full" style={{ backgroundColor: color + "33" }} />
            </div>

            {/* folder or empty */}
            {group.length === 0 ? (
              <div
                className="font-mono text-[11px] py-8 text-center border border-dashed rounded-2xl"
                style={{ color: "#1a4a1a", borderColor: "#001a00" }}
              >
                // empty
              </div>
            ) : group.length >= 3 ? (
              <div className="flex-1 min-h-0">
                <DragScrollArea>
                  <FolderStack projects={group} color={color} />
                </DragScrollArea>
              </div>
            ) : (
              <div className="flex-1 min-h-0 overflow-visible">
                <FolderStack projects={group} color={color} />
              </div>
            )}
          </motion.div>
        );
      })}
    </div>
  );
}
