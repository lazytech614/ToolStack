"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

export function useMegaMenu() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (
        ref.current &&
        !ref.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClick);

    return () =>
      document.removeEventListener(
        "mousedown",
        handleClick
      );
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return {
    pathname,
    open,
    setOpen,
    ref,
  };
}