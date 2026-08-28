import Link from "next/link";
import { MapPin, Phone, Clock } from "lucide-react";
import { company } from "@/data/company";
import { navLinks } from "@/data/nav";
import { Container } from "./ui";
import { FinishSwatchRail } from "./FinishSwatchRail";

export function Footer() {
  return (
    <footer className="bg-graphite text-paper">
      <Container className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <span className="font-display text-2xl uppercase tracking-tight">
            Shubham <span className="text-zinc-gold">Enterprises</span>
          </span>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-steel-light">
            {company.shortDescription}
          </p>
          <FinishSwatchRail variant="dark" showLabels={false} className="mt-6" />
        </div>

        <div>
          <h3 className="font-mono text-xs uppercase tracking-[0.16em] text-zinc-gold">Navigate</h3>
          <ul className="mt-4 space-y-2.5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-steel-light hover:text-paper">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-mono text-xs uppercase tracking-[0.16em] text-zinc-gold">Contact</h3>
          <ul className="mt-4 space-y-3 text-sm text-steel-light">
            <li className="flex gap-2.5">
              <MapPin size={16} className="mt-0.5 shrink-0 text-zinc-gold" />
              <span>
                {company.address.line1}, {company.address.line2}, {company.address.city},{" "}
                {company.address.state} {company.address.postalCode}
              </span>
            </li>
            <li className="flex gap-2.5">
              <Phone size={16} className="mt-0.5 shrink-0 text-zinc-gold" />
              <a href={`tel:${company.contact.phone.replace(/\s/g, "")}`} className="hover:text-paper">
                {company.contact.phoneDisplay}
              </a>
            </li>
            <li className="flex gap-2.5">
              <Clock size={16} className="mt-0.5 shrink-0 text-zinc-gold" />
              <span>
                {company.hours.map((h) => (
                  <span key={h.day} className="block">
                    {h.day}: {h.time}
                  </span>
                ))}
              </span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-mono text-xs uppercase tracking-[0.16em] text-zinc-gold">Registration</h3>
          <p className="mt-4 font-mono text-xs leading-relaxed text-steel-light">
            GSTIN/UIN
            <br />
            <span className="text-paper">{company.gstin}</span>
            <br />
            <br />
            State: {company.address.state} (Code {company.stateCode})
          </p>
        </div>
      </Container>

      <div className="swatch-rule" />

      <Container className="flex flex-col items-center justify-between gap-2 py-5 text-xs text-steel-light sm:flex-row">
        <p>© {new Date().getFullYear()} Shubham Enterprises. All rights reserved.</p>
        <p className="font-mono uppercase tracking-wider">Udyambag, Belagavi, Karnataka</p>
      </Container>
    </footer>
  );
}
