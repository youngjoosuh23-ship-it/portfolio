"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const WORDS = [
  "bioengineer",
  "AI builder",
  "multilingual communicator",
  "coordinator",
  "lifelong learner",
];

export default function Greeting() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % WORDS.length);
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  return (
    <h1
      className="font-mono text-4xl md:text-5xl font-bold tracking-tight flex flex-wrap items-baseline gap-x-3"
      style={{ color: "#e8ffe8" }}
    >
      <span>Hello, I&apos;m a</span>
      <span
        className="relative inline-flex h-[1.15em] overflow-hidden align-baseline"
        style={{ color: "#00ff41" }}
      >
        <AnimatePresence mode="wait">
          <motion.span
            key={WORDS[index]}
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            exit={{ y: "-100%", opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="whitespace-nowrap"
          >
            {WORDS[index]}
          </motion.span>
        </AnimatePresence>
      </span>
      <span>Youngjoo Suh.</span>
    </h1>
  );
}
