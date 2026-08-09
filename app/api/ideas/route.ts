import { NextResponse } from "next/server";
import { addIdea } from "@/lib/ideas";
import { NOTE_TYPES } from "@/lib/note-types";

export async function POST(request: Request) {
  const { text, type, source, links } = await request.json();

  if (typeof text !== "string" || !text.trim()) {
    return NextResponse.json({ error: "text is required" }, { status: 400 });
  }
  if (!NOTE_TYPES.includes(type)) {
    return NextResponse.json({ error: "invalid type" }, { status: 400 });
  }

  try {
    await addIdea(text.trim(), type, {
      source: typeof source === "string" && source.trim() ? source.trim() : undefined,
      links: Array.isArray(links) ? links.filter((l: unknown) => typeof l === "string") : undefined,
    });
    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}
