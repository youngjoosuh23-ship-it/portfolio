"use client";

import { useLang } from "@/components/LangProvider";

export default function LangToggle() {
  const { lang, toggle } = useLang();

  return (
    <button
      onClick={toggle}
      className="font-mono text-[10px] tracking-widest px-2 py-1 rounded-sm border transition-colors"
      style={{
        color: "#7c97b0",
        borderColor: "#1a2129",
      }}
    >
      {lang === "ko" ? "KO" : "EN"} ⇄
    </button>
  );
}
