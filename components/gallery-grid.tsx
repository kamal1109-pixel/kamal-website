"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { GalleryCategory, GalleryItem } from "@/lib/gallery";

type Filter = "All" | GalleryCategory;

export function GalleryGrid({ items }: { items: GalleryItem[] }) {
  const categories: Filter[] = ["All", ...Array.from(new Set(items.map((i) => i.category)))];
  const [filter, setFilter] = useState<Filter>("All");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  const visible = filter === "All" ? items : items.filter((i) => i.category === filter);
  const active = activeIndex !== null ? visible[activeIndex] : null;

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (activeIndex !== null && !dialog.open) dialog.showModal();
    if (activeIndex === null && dialog.open) dialog.close();
  }, [activeIndex]);

  const step = (delta: number) =>
    setActiveIndex((i) => (i === null ? i : (i + delta + visible.length) % visible.length));

  return (
    <>
      <div role="group" aria-label="Filter photos" className="flex flex-wrap gap-2">
        {categories.map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => setFilter(c)}
            aria-pressed={filter === c}
            className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
              filter === c
                ? "border-primary bg-primary text-white"
                : "border-border bg-card text-foreground hover:border-primary"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((item, index) => (
          <li key={item.src}>
            <button
              type="button"
              onClick={() => setActiveIndex(index)}
              className="group block w-full overflow-hidden rounded-lg border border-border bg-card text-left"
            >
              <span className="relative block aspect-[4/3] overflow-hidden">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </span>
              <span className="flex items-center justify-between gap-2 px-4 py-3">
                <span className="font-semibold">{item.title}</span>
                <span className="shrink-0 text-xs text-muted">{item.category}</span>
              </span>
            </button>
          </li>
        ))}
      </ul>

      <dialog
        ref={dialogRef}
        onClose={() => setActiveIndex(null)}
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") step(1);
          if (e.key === "ArrowLeft") step(-1);
        }}
        onClick={(e) => e.target === e.currentTarget && setActiveIndex(null)}
        aria-label={active?.title ?? "Photo viewer"}
        className="m-auto w-[min(92vw,960px)] max-w-none bg-transparent p-0 backdrop:bg-black/80"
      >
        {active && (
          <figure className="flex flex-col gap-3">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-ink">
              <Image src={active.src} alt={active.alt} fill sizes="92vw" className="object-contain" />
            </div>
            <figcaption className="flex items-center justify-between gap-3 text-white">
              <span className="font-semibold">{active.title}</span>
              <span className="flex gap-2">
                <button type="button" onClick={() => step(-1)} aria-label="Previous photo" className="rounded-md bg-white/10 p-2 hover:bg-white/20">
                  <ChevronLeft className="size-5" aria-hidden="true" />
                </button>
                <button type="button" onClick={() => step(1)} aria-label="Next photo" className="rounded-md bg-white/10 p-2 hover:bg-white/20">
                  <ChevronRight className="size-5" aria-hidden="true" />
                </button>
                <button type="button" onClick={() => setActiveIndex(null)} aria-label="Close" className="rounded-md bg-white/10 p-2 hover:bg-white/20">
                  <X className="size-5" aria-hidden="true" />
                </button>
              </span>
            </figcaption>
          </figure>
        )}
      </dialog>
    </>
  );
}
