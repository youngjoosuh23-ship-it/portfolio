"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Fragment, useEffect, useRef } from "react";
import type { ReactNode } from "react";
import type { Project } from "@/lib/projects";
import type { BilingualPost } from "@/lib/blog";
import { useLang } from "@/components/LangProvider";

const typeColor: Record<Project["type"], string> = {
  ai: "#ff6347",
  work: "#b0c4de",
};

const typeLabel: Record<Project["type"], string> = {
  ai: "AI",
  work: "WORK",
};

const sectionTitle: Record<Project["type"], string> = {
  ai: "AI",
  work: "Work Experience",
};

const sectionOrder: Project["type"][] = ["ai", "work"];

const blogColor = "#4682b4";
const blogText = {
  label: { ko: "BLOG", en: "BLOG" },
  title: { ko: "최근 글", en: "Recent Posts" },
  viewAll: { ko: "블로그 전체 보기 →", en: "View all posts →" },
};

const spring = { type: "spring", stiffness: 380, damping: 22 } as const;

// ── single card ──────────────────────────────────────────────
function ProjectCard({ project }: { project: Project }) {
  const color = typeColor[project.type];
  const { lang } = useLang();

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
            backgroundColor: "rgba(12,12,14,0.55)",
            borderColor: "#1a2129",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
          }}
          whileHover={{
            backgroundColor: "rgba(18,18,20,0.75)",
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
                    "linear-gradient(to bottom, transparent 40%, rgba(10,10,11,0.95) 100%)",
                }}
              />
            </div>
          )}

          <div className="p-4 flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] tracking-widest" style={{ color: "#51687d" }}>
                {project.index ?? ""}
              </span>
              <span className="font-mono text-[10px]" style={{ color: "#51687d" }}>
                {project.year}
              </span>
            </div>

            <h3 className="font-mono text-sm font-bold leading-snug" style={{ color: "#dce8f2" }}>
              {project.title}
            </h3>

            <p className="font-mono text-[11px] leading-relaxed" style={{ color: "#51687d" }}>
              {project.description[lang]}
            </p>

            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-[10px] px-1.5 py-0.5 rounded-md"
                  style={{
                    color: "#51687d",
                    border: "1px solid #1a2129",
                    backgroundColor: "rgba(12,12,14,0.4)",
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

// ── blog preview card ──────────────────────────────────────────
function BlogPreviewCard({ post }: { post: BilingualPost }) {
  const { lang } = useLang();
  const { title, summary } = post[lang];

  return (
    <motion.div
      whileHover={{ scale: 1.035, y: -6 }}
      whileTap={{ scale: 0.97 }}
      transition={spring}
      style={{ position: "relative", zIndex: 1 }}
    >
      <Link href={`/blog/${post.slug}`} className="block">
        <motion.div
          className="relative border rounded-2xl overflow-hidden flex flex-col"
          style={{
            backgroundColor: "rgba(12,12,14,0.55)",
            borderColor: "#1a2129",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
          }}
          whileHover={{
            backgroundColor: "rgba(18,18,20,0.75)",
            borderColor: blogColor + "55",
            boxShadow: `0 16px 40px rgba(0,0,0,0.5), 0 0 0 0.5px ${blogColor}33`,
          }}
          transition={spring}
        >
          {post.image && (
            <div className="relative w-full overflow-hidden" style={{ height: 130 }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={post.image}
                alt={title}
                className="w-full h-full object-cover"
                style={{ opacity: 0.88, objectPosition: "50% 65%" }}
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to bottom, transparent 40%, rgba(10,10,11,0.95) 100%)",
                }}
              />
            </div>
          )}

          <div className="p-4 flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] tracking-widest" style={{ color: "#51687d" }}>
                {post.date}
              </span>
            </div>

            <h3 className="font-mono text-sm font-bold leading-snug" style={{ color: "#dce8f2" }}>
              {title}
            </h3>

            {summary && (
              <p className="font-mono text-[11px] leading-relaxed" style={{ color: "#51687d" }}>
                {summary}
              </p>
            )}

            <div className="flex justify-end">
              <span className="font-mono text-xs" style={{ color: blogColor }}>→</span>
            </div>
          </div>

          <motion.div
            className="absolute inset-x-0 top-0 h-px"
            style={{ background: `linear-gradient(90deg, transparent, ${blogColor}55, transparent)` }}
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
          />
        </motion.div>
      </Link>
    </motion.div>
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
      className="max-h-[65vh] overflow-y-auto cursor-grab active:cursor-grabbing [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:bg-[#1a2129] [&::-webkit-scrollbar-thumb]:rounded-full"
    >
      {children}
    </div>
  );
}

// ── grid ─────────────────────────────────────────────────────
export default function ProjectGrid({ projects, posts = [] }: { projects: Project[]; posts?: BilingualPost[] }) {
  const grouped = sectionOrder.reduce<Record<Project["type"], Project[]>>(
    (acc, type) => {
      acc[type] = projects.filter((p) => p.type === type);
      return acc;
    },
    { ai: [], work: [] }
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {sectionOrder.map((type, colIdx) => {
        const group = grouped[type];
        const color = typeColor[type];
        const section = (
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
                <span className="font-mono text-[10px]" style={{ color: "#3a4b5c" }}>
                  {group.length}
                </span>
              </div>
              <h2 className="font-mono text-xs tracking-widest" style={{ color: "#7c97b0" }}>
                {sectionTitle[type]}
              </h2>
              <div className="h-px w-full" style={{ backgroundColor: color + "33" }} />
            </div>

            {/* list or empty */}
            {group.length === 0 ? (
              <div
                className="font-mono text-[11px] py-8 text-center border border-dashed rounded-2xl"
                style={{ color: "#2c3947", borderColor: "#11161b" }}
              >
                // empty
              </div>
            ) : (
              <div className="flex-1 min-h-0">
                <DragScrollArea>
                  <div className="flex flex-col gap-3">
                    {group.map((project) => (
                      <ProjectCard key={project.slug} project={project} />
                    ))}
                  </div>
                </DragScrollArea>
              </div>
            )}
          </motion.div>
        );

        // insert the blog column between AI and Work
        if (type !== "ai") return section;
        return (
          <Fragment key="ai-blog">
            {section}
            <BlogColumn posts={posts} colIdx={colIdx + 1} />
          </Fragment>
        );
      })}
    </div>
  );
}

// ── blog column ─────────────────────────────────────────────
function BlogColumn({ posts, colIdx }: { posts: BilingualPost[]; colIdx: number }) {
  const { lang } = useLang();

  return (
    <motion.div
      className="flex flex-col gap-4 min-h-0"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: colIdx * 0.1, ease: "easeOut" }}
    >
      <div className="flex flex-col gap-1 shrink-0">
        <div className="flex items-center gap-2">
          <span
            className="font-mono text-[10px] tracking-[0.25em] px-2 py-0.5 rounded-sm"
            style={{ color: blogColor, backgroundColor: blogColor + "14", border: `1px solid ${blogColor}33` }}
          >
            {blogText.label[lang]}
          </span>
          <span className="font-mono text-[10px]" style={{ color: "#3a4b5c" }}>
            {posts.length}
          </span>
        </div>
        <h2 className="font-mono text-xs tracking-widest" style={{ color: "#7c97b0" }}>
          {blogText.title[lang]}
        </h2>
        <div className="h-px w-full" style={{ backgroundColor: blogColor + "33" }} />
      </div>

      {posts.length === 0 ? (
        <div
          className="font-mono text-[11px] py-8 text-center border border-dashed rounded-2xl"
          style={{ color: "#2c3947", borderColor: "#11161b" }}
        >
          // empty
        </div>
      ) : (
        <div className="flex-1 min-h-0 flex flex-col gap-3">
          <DragScrollArea>
            <div className="flex flex-col gap-3">
              {posts.map((post) => (
                <BlogPreviewCard key={post.slug} post={post} />
              ))}
            </div>
          </DragScrollArea>
          <Link
            href="/blog"
            className="font-mono text-[11px] transition-colors hover:text-[#eaf1f8] self-start"
            style={{ color: "#51687d" }}
          >
            {blogText.viewAll[lang]}
          </Link>
        </div>
      )}
    </motion.div>
  );
}
