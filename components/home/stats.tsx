const stats = [
  { value: "5", label: "Core training tracks" },
  { value: "2", label: "Scan-rate programs" },
  { value: "5", label: "Audit and check types" },
  { value: "14", label: "Live tracking dashboards" },
];

export function Stats() {
  return (
    <section aria-label="Program highlights" className="border-b border-border bg-card">
      <dl className="mx-auto grid max-w-6xl grid-cols-2 gap-px bg-border md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="flex flex-col gap-1 bg-card px-4 py-8 sm:px-6">
            <dt className="order-2 text-sm text-muted">{s.label}</dt>
            <dd className="order-1 text-3xl font-extrabold text-primary md:text-4xl">{s.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
