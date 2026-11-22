import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="bg-ink text-white">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 md:py-20">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">Learning &amp; Development</p>
          <h1 className="mt-3 text-balance text-4xl font-extrabold leading-[1.08] md:text-5xl lg:text-6xl">
            Skilled teams make every delivery count
          </h1>
          <p className="mt-5 max-w-xl text-pretty text-lg leading-relaxed text-[#C9D4DD]">
            We train riders, hub staff and team leads across Shadowfax to work faster, safer and with fewer errors, from day one ramp up to on-floor audits.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-3 font-semibold text-white transition-opacity hover:opacity-90"
            >
              Our programs
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
            <Link
              href="/dashboards"
              className="inline-flex items-center rounded-lg border border-[#3A4B5A] px-5 py-3 font-semibold text-white transition-colors hover:bg-ink-soft"
            >
              View dashboards
            </Link>
          </div>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
          <Image
            src="/images/hero-training.png"
            alt="Trainer leading a hands-on session with hub staff inside a parcel sorting hub"
            fill
            priority
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
