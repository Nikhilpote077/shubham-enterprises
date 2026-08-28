import type { Metadata } from "next";
import { Building2, Target, Eye, ShieldCheck } from "lucide-react";
import { Container, SectionHeading, Eyebrow } from "@/components/ui";
import { CTASection } from "@/components/CTASection";
import { PlaceholderVisual } from "@/components/PlaceholderVisual";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Shubham Enterprises is a metal-finishing job-work business based in Udyambag, Belagavi, providing zinc electroplating and passivation for local and regional manufacturers.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-graphite py-20 text-paper sm:py-28">
        <Container>
          <Eyebrow>About the company</Eyebrow>
          <h1 className="mt-4 max-w-3xl font-display text-5xl uppercase leading-[1] tracking-tight sm:text-6xl text-balance">
            A Finishing Shop Built on Consistency
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-steel-light sm:text-lg">
            {company.name} operates out of Udyambag Industrial Area, Belagavi, providing
            zinc electroplating and passivation job-work to fabricators and manufacturers
            across the region.
          </p>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Introduction"
              title="What We Do"
              description="We take in customer-supplied parts — from fasteners to formed brackets — and return them plated to a specified finish, ready for assembly or dispatch."
            />
            <p className="mt-6 text-sm leading-relaxed text-ink-soft sm:text-base">
              Our work centres on zinc electroplating: cleaning, plating and passivating
              parts so they hold up against corrosion in the field, not just on the
              factory floor. We run both barrel and rack lines, which lets us handle
              small high-volume hardware alongside larger, more delicate components in
              the same facility.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-ink-soft sm:text-base">
              {/* TODO: add specific founding year, ownership history and team size once confirmed by the client. */}
              As a GST-registered business (GSTIN {company.gstin}), we serve fastener
              manufacturers, automotive-component suppliers and general engineering
              job-shops in and around Belagavi.
            </p>
          </div>
          <PlaceholderVisual icon="building" tone="steel" label="Shubham Enterprises facility, Udyambag" className="aspect-square" />
        </Container>
      </section>

      <section className="bg-paper-2/60 py-20 sm:py-28">
        <Container>
          <SectionHeading eyebrow="What guides the work" title="Mission, Vision & Values" />
          <div className="mt-14 grid gap-8 sm:grid-cols-3">
            <div className="border-t border-graphite/15 pt-5">
              <Target className="h-6 w-6 text-zinc-gold" strokeWidth={1.5} />
              <h3 className="mt-3 font-display text-xl uppercase tracking-tight text-graphite">Mission</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                Deliver a consistent, corrosion-resistant finish on every batch, so
                customers can rely on the same result order after order.
              </p>
            </div>
            <div className="border-t border-graphite/15 pt-5">
              <Eye className="h-6 w-6 text-zinc-gold" strokeWidth={1.5} />
              <h3 className="mt-3 font-display text-xl uppercase tracking-tight text-graphite">Vision</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                To be a dependable finishing partner for manufacturers across
                Belagavi and the wider Karnataka industrial belt.
              </p>
            </div>
            <div className="border-t border-graphite/15 pt-5">
              <ShieldCheck className="h-6 w-6 text-zinc-gold" strokeWidth={1.5} />
              <h3 className="mt-3 font-display text-xl uppercase tracking-tight text-graphite">Values</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                Straightforward handling of customer material, clear communication on
                turnaround, and finish quality checked before it leaves the shop.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <PlaceholderVisual icon="cog" tone="graphite" label="Plating and finishing infrastructure" className="order-2 aspect-square lg:order-1" />
          <div className="order-1 lg:order-2">
            <SectionHeading
              eyebrow="Infrastructure"
              title="Manufacturing & Quality Commitment"
              description="Barrel and rack plating lines, multi-stage rinsing and passivation baths, set up to run consistent batches at both trial and production scale."
            />
            <ul className="mt-6 space-y-3 text-sm text-ink-soft sm:text-base">
              <li className="flex gap-2.5"><Building2 className="mt-0.5 h-4 w-4 shrink-0 text-zinc-gold" /> Barrel and rack plating lines under one roof</li>
              <li className="flex gap-2.5"><Building2 className="mt-0.5 h-4 w-4 shrink-0 text-zinc-gold" /> Full range of standard chromate finishes</li>
              <li className="flex gap-2.5"><Building2 className="mt-0.5 h-4 w-4 shrink-0 text-zinc-gold" /> Visual inspection on every batch before dispatch</li>
            </ul>
          </div>
        </Container>
      </section>

      <CTASection
        title="Want to see if we're a fit for your parts?"
        description="Tell us about the component, quantity and finish you need — we'll confirm turnaround and pricing."
      />
    </>
  );
}
