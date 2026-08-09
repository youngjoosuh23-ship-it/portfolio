import fs from "fs";
import path from "path";
import { NOTE_TYPES, type NoteType } from "./note-types";

const IDEAS_FILE = path.join(process.cwd(), "content/ideas.json");
const FLEETING_TTL_HOURS = 48;

export { NOTE_TYPES, type NoteType };

export type Idea = {
  id: string;
  text: string;
  type: NoteType;
  date: string;
  source?: string; // literature notes: where the idea came from
  links?: string[]; // permanent notes: ids of notes this one connects to
};

export function getAllIdeas(): Idea[] {
  const raw = fs.readFileSync(IDEAS_FILE, "utf-8");
  const ideas: Idea[] = JSON.parse(raw);
  return ideas.sort((a, b) => (a.date < b.date ? 1 : -1));
}

// ponytail: date is stored day-only, so this is +/- a day, not exact 48h
export function isStaleFleeting(idea: Idea): boolean {
  if (idea.type !== "fleeting") return false;
  const ageMs = Date.now() - new Date(idea.date).getTime();
  return ageMs > FLEETING_TTL_HOURS * 60 * 60 * 1000;
}

// Same flow as writing a blog post: edit locally, then `git push` to publish.
export function addIdea(
  text: string,
  type: NoteType,
  extra?: { source?: string; links?: string[] }
): void {
  const ideas = JSON.parse(fs.readFileSync(IDEAS_FILE, "utf-8"));
  ideas.push({
    id: Date.now().toString(36),
    text,
    type,
    date: new Date().toISOString().slice(0, 10),
    ...(extra?.source ? { source: extra.source } : {}),
    ...(extra?.links?.length ? { links: extra.links } : {}),
  });
  fs.writeFileSync(IDEAS_FILE, JSON.stringify(ideas, null, 2) + "\n");
}
