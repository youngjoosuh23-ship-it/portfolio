import fs from "fs";
import path from "path";

const STUDY_FILE = path.join(process.cwd(), "content/study.json");

export type StudyNote = {
  id: string;
  text: string;
  date: string;
  updatedAt?: string;
};

function readAll(): StudyNote[] {
  return JSON.parse(fs.readFileSync(STUDY_FILE, "utf-8"));
}

function writeAll(notes: StudyNote[]): void {
  fs.writeFileSync(STUDY_FILE, JSON.stringify(notes, null, 2) + "\n");
}

export function getAllStudyNotes(): StudyNote[] {
  return readAll().sort((a, b) => ((a.updatedAt ?? a.date) < (b.updatedAt ?? b.date) ? 1 : -1));
}

// Same flow as writing a blog post: edit locally, then `git push` to publish.
export function addStudyNote(text: string): void {
  const notes = readAll();
  notes.push({ id: Date.now().toString(36), text, date: new Date().toISOString().slice(0, 10) });
  writeAll(notes);
}

export function updateStudyNote(id: string, text: string): void {
  const notes = readAll();
  const note = notes.find((n) => n.id === id);
  if (!note) throw new Error("note not found");
  note.text = text;
  note.updatedAt = new Date().toISOString().slice(0, 10);
  writeAll(notes);
}

export function deleteStudyNote(id: string): void {
  writeAll(readAll().filter((n) => n.id !== id));
}
