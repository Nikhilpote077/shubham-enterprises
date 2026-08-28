import Link from "next/link";
import type { Product } from "@/types";
import { finishes } from "@/data/finishes";
import { PlaceholderVisual } from "./PlaceholderVisual";

export function ProductCard({ product }: { product: Product }) {
  const productFinishes = finishes.filter((f) => product.finishes.includes(f.id));
  return (
    <Link
      href={`/products/${product.slug}`}
      className="group block border border-graphite/12 bg-white/50 transition-colors hover:border-zinc-gold"
    >
      <PlaceholderVisual icon="package" tone="graphite" label={product.name} />
      <div className="p-5">
        <h3 className="font-display text-xl uppercase tracking-tight text-graphite group-hover:text-zinc-gold">
          {product.name}
        </h3>
        <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{product.summary}</p>
        <ul className="mt-4 flex gap-1.5" aria-label="Available finishes">
          {productFinishes.map((f) => (
            <li
              key={f.id}
              className="h-3.5 w-3.5 rounded-[2px] ring-1 ring-black/10"
              style={{ backgroundColor: f.hex }}
              title={f.name}
            />
          ))}
        </ul>
      </div>
    </Link>
  );
}
