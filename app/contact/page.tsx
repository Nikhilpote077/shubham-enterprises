import type { Metadata } from "next";
import { MapPin, Phone, Clock, MessageCircle } from "lucide-react";
import { Container, Eyebrow } from "@/components/ui";
import { ContactForm } from "@/components/ContactForm";
import { company } from "@/data/company";
import { localBusinessSchema, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Shubham Enterprises for zinc plating and metal finishing job-work in Belagavi, Karnataka. Call, WhatsApp or send a message.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  const mapQuery = encodeURIComponent(
    `${company.address.line1}, ${company.address.line2}, ${company.address.city}, ${company.address.state} ${company.address.postalCode}`
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            localBusinessSchema(),
            breadcrumbSchema([
              { name: "Home", path: "/" },
              { name: "Contact", path: "/contact" },
            ]),
          ]),
        }}
      />

      <section className="bg-graphite py-16 text-paper sm:py-20">
        <Container>
          <Eyebrow>Get in touch</Eyebrow>
          <h1 className="mt-4 max-w-2xl font-display text-5xl uppercase leading-[1] tracking-tight sm:text-6xl">
            Contact
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-steel-light">
            Send a message with your part details, or call us directly for an urgent
            requirement.
          </p>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container className="grid gap-14 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <h2 className="font-mono text-xs uppercase tracking-[0.16em] text-graphite">Reach us directly</h2>
            <ul className="mt-5 space-y-5">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-zinc-gold" />
                <div>
                  <p className="text-sm font-medium text-graphite">Address</p>
                  <p className="text-sm text-ink-soft">
                    {company.address.line1}, {company.address.line2}
                    <br />
                    {company.address.city}, {company.address.state} {company.address.postalCode}
                  </p>
                </div>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-zinc-gold" />
                <div>
                  <p className="text-sm font-medium text-graphite">Phone</p>
                  <a href={`tel:${company.contact.phone.replace(/\s/g, "")}`} className="text-sm text-ink-soft hover:text-zinc-gold">
                    {company.contact.phoneDisplay}
                  </a>
                </div>
              </li>
              <li className="flex gap-3">
                <MessageCircle className="mt-0.5 h-5 w-5 shrink-0 text-zinc-gold" />
                <div>
                  <p className="text-sm font-medium text-graphite">WhatsApp</p>
                  <a
                    href={`https://wa.me/${company.contact.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-ink-soft hover:text-zinc-gold"
                  >
                    Message us on WhatsApp
                  </a>
                </div>
              </li>
              <li className="flex gap-3">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-zinc-gold" />
                <div>
                  <p className="text-sm font-medium text-graphite">Hours</p>
                  {company.hours.map((h) => (
                    <p key={h.day} className="text-sm text-ink-soft">
                      {h.day}: {h.time}
                    </p>
                  ))}
                </div>
              </li>
            </ul>

            <div className="mt-8 overflow-hidden border border-graphite/15">
              <iframe
                title="Shubham Enterprises location map"
                src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
                width="100%"
                height="260"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block"
              />
            </div>
          </div>

          <div className="border border-graphite/12 bg-white/50 p-6 sm:p-8">
            <h2 className="font-display text-2xl uppercase tracking-tight text-graphite">Send a Message</h2>
            <p className="mt-1.5 text-sm text-ink-soft">
              Include the part, quantity and finish required for the fastest response.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
