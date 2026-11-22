import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CtaBanner() {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
      <div className="flex flex-col items-start gap-6 rounded-xl bg-primary px-6 py-10 text-white md:flex-row md:items-center md:justify-between md:px-10">
        <div>
          <h2 className="text-balance text-2xl font-extrabold md:text-3xl">Plan a training for your hub</h2>
          <p className="mt-2 max-w-xl text-pretty text-[#DCE7FB]">
            Tell us about your team, your shift timings and the skills you want to build. We will design the session around them.
          </p>
        </div>
        <Link
          href="/contact"
          className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-white px-5 py-3 font-semibold text-primary transition-colors hover:bg-[#E8EFFC]"
        >
          Contact the L&amp;D team
          <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
