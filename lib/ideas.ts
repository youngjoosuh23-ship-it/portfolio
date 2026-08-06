import fs from "fs";
import path from "path";
import { IDEA_CATEGORIES, type IdeaCategory } from "./idea-categories";

const IDEAS_FILE = path.join(process.cwd(), "content/ideas.json");

export { IDEA_CATEGORIES, type IdeaCategory };

export type Idea = {
  id: string;
  text: string;
  category: IdeaCategory;
  date: string;
};

export function getAllIdeas(): Idea[] {
  const raw = fs.readFileSync(IDEAS_FILE, "utf-8");
  const ideas: Idea[] = JSON.parse(raw);
  return ideas.sort((a, b) => (a.date < b.date ? 1 : -1));
}

// Same flow as writing a blog post: edit locally, then `git push` to publish.
export function addIdea(text: string, category: IdeaCategory): void {
  const ideas = JSON.parse(fs.readFileSync(IDEAS_FILE, "utf-8"));
  ideas.push({
    id: Date.now().toString(36),
    text,
    category,
    date: new Date().toISOString().slice(0, 10),
  });
  fs.writeFileSync(IDEAS_FILE, JSON.stringify(ideas, null, 2) + "\n");
}
