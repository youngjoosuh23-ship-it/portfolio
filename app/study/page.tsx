import { getAllStudyNotes } from "@/lib/study";
import StudyBoard from "./StudyBoard";

export default function StudyPage() {
  const notes = getAllStudyNotes();

  return (
    <main className="px-6 py-8 max-w-3xl mx-auto w-full min-h-[calc(100vh-2.5rem)] flex flex-col gap-8">
      <header className="flex flex-col gap-2">
        <h1
          className="font-mono text-3xl md:text-4xl font-bold tracking-tight"
          style={{ color: "#eaf1f8" }}
        >
          Study
        </h1>
        <p className="font-mono text-xs md:text-sm tracking-wide" style={{ color: "#7c97b0" }}>
          공부한 걸 바로 쓰고, 필요하면 바로 고친다.
        </p>
      </header>

      <StudyBoard notes={notes} editable={process.env.NODE_ENV !== "production"} />
    </main>
  );
}
