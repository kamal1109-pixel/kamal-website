import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { galleryItems } from "@/lib/gallery";

export function GalleryPreview() {
  const items = galleryItems.slice(1, 5);
  return (
    <section className="border-y border-border bg-card">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-accent">In the field</p>
            <h2 className="mt-2 text-3xl font-extrabold md:text-4xl">Moments from our sessions</h2>
          </div>
          <Link href="/gallery" className="inline-flex items-center gap-1 font-semibold text-primary hover:underline">
            See full gallery
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
        <ul className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4">
          {items.map((item) => (
            <li key={item.src} className="relative aspect-square overflow-hidden rounded-lg">
              <Image src={item.src} alt={item.alt} fill sizes="(min-width: 768px) 25vw, 50vw" className="object-cover" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
