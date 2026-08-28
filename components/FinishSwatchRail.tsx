import { finishes } from "@/data/finishes";
import { cn } from "@/lib/utils";

export function FinishSwatchRail({
  variant = "dark",
  showLabels = true,
  className,
}: {
  variant?: "dark" | "light";
  showLabels?: boolean;
  className?: string;
}) {
  return (
    <ul className={cn("flex flex-wrap gap-x-6 gap-y-3", className)}>
      {finishes.map((f) => (
        <li key={f.id} className="flex items-center gap-2">
          <span
            className="h-4 w-4 shrink-0 rounded-[3px] ring-1 ring-black/10"
            style={{ backgroundColor: f.hex }}
            aria-hidden="true"
          />
          {showLabels && (
            <span
              className={cn(
                "font-mono text-[11px] uppercase tracking-wider",
                variant === "dark" ? "text-white/70" : "text-ink-soft"
              )}
            >
              {f.name}
            </span>
          )}
        </li>
      ))}
    </ul>
  );
}
