"use client";

import { useState } from "react";
import { galleryItems } from "@/data/gallery";
import { PlaceholderVisual } from "./PlaceholderVisual";
import { cn } from "@/lib/utils";
import type { GalleryItem, IconName } from "@/types";

const categoryMeta: Record<GalleryItem["category"], { label: string; icon: IconName }> = {
  machinery: { label: "Machinery", icon: "cog" },
  infrastructure: { label: "Infrastructure", icon: "building" },
  process: { label: "Process", icon: "droplet" },
  parts: { label: "Finished Parts", icon: "package" },
  team: { label: "Team", icon: "wrench" },
};

const filters: (GalleryItem["category"] | "all")[] = ["all", "machinery", "process", "parts", "infrastructure"];

export function GalleryGrid() {
  const [active, setActive] = useState<GalleryItem["category"] | "all">("all");
  const filtered = active === "all" ? galleryItems : galleryItems.filter((g) => g.category === active);

  return (
    <div>
      <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter gallery">
        {filters.map((f) => (
          <button
            key={f}
            type="button"
            role="tab"
            aria-selected={active === f}
            onClick={() => setActive(f)}
            className={cn(
              "rounded-sm border px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-wider transition-colors",
              active === f
                ? "border-zinc-gold bg-zinc-gold text-graphite"
                : "border-graphite/15 text-ink-soft hover:border-graphite/40"
            )}
          >
            {f === "all" ? "All" : categoryMeta[f].label}
          </button>
        ))}
      </div>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {filtered.map((item) => (
          <figure key={item.id}>
            <PlaceholderVisual icon={categoryMeta[item.category].icon} tone="steel" label={item.title} />
            <figcaption className="mt-2 text-sm text-ink-soft">{item.caption}</figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
