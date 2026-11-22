"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { site } from "@/lib/site";

const topics = ["Training request", "Scan-rate support", "Audit query", "Dashboard access", "Other"];

const fieldClass =
  "w-full rounded-md border border-border bg-background px-3 py-2.5 text-base text-foreground placeholder:text-muted/70 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const hub = String(data.get("hub") ?? "").trim();
    const topic = String(data.get("topic") ?? "");
    const message = String(data.get("message") ?? "").trim();

    const subject = `[${topic}] from ${name}`;
    const body = `Name: ${name}\nEmail: ${email}\nHub / team: ${hub || "-"}\n\n${message}`;
    window.location.href = `mailto:${site.contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5 rounded-xl border border-border bg-card p-6 md:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="name" className="text-sm font-semibold">
            Full name
          </label>
          <input id="name" name="name" required maxLength={100} autoComplete="name" className={fieldClass} />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className="text-sm font-semibold">
            Work email
          </label>
          <input id="email" name="email" type="email" required maxLength={150} autoComplete="email" className={fieldClass} />
        </div>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="hub" className="text-sm font-semibold">
            Hub or team <span className="font-normal text-muted">(optional)</span>
          </label>
          <input id="hub" name="hub" maxLength={100} className={fieldClass} />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="topic" className="text-sm font-semibold">
            Topic
          </label>
          <select id="topic" name="topic" defaultValue={topics[0]} className={fieldClass}>
            {topics.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="text-sm font-semibold">
          Message
        </label>
        <textarea id="message" name="message" required minLength={10} maxLength={2000} rows={5} className={fieldClass} />
      </div>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted">Submitting opens your email app with the message ready to send.</p>
        <button
          type="submit"
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 font-semibold text-white transition-colors hover:bg-primary-hover"
        >
          <Send className="size-4" aria-hidden="true" />
          Send message
        </button>
      </div>
      <p role="status" aria-live="polite" className="text-sm font-medium text-primary">
        {sent ? "Your email app should now be open. Send the drafted message to reach us." : ""}
      </p>
    </form>
  );
}
