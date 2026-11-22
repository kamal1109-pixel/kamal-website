import type { Metadata } from "next";
import { GalleryGrid } from "@/components/gallery-grid";
import { PageHeader } from "@/components/page-header";
import { galleryItems } from "@/lib/gallery";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Photos from Shadowfax Learning & Development training sessions, audits and team events.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        eyebrow="Gallery"
        title="Learning in action"
        description="A look at our classroom sessions, on-floor coaching, safety drills, audits and celebrations across the network."
      />
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <GalleryGrid items={galleryItems} />
      </section>
    </>
  );
}
