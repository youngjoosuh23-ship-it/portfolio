import { getAllIdeas, isStaleFleeting, type Idea } from "@/lib/ideas";
import { NOTE_TYPES, NOTE_TYPE_LABEL, NOTE_TYPE_COLOR, NOTE_TYPE_DESC, type NoteType } from "@/lib/note-types";
import CaptureForm from "./CaptureForm";

export default function IdeasPage() {
  const ideas = getAllIdeas();
  const grouped = Object.fromEntries(NOTE_TYPES.map((t) => [t, [] as Idea[]])) as Record<NoteType, Idea[]>;
  const byId = new Map<string, Idea>();
  for (const idea of ideas) {
    byId.set(idea.id, idea);
    if (idea.type in grouped) grouped[idea.type].push(idea);
  }

  return (
    <main className="px-6 py-8 max-w-6xl mx-auto w-full min-h-[calc(100vh-2.5rem)] flex flex-col gap-8">
      <header className="flex flex-col gap-2">
        <h1
          className="font-mono text-3xl md:text-4xl font-bold tracking-tight"
          style={{ color: "#eaf1f8" }}
        >
          Ideas
        </h1>
        <p className="font-mono text-xs md:text-sm tracking-wide" style={{ color: "#7c97b0" }}>
          임시 → 문헌 → 영구. 메모는 쌓이면 자료가 되고, 연결되면 생각이 된다.
        </p>
      </header>

      {process.env.NODE_ENV !== "production" && <CaptureForm existingNotes={ideas} />}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {NOTE_TYPES.map((type) => {
          const group = grouped[type];
          const color = NOTE_TYPE_COLOR[type];

          return (
            <div key={type} className="flex flex-col gap-4 min-h-0">
              <div className="flex flex-col gap-1 shrink-0">
                <div className="flex items-center gap-2">
                  <span
                    className="font-mono text-[10px] tracking-[0.25em] px-2 py-0.5 rounded-sm"
                    style={{ color, backgroundColor: color + "14", border: `1px solid ${color}33` }}
                  >
                    {NOTE_TYPE_LABEL[type]}
                  </span>
                  <span className="font-mono text-[10px]" style={{ color: "#3a4b5c" }}>
                    {group.length}
                  </span>
                </div>
                <p className="font-mono text-[10px] leading-relaxed" style={{ color: "#51687d" }}>
                  {NOTE_TYPE_DESC[type]}
                </p>
                <div className="h-px w-full" style={{ backgroundColor: color + "33" }} />
              </div>

              <div className="flex flex-col gap-3">
                {group.length === 0 ? (
                  <div
                    className="font-mono text-[11px] py-8 text-center border border-dashed rounded-2xl"
                    style={{ color: "#2c3947", borderColor: "#11161b" }}
                  >
                    // empty
                  </div>
                ) : (
                  group.map((idea) => {
                    const stale = isStaleFleeting(idea);
                    return (
                      <div
                        key={idea.id}
                        className="rounded-xl border p-4"
                        style={{ borderColor: "#1a2129", opacity: stale ? 0.45 : 1 }}
                      >
                        <div className="flex items-center gap-2 mb-1.5">
                          <span className="font-mono text-[10px] tracking-widest" style={{ color: "#51687d" }}>
                            {idea.date}
                          </span>
                          {stale && (
                            <span
                              className="font-mono text-[9px] tracking-widest rounded-full border px-2 py-0.5"
                              style={{ borderColor: "#51687d55", color: "#51687d" }}
                            >
                              만료됨
                            </span>
                          )}
                        </div>
                        <p
                          className="font-mono text-[13px] leading-relaxed whitespace-pre-wrap"
                          style={{ color: "#eaf1f8" }}
                        >
                          {idea.text}
                        </p>
                        {idea.source && (
                          <p className="font-mono text-[10px] mt-2" style={{ color: "#51687d" }}>
                            출처: {idea.source}
                          </p>
                        )}
                        {idea.links && idea.links.length > 0 && (
                          <div className="mt-3 pt-3 flex flex-col gap-1" style={{ borderTop: "1px solid #1a2129" }}>
                            {idea.links.map((linkId) => {
                              const linked = byId.get(linkId);
                              if (!linked) return null;
                              return (
                                <p
                                  key={linkId}
                                  className="font-mono text-[10px] leading-relaxed"
                                  style={{ color: "#4682b4" }}
                                >
                                  ↳ {linked.text.slice(0, 60)}
                                  {linked.text.length > 60 ? "…" : ""}
                                </p>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    );
                  })
                )}
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}
