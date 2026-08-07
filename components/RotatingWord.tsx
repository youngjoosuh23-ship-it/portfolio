"use client";

import { useEffect, useState, type CSSProperties } from "react";

const WORDS = ["biotech", "global communication", "AI"];

type Phase = "idle" | "leaving" | "entering";

export default function RotatingWord() {
  const [i, setI] = useState(0);
  const [phase, setPhase] = useState<Phase>("idle");

  useEffect(() => {
    const cycle = setInterval(() => {
      setPhase("leaving");
      setTimeout(() => {
        setI((prev) => (prev + 1) % WORDS.length);
        setPhase("entering");
        requestAnimationFrame(() => requestAnimationFrame(() => setPhase("idle")));
      }, 250);
    }, 2200);
    return () => clearInterval(cycle);
  }, []);

  const style: CSSProperties = {
    display: "inline-block",
    transition: phase === "leaving" ? "transform 100ms ease-in, opacity 100ms ease-in" : "transform 100ms ease-out, opacity 100ms ease-out",
    transformOrigin: "50% 100%",
    ...(phase === "leaving"
      ? { transform: "rotateX(90deg)", opacity: 0 }
      : phase === "entering"
        ? { transform: "rotateX(-90deg)", opacity: 0 }
        : { transform: "rotateX(0deg)", opacity: 1 }),
  };

  return (
    <span style={{ display: "inline-block", perspective: "200px" }}>
      <span style={style}>{WORDS[i]}</span>
    </span>
  );
}
