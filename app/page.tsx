import { CtaBanner } from "@/components/cta-banner";
import { GalleryPreview } from "@/components/home/gallery-preview";
import { Hero } from "@/components/home/hero";
import { Programs } from "@/components/home/programs";
import { Stats } from "@/components/home/stats";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <Programs />
      <GalleryPreview />
      <div className="pt-16">
        <CtaBanner />
      </div>
    </>
  );
}
