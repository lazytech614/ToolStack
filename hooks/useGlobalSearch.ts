"use client";

import { useGlobalSearchContext } from "@/components/providers/global-search-provider";

export function useGlobalSearch() {
  return useGlobalSearchContext();
}
