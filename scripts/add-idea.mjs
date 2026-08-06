import fs from "fs";
import path from "path";

const CATEGORIES = ["아이디어", "할일"];

const args = process.argv.slice(2);
const category = CATEGORIES.includes(args[args.length - 1]) ? args.pop() : CATEGORIES[0];
const text = args.join(" ").trim();

if (!text) {
  console.error(`Usage: npm run idea "your idea text" [${CATEGORIES.join("|")}]`);
  process.exit(1);
}

const file = path.join(process.cwd(), "content/ideas.json");
const ideas = JSON.parse(fs.readFileSync(file, "utf-8"));

ideas.push({
  id: Date.now().toString(36),
  text,
  category,
  date: new Date().toISOString().slice(0, 10),
});

fs.writeFileSync(file, JSON.stringify(ideas, null, 2) + "\n");
console.log(`captured [${category}]: "${text}"`);
console.log("run `git add -A && git commit -m \"idea\" && git push` to publish it.");
