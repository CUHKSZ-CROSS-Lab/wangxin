"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { DATA, DATA_EN } from "@/data/resume";

type Locale = "zh" | "en";
const LanguageContext = createContext<{ locale: Locale; toggleLanguage: () => void }>({ locale: "zh", toggleLanguage: () => {} });
export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>("zh");
  useEffect(() => {
    try { const saved = localStorage.getItem("wangxin-language"); if (saved === "en" || saved === "zh") setLocale(saved); } catch {}
  }, []);
  useEffect(() => {
    document.documentElement.lang = locale === "zh" ? "zh-CN" : "en";
    document.title = locale === "zh" ? "王鑫 · 个人主页" : "Wang Xin · Portfolio";
  }, [locale]);
  function toggleLanguage() {
    const next = locale === "zh" ? "en" : "zh";
    setLocale(next);
    try { localStorage.setItem("wangxin-language", next); } catch {}
  }
  return <LanguageContext.Provider value={{ locale, toggleLanguage }}>{children}</LanguageContext.Provider>;
}
export function useResume() {
  const context = useContext(LanguageContext);
  return { ...context, DATA: context.locale === "zh" ? DATA : DATA_EN };
}
