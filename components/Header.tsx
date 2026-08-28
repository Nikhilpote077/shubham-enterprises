"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import { navLinks } from "@/data/nav";
import { company } from "@/data/company";
import { Container, Button } from "./ui";
import { cn } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-graphite/10 bg-paper/90 backdrop-blur-md">
      <Container className="flex h-18 items-center justify-between py-3">
        <Link href="/" className="flex flex-col leading-none" onClick={() => setOpen(false)}>
          <span className="font-display text-2xl uppercase tracking-tight text-graphite">
            Shubham <span className="text-zinc-gold">Enterprises</span>
          </span>
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-soft">
            Metal Finishing &middot; Belagavi
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "font-mono text-xs uppercase tracking-[0.12em] transition-colors",
                  active ? "text-zinc-gold" : "text-graphite hover:text-zinc-gold"
                )}
                aria-current={active ? "page" : undefined}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={`tel:${company.contact.phone.replace(/\s/g, "")}`}
            className="flex items-center gap-1.5 font-mono text-xs text-graphite hover:text-zinc-gold"
          >
            <Phone size={14} strokeWidth={1.75} />
            {company.contact.phoneDisplay}
          </a>
          <Button href="/contact" variant="secondary">
            Get a Quote
          </Button>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center text-graphite lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </Container>

      {open && (
        <div className="border-t border-graphite/10 bg-paper lg:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "border-b border-graphite/5 py-3 font-mono text-sm uppercase tracking-wider",
                  pathname === link.href ? "text-zinc-gold" : "text-graphite"
                )}
              >
                {link.label}
              </Link>
            ))}
            <Button href="/contact" variant="secondary" className="mt-4 w-full">
              Get a Quote
            </Button>
          </Container>
        </div>
      )}
    </header>
  );
}
