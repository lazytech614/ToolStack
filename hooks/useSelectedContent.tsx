import { useEffect, useState } from "react";

interface Options<T> {
  items: T[];
  getId: (item: T) => string;
}

export function useSelectedContent<T>({
  items,
  getId,
}: Options<T>) {
  const [selectedId, setSelectedId] =
    useState<string | null>(null);

  useEffect(() => {
    if (!items.length) {
      setSelectedId(null);
      return;
    }

    if (
      !selectedId ||
      !items.some(
        (item) => getId(item) === selectedId
      )
    ) {
      setSelectedId(getId(items[0]));
    }
  }, [items, selectedId, getId]);

  const selected =
    items.find(
      (item) => getId(item) === selectedId
    ) ?? null;

  return {
    selected,
    selectedId,
    setSelectedId,
  };
}