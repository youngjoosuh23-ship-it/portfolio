import { NextResponse } from "next/server";
import { addIdea } from "@/lib/ideas";
import { IDEA_CATEGORIES } from "@/lib/idea-categories";

export async function POST(request: Request) {
  const { text, category } = await request.json();

  if (typeof text !== "string" || !text.trim()) {
    return NextResponse.json({ error: "text is required" }, { status: 400 });
  }
  if (!IDEA_CATEGORIES.includes(category)) {
    return NextResponse.json({ error: "invalid category" }, { status: 400 });
  }

  try {
    await addIdea(text.trim(), category);
    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}
