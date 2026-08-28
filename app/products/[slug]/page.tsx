import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Container, Eyebrow, Button } from "@/components/ui";
import { PlaceholderVisual } from "@/components/PlaceholderVisual";
import { CTASection } from "@/components/CTASection";
import { products } from "@/data/products";
import { categories } from "@/data/categories";
import { finishes } from "@/data/finishes";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) return {};
  return {
    title: product.name,
    description: product.description,
    alternates: { canonical: `/products/${product.slug}` },
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) notFound();

  const category = categories.find((c) => c.id === product.categoryId);
  const productFinishes = finishes.filter((f) => product.finishes.includes(f.id));
  const related = products.filter((p) => p.categoryId === product.categoryId && p.id !== product.id).slice(0, 3);

  return (
    <>
      <section className="bg-graphite py-14 text-paper sm:py-16">
        <Container>
          <Link href="/products" className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-steel-light hover:text-zinc-gold">
            <ArrowLeft size={14} /> Back to products
          </Link>
          {category && <Eyebrow className="mt-6 block">{category.name}</Eyebrow>}
          <h1 className="mt-3 max-w-2xl font-display text-4xl uppercase leading-[1] tracking-tight sm:text-5xl">
            {product.name}
          </h1>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container className="grid gap-12 lg:grid-cols-2">
          <PlaceholderVisual icon="package" tone="graphite" label={product.name} className="aspect-square" />

          <div>
            <p className="text-base leading-relaxed text-ink-soft">{product.description}</p>

            <h2 className="mt-8 font-mono text-xs uppercase tracking-[0.16em] text-graphite">Specifications</h2>
            <dl className="mt-3 divide-y divide-graphite/10 border-t border-graphite/10">
              {product.specs.map((spec) => (
                <div key={spec.label} className="flex justify-between gap-4 py-2.5 text-sm">
                  <dt className="text-ink-soft">{spec.label}</dt>
                  <dd className="text-right font-medium text-graphite">{spec.value}</dd>
                </div>
              ))}
            </dl>

            <h2 className="mt-8 font-mono text-xs uppercase tracking-[0.16em] text-graphite">Available finishes</h2>
            <ul className="mt-3 space-y-2">
              {productFinishes.map((f) => (
                <li key={f.id} className="flex items-center gap-2.5 text-sm text-ink-soft">
                  <span className="h-3.5 w-3.5 shrink-0 rounded-[2px] ring-1 ring-black/10" style={{ backgroundColor: f.hex }} />
                  <span className="font-medium text-graphite">{f.name}</span> — {f.description}
                </li>
              ))}
            </ul>

            <Button href="/contact" variant="secondary" className="mt-8">
              Request a Quote for This Part
            </Button>
          </div>
        </Container>
      </section>

      {related.length > 0 && (
        <section className="bg-paper-2/60 py-16 sm:py-20">
          <Container>
            <h2 className="font-display text-2xl uppercase tracking-tight text-graphite">
              Related parts
            </h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-3">
              {related.map((p) => (
                <Link
                  key={p.id}
                  href={`/products/${p.slug}`}
                  className="border border-graphite/12 bg-white/50 p-5 transition-colors hover:border-zinc-gold"
                >
                  <h3 className="font-display text-lg uppercase tracking-tight text-graphite">{p.name}</h3>
                  <p className="mt-1 text-sm text-ink-soft">{p.summary}</p>
                </Link>
              ))}
            </div>
          </Container>
        </section>
      )}

      <CTASection />
    </>
  );
}
