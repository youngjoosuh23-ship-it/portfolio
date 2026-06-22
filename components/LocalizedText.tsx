"use client";

import { useLang } from "@/components/LangProvider";
import type { L } from "@/lib/projects";

export default function LocalizedText({ text }: { text: L }) {
  const { lang } = useLang();
  return <>{text[lang]}</>;
}
