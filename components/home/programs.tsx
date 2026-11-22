import { ClipboardCheck, GraduationCap, RefreshCw, ScanLine, ShieldCheck, Users } from "lucide-react";

const programs = [
  {
    icon: GraduationCap,
    title: "New joiner ramp up",
    desc: "Structured first-weeks onboarding so new riders and hub associates reach full productivity quickly.",
  },
  {
    icon: Users,
    title: "PTL and leadership",
    desc: "Training for process team leads on shift planning, people management and running daily huddles.",
  },
  {
    icon: ScanLine,
    title: "Scan-rate coaching",
    desc: "Primary and manifest scan accuracy coaching, measured hub by hub, to cut misroutes and losses.",
  },
  {
    icon: ShieldCheck,
    title: "Defensive driving (DDD)",
    desc: "Road safety, helmet discipline and defensive riding habits for our delivery partners.",
  },
  {
    icon: RefreshCw,
    title: "Refresher and defaulter",
    desc: "Targeted refreshers for teams that need them, closing gaps found in audits and performance data.",
  },
  {
    icon: ClipboardCheck,
    title: "Audits and checks",
    desc: "Checklists, bag audits, stress tests and process audits that keep standards consistent everywhere.",
  },
];

export function Programs() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-wider text-accent">What we do</p>
        <h2 className="mt-2 text-balance text-3xl font-extrabold md:text-4xl">Programs built for the logistics floor</h2>
        <p className="mt-3 text-pretty text-muted">
          Every program is designed around real hub operations and tracked with live data, so we know what works.
        </p>
      </div>
      <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {programs.map(({ icon: Icon, title, desc }) => (
          <li key={title} className="flex flex-col gap-3 rounded-lg border border-border bg-card p-6">
            <span className="flex size-10 items-center justify-center rounded-md bg-[#E8EFFC] text-primary">
              <Icon className="size-5" aria-hidden="true" />
            </span>
            <h3 className="text-lg font-bold">{title}</h3>
            <p className="text-sm leading-relaxed text-muted">{desc}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
