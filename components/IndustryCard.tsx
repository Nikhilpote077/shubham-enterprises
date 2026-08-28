import type { Industry } from "@/types";
import { Icon } from "./Icon";

export function IndustryCard({ industry }: { industry: Industry }) {
  return (
    <div className="border-t border-graphite/15 pt-6">
      <Icon name={industry.icon} className="h-6 w-6 text-zinc-gold" strokeWidth={1.5} />
      <h3 className="mt-3 font-display text-xl uppercase tracking-tight text-graphite">
        {industry.name}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-ink-soft">{industry.description}</p>
      <ul className="mt-3 flex flex-wrap gap-1.5">
        {industry.examples.map((ex) => (
          <li
            key={ex}
            className="rounded-sm border border-graphite/15 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-ink-soft"
          >
            {ex}
          </li>
        ))}
      </ul>
    </div>
  );
}
