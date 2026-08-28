import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Service } from "@/types";
import { Icon } from "./Icon";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/services#${service.slug}`}
      className="group flex flex-col justify-between border border-graphite/12 bg-white/50 p-6 transition-colors hover:border-zinc-gold"
    >
      <div>
        <Icon name={service.icon} className="h-7 w-7 text-zinc-gold" strokeWidth={1.5} />
        <h3 className="mt-4 font-display text-2xl uppercase tracking-tight text-graphite">
          {service.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-ink-soft">{service.summary}</p>
      </div>
      <span className="mt-6 inline-flex items-center gap-1 font-mono text-[11px] uppercase tracking-wider text-graphite group-hover:text-zinc-gold">
        Learn more
        <ArrowUpRight size={14} />
      </span>
    </Link>
  );
}
