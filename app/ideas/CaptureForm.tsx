"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { IDEA_CATEGORIES, type IdeaCategory } from "@/lib/idea-categories";

export default function CaptureForm() {
  const router = useRouter();
  const [text, setText] = useState("");
  const [category, setCategory] = useState<IdeaCategory>(IDEA_CATEGORIES[0]);
  const [status, setStatus] = useState<"idle" | "saving" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!text.trim()) return;
    setStatus("saving");
    const res = await fetch("/api/ideas", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text, category }),
    });
    if (res.ok) {
      setText("");
      setStatus("idle");
      router.refresh();
    } else {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2">
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="지금 떠오른 걸 그대로 적기..."
        rows={2}
        className="font-mono text-[13px] rounded-xl border p-3 bg-transparent resize-none outline-none"
        style={{ borderColor: "#1a2129", color: "#eaf1f8" }}
      />
      <div className="flex items-center gap-2">
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value as IdeaCategory)}
          className="font-mono text-[11px] rounded-lg border px-2 py-1.5 bg-transparent outline-none"
          style={{ borderColor: "#1a2129", color: "#7c97b0" }}
        >
          {IDEA_CATEGORIES.map((c) => (
            <option key={c} value={c} style={{ backgroundColor: "#0d1117" }}>
              {c}
            </option>
          ))}
        </select>
        <button
          type="submit"
          disabled={status === "saving"}
          className="font-mono text-[11px] tracking-widest rounded-lg border px-3 py-1.5 transition-colors hover:bg-[#ff634708] disabled:opacity-50"
          style={{ borderColor: "#1a2129", color: "#eaf1f8" }}
        >
          {status === "saving" ? "저장 중..." : "던지기"}
        </button>
        {status === "error" && (
          <span className="font-mono text-[10px]" style={{ color: "#e05252" }}>
            저장 실패
          </span>
        )}
      </div>
    </form>
  );
}
