export function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="border-b border-border bg-card">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 md:py-16">
        <p className="text-sm font-semibold uppercase tracking-wider text-accent">{eyebrow}</p>
        <h1 className="mt-2 max-w-[20ch] text-balance text-3xl font-extrabold leading-tight md:text-5xl">{title}</h1>
        <p className="mt-4 max-w-2xl text-pretty text-lg leading-relaxed text-muted">{description}</p>
      </div>
    </section>
  );
}
