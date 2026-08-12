import { NextResponse } from "next/server";
import { addStudyNote } from "@/lib/study";

export async function POST(request: Request) {
  const { text } = await request.json();

  if (typeof text !== "string" || !text.trim()) {
    return NextResponse.json({ error: "text is required" }, { status: 400 });
  }

  try {
    addStudyNote(text.trim());
    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}
