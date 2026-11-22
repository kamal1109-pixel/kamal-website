import type { Metadata } from "next";
import Image from "next/image";
import { Gauge, HeartHandshake, Target, Wrench } from "lucide-react";
import { CtaBanner } from "@/components/cta-banner";
import { PageHeader } from "@/components/page-header";

export const metadata: Metadata = {
  title: "About Us",
  description: "Who we are, what we believe and how the Shadowfax Learning & Development team works.",
};

const values = [
  { icon: Target, title: "Practical first", desc: "We teach on the floor, with real parcels, scanners and routes, not just slides." },
  { icon: Gauge, title: "Measured outcomes", desc: "Every program is tracked in live dashboards so we can see the impact and adjust." },
  { icon: HeartHandshake, title: "Safety always", desc: "Rider and hub safety is built into every session we run." },
  { icon: Wrench, title: "Continuous improvement", desc: "Audit findings feed straight back into refreshers and process changes." },
];

const steps = [
  { title: "Identify", desc: "We use scan rates, audit scores and ramp up data to find where teams need support." },
  { title: "Train", desc: "Our trainers run classroom and on-floor sessions tailored to each hub and role." },
  { title: "Audit", desc: "Checklists, bag audits and process audits confirm that new habits stick." },
  { title: "Refresh", desc: "Refresher and defaulter training closes any remaining gaps." },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About us"
        title="We help Shadowfax teams learn, grow and deliver"
        description="Shadowfax Learning & Development is the team responsible for onboarding, upskilling and auditing the people who move parcels across our network every day."
      />

      <section className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 md:grid-cols-2">
        <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
          <Image
            src="/images/gallery/classroom.png"
            alt="Trainer presenting at a whiteboard to employees taking notes"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
        <div>
          <h2 className="text-balance text-3xl font-extrabold">Our mission</h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted">
            Logistics runs on people. Our mission is to make sure every rider, hub associate and team lead has the skills and confidence to do their job well and safely.
          </p>
          <p className="mt-4 text-pretty leading-relaxed text-muted">
            From the first day of ramp up to leadership training for PTLs, we design programs around real operations and track them with live data across training, scan rates and audits.
          </p>
        </div>
      </section>

      <section className="border-y border-border bg-card">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="text-3xl font-extrabold">What we value</h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {values.map(({ icon: Icon, title, desc }) => (
              <li key={title} className="flex flex-col gap-3 rounded-lg border border-border bg-background p-6">
                <Icon className="size-6 text-accent" aria-hidden="true" />
                <h3 className="text-lg font-bold">{title}</h3>
                <p className="text-sm leading-relaxed text-muted">{desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="text-3xl font-extrabold">How we work</h2>
        <ol className="mt-8 grid gap-4 md:grid-cols-4">
          {steps.map((step, i) => (
            <li key={step.title} className="flex flex-col gap-2 border-t-4 border-primary pt-4">
              <span className="text-sm font-semibold text-primary">Step {i + 1}</span>
              <h3 className="text-xl font-bold">{step.title}</h3>
              <p className="text-sm leading-relaxed text-muted">{step.desc}</p>
            </li>
          ))}
        </ol>
      </section>

      <CtaBanner />
    </>
  );
}
