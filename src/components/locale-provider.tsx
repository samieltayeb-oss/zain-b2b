"use client";
import {
  createContext,
  useContext,
  useEffect,
  useCallback,
  useState,
  type ReactNode,
} from "react";
import type { Locale, BilingualText } from "@/content/b2b-data";

const Context = createContext<{
  locale: Locale;
  toggle: () => void;
  setLocale: (l: Locale) => void;
  b: (text: BilingualText) => string;
  isAr: boolean;
}>({
  locale: "en",
  toggle: () => {},
  setLocale: () => {},
  b: (text) => text.en,
  isAr: false,
});

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("zain-b2b-locale");
      if (saved === "ar" || saved === "en") setLocaleState(saved);
    } catch {}
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = locale === "ar" ? "rtl" : "ltr";
    try {
      localStorage.setItem("zain-b2b-locale", locale);
    } catch {}
  }, [locale]);

  const b = useCallback(
    (text: BilingualText) => (locale === "ar" ? text.ar : text.en),
    [locale],
  );

  return (
    <Context.Provider
      value={{
        locale,
        isAr: locale === "ar",
        setLocale: setLocaleState,
        toggle: () => setLocaleState((l) => (l === "en" ? "ar" : "en")),
        b,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export const useLocale = () => useContext(Context);
