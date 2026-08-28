import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Hero } from "@/components/Hero";
import { ProcessRail } from "@/components/ProcessRail";
import { WhyUs } from "@/components/WhyUs";
import { CTASection } from "@/components/CTASection";
import { ServiceCard } from "@/components/ServiceCard";
import { ProductCard } from "@/components/ProductCard";
import { IndustryCard } from "@/components/IndustryCard";
import { Container, SectionHeading } from "@/components/ui";
import { services } from "@/data/services";
import { products } from "@/data/products";
import { industries } from "@/data/industries";

export const metadata: Metadata = {
  title: "Zinc Plating & Metal Finishing in Belagavi, Karnataka",
  description:
    "Shubham Enterprises provides zinc electroplating, passivation and metal finishing job-work for fasteners, automotive components and industrial hardware in Belagavi, Karnataka.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  const featuredProducts = products.filter((p) => p.featured).slice(0, 3);

  return (
    <>
      <Hero />

      {/* Capabilities */}
      <section className="py-20 sm:py-28">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Capabilities"
              title="What We Do"
              description="Core surface-finishing services, built around consistent, specification-matched results."
            />
            <Link
              href="/services"
              className="inline-flex items-center gap-1 font-mono text-xs uppercase tracking-wider text-graphite hover:text-zinc-gold"
            >
              All services
              <ArrowUpRight size={14} />
            </Link>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 6).map((s) => (
              <ServiceCard key={s.id} service={s} />
            ))}
          </div>
        </Container>
      </section>

      <ProcessRail />

      {/* Featured products */}
      <section className="py-20 sm:py-28">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Parts we finish"
              title="Featured Work"
              description="A sample of the part types we process regularly — see the full catalogue for specs and finish options."
            />
            <Link
              href="/products"
              className="inline-flex items-center gap-1 font-mono text-xs uppercase tracking-wider text-graphite hover:text-zinc-gold"
            >
              All products
              <ArrowUpRight size={14} />
            </Link>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </Container>
      </section>

      <WhyUs />

      {/* Industries */}
      <section className="py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Who we serve"
            title="Industries"
            description="Manufacturers and fabricators across the Belagavi industrial belt and beyond."
          />
          <div className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {industries.map((i) => (
              <IndustryCard key={i.id} industry={i} />
            ))}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
