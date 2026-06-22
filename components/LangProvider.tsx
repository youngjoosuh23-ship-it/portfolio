"use client";

import { createContext, useContext, useEffect, useState } from "react";
import type { Lang } from "@/lib/projects";

type LangCtxType = {
  lang: Lang;
  toggle: () => void;
};

const LangCtx = createContext<LangCtxType | null>(null);

export function useLang() {
  const ctx = useContext(LangCtx);
  if (!ctx) throw new Error("useLang must be used within LangProvider");
  return ctx;
}

const STORAGE_KEY = "site-lang";

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("ko");

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "ko" || stored === "en") {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- syncing initial value from localStorage to avoid SSR hydration mismatch
      setLang(stored);
    }
  }, []);

  const toggle = () => {
    setLang((prev) => {
      const next = prev === "ko" ? "en" : "ko";
      window.localStorage.setItem(STORAGE_KEY, next);
      return next;
    });
  };

  return <LangCtx.Provider value={{ lang, toggle }}>{children}</LangCtx.Provider>;
}
