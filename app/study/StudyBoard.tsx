"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import type { StudyNote } from "@/lib/study";

export default function StudyBoard({ notes, editable }: { notes: StudyNote[]; editable: boolean }) {
  const router = useRouter();
  const [newText, setNewText] = useState("");
  const [creating, setCreating] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [draftText, setDraftText] = useState("");
  const [busy, setBusy] = useState(false);

  async function handleCreate(e: React.FormEvent) {
    e.preventDefault();
    if (!newText.trim()) return;
    setBusy(true);
    const res = await fetch("/api/study", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: newText }),
    });
    setBusy(false);
    if (res.ok) {
      setNewText("");
      setCreating(false);
      router.refresh();
    }
  }

  function startEdit(note: StudyNote) {
    setEditingId(note.id);
    setDraftText(note.text);
  }

  async function saveEdit(id: string) {
    if (!draftText.trim()) return;
    setBusy(true);
    const res = await fetch(`/api/study/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: draftText }),
    });
    setBusy(false);
    if (res.ok) {
      setEditingId(null);
      router.refresh();
    }
  }

  async function handleDelete(id: string) {
    setBusy(true);
    const res = await fetch(`/api/study/${id}`, { method: "DELETE" });
    setBusy(false);
    if (res.ok) router.refresh();
  }

  return (
    <div className="flex flex-col gap-4">
      {editable &&
        (creating ? (
          <form onSubmit={handleCreate} className="flex flex-col gap-2">
            <textarea
              value={newText}
              onChange={(e) => setNewText(e.target.value)}
              placeholder="지금 공부한 거, 바로..."
              rows={4}
              autoFocus
              className="font-mono text-[13px] rounded-xl border p-3 bg-transparent resize-none outline-none"
              style={{ borderColor: "#1a2129", color: "#eaf1f8" }}
            />
            <div className="flex items-center gap-2">
              <button
                type="submit"
                disabled={busy}
                className="font-mono text-[11px] tracking-widest rounded-lg border px-3 py-1.5 disabled:opacity-50"
                style={{ borderColor: "#1a2129", color: "#eaf1f8" }}
              >
                {busy ? "저장 중..." : "저장"}
              </button>
              <button
                type="button"
                onClick={() => {
                  setCreating(false);
                  setNewText("");
                }}
                className="font-mono text-[11px] tracking-widest rounded-lg border px-3 py-1.5"
                style={{ borderColor: "#1a2129", color: "#51687d" }}
              >
                취소
              </button>
            </div>
          </form>
        ) : (
          <button
            onClick={() => setCreating(true)}
            className="self-start font-mono text-[11px] tracking-widest rounded-lg border px-3 py-1.5 transition-colors hover:bg-[#ff634708]"
            style={{ borderColor: "#1a2129", color: "#7c97b0" }}
          >
            + 새 메모
          </button>
        ))}

      {notes.length === 0 ? (
        <div
          className="font-mono text-[11px] py-8 text-center border border-dashed rounded-2xl"
          style={{ color: "#2c3947", borderColor: "#11161b" }}
        >
          // empty
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          {notes.map((note) => (
            <div key={note.id} className="rounded-xl border p-4" style={{ borderColor: "#1a2129" }}>
              <div className="flex items-center justify-between mb-1.5">
                <span className="font-mono text-[10px] tracking-widest" style={{ color: "#51687d" }}>
                  {note.updatedAt ? `${note.updatedAt} (수정됨)` : note.date}
                </span>
                {editable && editingId !== note.id && (
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => startEdit(note)}
                      className="font-mono text-[10px]"
                      style={{ color: "#4682b4" }}
                    >
                      수정
                    </button>
                    <button
                      onClick={() => handleDelete(note.id)}
                      disabled={busy}
                      className="font-mono text-[10px]"
                      style={{ color: "#e05252" }}
                    >
                      삭제
                    </button>
                  </div>
                )}
              </div>

              {editingId === note.id ? (
                <div className="flex flex-col gap-2">
                  <textarea
                    value={draftText}
                    onChange={(e) => setDraftText(e.target.value)}
                    rows={4}
                    autoFocus
                    className="font-mono text-[13px] rounded-xl border p-3 bg-transparent resize-none outline-none"
                    style={{ borderColor: "#1a2129", color: "#eaf1f8" }}
                  />
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => saveEdit(note.id)}
                      disabled={busy}
                      className="font-mono text-[11px] tracking-widest rounded-lg border px-3 py-1.5 disabled:opacity-50"
                      style={{ borderColor: "#1a2129", color: "#eaf1f8" }}
                    >
                      {busy ? "저장 중..." : "저장"}
                    </button>
                    <button
                      onClick={() => setEditingId(null)}
                      className="font-mono text-[11px] tracking-widest rounded-lg border px-3 py-1.5"
                      style={{ borderColor: "#1a2129", color: "#51687d" }}
                    >
                      취소
                    </button>
                  </div>
                </div>
              ) : (
                <p
                  className="font-mono text-[13px] leading-relaxed whitespace-pre-wrap"
                  style={{ color: "#eaf1f8" }}
                >
                  {note.text}
                </p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
