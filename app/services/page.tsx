import type { Metadata } from "next";
import { Container, Eyebrow } from "@/components/ui";
import { Icon } from "@/components/Icon";
import { CTASection } from "@/components/CTASection";
import { ProcessRail } from "@/components/ProcessRail";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Services & Capabilities",
  description:
    "Zinc electroplating, passivation, barrel and rack plating, job-work processing, quality inspection and hydrogen embrittlement relief — Shubham Enterprises' core capabilities.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-graphite py-16 text-paper sm:py-20">
        <Container>
          <Eyebrow>Capabilities</Eyebrow>
          <h1 className="mt-4 max-w-2xl font-display text-5xl uppercase leading-[1] tracking-tight sm:text-6xl">
            Services
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-steel-light">
            Core surface-finishing capabilities, from initial plating through to
            post-treatment and quality checks.
          </p>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container className="space-y-16">
          {services.map((service, i) => (
            <article
              key={service.id}
              id={service.slug}
              className="grid scroll-mt-24 gap-10 border-t border-graphite/10 pt-12 lg:grid-cols-[220px_1fr] lg:gap-16"
            >
              <div>
                <span className="font-mono text-xs text-zinc-gold">{String(i + 1).padStart(2, "0")}</span>
                <Icon name={service.icon} className="mt-3 h-8 w-8 text-zinc-gold" strokeWidth={1.5} />
                <h2 className="mt-4 font-display text-3xl uppercase leading-[1.05] tracking-tight text-graphite">
                  {service.title}
                </h2>
              </div>
              <div className="grid gap-8 sm:grid-cols-2">
                <div>
                  <p className="text-sm leading-relaxed text-ink-soft sm:text-base">{service.description}</p>
                  <h3 className="mt-6 font-mono text-xs uppercase tracking-[0.16em] text-graphite">Benefits</h3>
                  <ul className="mt-3 space-y-2 text-sm text-ink-soft">
                    {service.benefits.map((b) => (
                      <li key={b} className="flex gap-2">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-zinc-gold" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-mono text-xs uppercase tracking-[0.16em] text-graphite">Typical applications</h3>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {service.applications.map((app) => (
                      <li
                        key={app}
                        className="rounded-sm border border-graphite/15 px-2.5 py-1 font-mono text-[11px] uppercase tracking-wider text-ink-soft"
                      >
                        {app}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </Container>
      </section>

      <ProcessRail />
      <CTASection />
    </>
  );
}
