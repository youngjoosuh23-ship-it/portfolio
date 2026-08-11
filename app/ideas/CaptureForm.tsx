"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { NOTE_TYPES, NOTE_TYPE_LABEL, NOTE_TYPE_PLACEHOLDER, type NoteType } from "@/lib/note-types";
import type { Idea } from "@/lib/ideas";

export default function CaptureForm({ existingNotes }: { existingNotes: Idea[] }) {
  const router = useRouter();
  const [text, setText] = useState("");
  const [type, setType] = useState<NoteType>("fleeting");
  const [source, setSource] = useState("");
  const [linkId, setLinkId] = useState("");
  const [status, setStatus] = useState<"idle" | "saving" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!text.trim()) return;
    setStatus("saving");
    const res = await fetch("/api/ideas", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        text,
        type,
        source: type === "literature" ? source : undefined,
        links: type === "permanent" && linkId ? [linkId] : undefined,
      }),
    });
    if (res.ok) {
      setText("");
      setSource("");
      setLinkId("");
      setStatus("idle");
      router.refresh();
    } else {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        {NOTE_TYPES.map((t) => (
          <button
            key={t}
            type="button"
            onClick={() => setType(t)}
            className="font-mono text-[11px] tracking-widest rounded-lg border px-2.5 py-1 transition-colors"
            style={{
              borderColor: type === t ? "#ff634755" : "#1a2129",
              color: type === t ? "#ff6347" : "#7c97b0",
              backgroundColor: type === t ? "#ff634714" : "transparent",
            }}
          >
            {NOTE_TYPE_LABEL[t]}
          </button>
        ))}
      </div>

      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder={NOTE_TYPE_PLACEHOLDER[type]}
        rows={type === "permanent" ? 5 : 2}
        className="font-mono text-[13px] rounded-xl border p-3 bg-transparent resize-none outline-none"
        style={{ borderColor: "#1a2129", color: "#eaf1f8" }}
      />

      {type === "literature" && (
        <input
          value={source}
          onChange={(e) => setSource(e.target.value)}
          placeholder="출처 (책 제목, 저자, URL...)"
          className="font-mono text-[11px] rounded-lg border px-3 py-1.5 bg-transparent outline-none"
          style={{ borderColor: "#1a2129", color: "#7c97b0" }}
        />
      )}

      {type === "permanent" && (
        <select
          value={linkId}
          onChange={(e) => setLinkId(e.target.value)}
          className="font-mono text-[11px] rounded-lg border px-2 py-1.5 bg-transparent outline-none"
          style={{ borderColor: "#1a2129", color: "#7c97b0" }}
        >
          <option value="" style={{ backgroundColor: "#0d1117" }}>
            예전에 적어둔 어떤 메모랑 이어지지? (선택)
          </option>
          {existingNotes.map((n) => (
            <option key={n.id} value={n.id} style={{ backgroundColor: "#0d1117" }}>
              [{NOTE_TYPE_LABEL[n.type]}] {n.text.slice(0, 40)}
            </option>
          ))}
        </select>
      )}

      <div className="flex items-center gap-2">
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
