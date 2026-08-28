import type { Metadata } from "next";
import { Container, Eyebrow } from "@/components/ui";
import { Icon } from "@/components/Icon";
import { CTASection } from "@/components/CTASection";
import { industries } from "@/data/industries";

export const metadata: Metadata = {
  title: "Industries We Serve",
  description:
    "Shubham Enterprises finishes parts for automotive, fastener, general engineering and construction-hardware manufacturers across the Belagavi industrial belt.",
  alternates: { canonical: "/industries" },
};

export default function IndustriesPage() {
  return (
    <>
      <section className="bg-graphite py-16 text-paper sm:py-20">
        <Container>
          <Eyebrow>Who we serve</Eyebrow>
          <h1 className="mt-4 max-w-2xl font-display text-5xl uppercase leading-[1] tracking-tight sm:text-6xl">
            Industries
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-steel-light">
            Manufacturers, fabricators and traders across sectors send parts to us for
            finishing — here&apos;s where our work most often ends up.
          </p>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container className="grid gap-x-10 gap-y-14 sm:grid-cols-2">
          {industries.map((industry, i) => (
            <div key={industry.id} className="border-t border-graphite/15 pt-6">
              <div className="flex items-center gap-3">
                <Icon name={industry.icon} className="h-7 w-7 text-zinc-gold" strokeWidth={1.5} />
                <span className="font-mono text-xs text-ink-soft">{String(i + 1).padStart(2, "0")}</span>
              </div>
              <h2 className="mt-4 font-display text-2xl uppercase tracking-tight text-graphite">
                {industry.name}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft sm:text-base">{industry.description}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {industry.examples.map((ex) => (
                  <li
                    key={ex}
                    className="rounded-sm border border-graphite/15 px-2.5 py-1 font-mono text-[11px] uppercase tracking-wider text-ink-soft"
                  >
                    {ex}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </Container>
      </section>

      <CTASection
        title="Working in a different industry?"
        description="If your parts need a consistent corrosion-resistant finish, there's a good chance we can help — get in touch with the details."
      />
    </>
  );
}
