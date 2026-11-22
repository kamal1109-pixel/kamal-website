import type { Metadata } from "next";
import { ExternalLink } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { dashboardGroups, safeUrl } from "@/lib/dashboards";

export const metadata: Metadata = {
  title: "Dashboards",
  description: "Training, scan rate, audit and tracking dashboards for Shadowfax Learning & Development.",
};

export default function DashboardsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Dashboards"
        title="Training, scan rate and audit dashboards"
        description="Every live tracker in one place. Each link opens the dashboard in a new tab."
      />
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        {dashboardGroups.map((group) => (
          <section key={group.name} aria-labelledby={`group-${group.name}`} className="mb-12 last:mb-0">
            <h2 id={`group-${group.name}`} className="mb-4 text-xl font-bold">
              {group.name}
            </h2>
            <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {group.items.map((item) => {
                const url = safeUrl(item.url);
                return (
                  <li key={item.id} id={item.id}>
                    {url ? (
                      <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-full flex-col gap-2 rounded-lg border border-border bg-card p-5 transition-colors hover:border-primary"
                      >
                        <span className="flex items-center justify-between gap-2">
                          <span className="text-lg font-bold">{item.title}</span>
                          <ExternalLink className="size-4 shrink-0 text-primary" aria-hidden="true" />
                        </span>
                        <span className="text-sm text-muted">{item.desc}</span>
                        <span className="sr-only">(opens in a new tab)</span>
                      </a>
                    ) : (
                      <div className="flex h-full flex-col gap-2 rounded-lg border border-dashed border-border bg-card p-5">
                        <span className="flex items-center justify-between gap-2">
                          <span className="text-lg font-bold">{item.title}</span>
                          <span className="rounded-full bg-background px-2 py-0.5 text-xs text-muted">Coming soon</span>
                        </span>
                        <span className="text-sm text-muted">{item.desc}</span>
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          </section>
        ))}
      </div>
    </>
  );
}
