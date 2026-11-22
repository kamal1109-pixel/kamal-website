import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { Logo } from "@/components/logo";
import { navLinks, site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="bg-ink text-[#C9D4DD]">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div className="flex flex-col gap-4">
          <Logo />
          <p className="max-w-xs text-sm leading-relaxed">{site.description}</p>
        </div>

        <nav aria-label="Footer">
          <h2 className="mb-3 text-sm font-semibold text-white">Explore</h2>
          <ul className="flex flex-col gap-2 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-white hover:underline">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="mb-3 text-sm font-semibold text-white">Get in touch</h2>
          <ul className="flex flex-col gap-3 text-sm">
            <li className="flex items-start gap-2">
              <Mail className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
              <a href={`mailto:${site.contact.email}`} className="hover:text-white hover:underline">
                {site.contact.email}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <Phone className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
              <a href={`tel:${site.contact.phone.replace(/\s/g, "")}`} className="hover:text-white hover:underline">
                {site.contact.phone}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
              <span>{site.contact.address}</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-[#2B3A48]">
        <div className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-5 text-xs sm:flex-row sm:justify-between sm:px-6">
          <p>
            &copy; {new Date().getFullYear()} {site.name}
          </p>
          <p>
            Made by <span className="font-semibold text-white">{site.credit}</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
