"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { search } from "@/lib/search-engine";
import type { SearchItem } from "@/types/search-types";

interface GlobalSearchContextValue {
  open: boolean;
  setOpen: (open: boolean) => void;

  query: string;
  setQuery: (query: string) => void;

  results: SearchItem[];

  openSearch: () => void;
  closeSearch: () => void;
  toggleSearch: () => void;
}

const GlobalSearchContext = createContext<GlobalSearchContextValue | null>(null);

export function GlobalSearchProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  const [query, setQuery] = useState("");

  const results = useMemo(() => search(query), [query]);

  const openSearch = useCallback(() => {
    setOpen(true);
  }, []);

  const closeSearch = useCallback(() => {
    setOpen(false);
    setQuery("");
  }, []);

  const toggleSearch = useCallback(() => {
    setOpen((prev) => !prev);
  }, []);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        toggleSearch();
      }

      if (e.key === "Escape") {
        closeSearch();
      }
    }

    window.addEventListener("keydown", onKeyDown);

    return () => window.removeEventListener("keydown", onKeyDown);
  }, [toggleSearch, closeSearch]);

  return (
    <GlobalSearchContext.Provider
      value={{
        open,
        setOpen,
        query,
        setQuery,
        results,
        openSearch,
        closeSearch,
        toggleSearch,
      }}
    >
      {children}
    </GlobalSearchContext.Provider>
  );
}

export function useGlobalSearchContext() {
  const context = useContext(GlobalSearchContext);

  if (!context) {
    throw new Error("useGlobalSearchContext must be used within GlobalSearchProvider");
  }

  return context;
}
