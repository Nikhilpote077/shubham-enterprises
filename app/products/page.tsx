import type { Metadata } from "next";
import { Container, Eyebrow } from "@/components/ui";
import { ProductCard } from "@/components/ProductCard";
import { CTASection } from "@/components/CTASection";
import { products } from "@/data/products";
import { categories } from "@/data/categories";

export const metadata: Metadata = {
  title: "Products & Parts",
  description:
    "Browse the fasteners, automotive components, sheet-metal parts and engineering components Shubham Enterprises finishes, with available zinc passivate finishes.",
  alternates: { canonical: "/products" },
};

export default function ProductsPage() {
  return (
    <>
      <section className="bg-graphite py-16 text-paper sm:py-20">
        <Container>
          <Eyebrow>Catalogue</Eyebrow>
          <h1 className="mt-4 max-w-2xl font-display text-5xl uppercase leading-[1] tracking-tight sm:text-6xl">
            Products & Parts
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-steel-light">
            A sample of the part categories we finish regularly. Sending a drawing or a
            physical sample is the fastest way to get an accurate quote for parts not
            listed here.
          </p>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <span
                key={c.id}
                className="rounded-sm border border-graphite/15 px-3 py-1.5 font-mono text-[11px] uppercase tracking-wider text-ink-soft"
              >
                {c.name}
              </span>
            ))}
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        title="Don't see your part listed?"
        description="This catalogue is a sample of what we process — most jobs start with a drawing or sample part, not a catalogue lookup."
      />
    </>
  );
}
