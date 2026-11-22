import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { PageHeader } from "@/components/page-header";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with the Shadowfax Learning & Development team for training requests, audits and dashboard access.",
};

const details = [
  { icon: Mail, label: "Email", value: site.contact.email, href: `mailto:${site.contact.email}` },
  { icon: Phone, label: "Phone", value: site.contact.phone, href: `tel:${site.contact.phone.replace(/\s/g, "")}` },
  { icon: MapPin, label: "Office", value: site.contact.address },
  { icon: Clock, label: "Hours", value: site.contact.hours },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Talk to the L&D team"
        description="Request a training, ask about an audit or get access to a dashboard. We usually reply within one working day."
      />
      <section className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[1fr_2fr]">
        <ul className="flex flex-col gap-4">
          {details.map(({ icon: Icon, label, value, href }) => (
            <li key={label} className="flex items-start gap-4 rounded-lg border border-border bg-card p-5">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-md bg-[#FDEBE3] text-accent">
                <Icon className="size-5" aria-hidden="true" />
              </span>
              <div className="min-w-0">
                <p className="text-sm font-semibold">{label}</p>
                {href ? (
                  <a href={href} className="break-words text-muted hover:text-primary hover:underline">
                    {value}
                  </a>
                ) : (
                  <p className="text-muted">{value}</p>
                )}
              </div>
            </li>
          ))}
        </ul>
        <ContactForm />
      </section>
    </>
  );
}
