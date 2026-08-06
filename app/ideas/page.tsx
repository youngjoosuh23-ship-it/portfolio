import { getAllIdeas } from "@/lib/ideas";
import CaptureForm from "./CaptureForm";

export default function IdeasPage() {
  const ideas = getAllIdeas();

  return (
    <main className="px-6 py-8 max-w-5xl mx-auto w-full min-h-[calc(100vh-2.5rem)] flex flex-col gap-8">
      <header className="flex flex-col gap-2">
        <h1
          className="font-mono text-3xl md:text-4xl font-bold tracking-tight"
          style={{ color: "#eaf1f8" }}
        >
          Ideas
        </h1>
        <p className="font-mono text-xs md:text-sm tracking-wide" style={{ color: "#7c97b0" }}>
          Raw stream. Unfiltered, unsorted, in order.
        </p>
      </header>

      {process.env.NODE_ENV !== "production" && <CaptureForm />}

      <div className="flex flex-col gap-3">
        {ideas.length === 0 ? (
          <div
            className="font-mono text-[11px] py-8 text-center border border-dashed rounded-2xl"
            style={{ color: "#2c3947", borderColor: "#11161b" }}
          >
            no ideas yet
          </div>
        ) : (
          ideas.map((idea) => (
            <div
              key={idea.id}
              className="rounded-xl border p-4"
              style={{ borderColor: "#1a2129" }}
            >
              <div className="flex items-center gap-2 mb-1">
                <span className="font-mono text-[10px] tracking-widest" style={{ color: "#51687d" }}>
                  {idea.date}
                </span>
                <span
                  className="font-mono text-[9px] tracking-widest rounded-full border px-2 py-0.5"
                  style={{ borderColor: "#1a2129", color: "#7c97b0" }}
                >
                  {idea.category}
                </span>
              </div>
              <p className="font-mono text-[13px] leading-relaxed" style={{ color: "#eaf1f8" }}>
                {idea.text}
              </p>
            </div>
          ))
        )}
      </div>
    </main>
  );
}
