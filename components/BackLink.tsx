"use client";

import { useRouter } from "next/navigation";

export default function BackLink({ fallbackHref, label }: { fallbackHref: string; label: string }) {
  const router = useRouter();

  return (
    <button
      onClick={() => {
        if (window.history.length > 1) router.back();
        else router.push(fallbackHref);
      }}
      className="fixed top-16 left-6 z-40 font-mono text-xs tracking-widest rounded-md border px-3 py-1.5 backdrop-blur cursor-pointer transition-colors hover:bg-[#ff634714]"
      style={{ color: "#eaf1f8", backgroundColor: "rgba(10,10,11,0.55)", borderColor: "#ff634755" }}
    >
      {label}
    </button>
  );
}
