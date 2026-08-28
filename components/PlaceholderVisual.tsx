import { Icon } from "./Icon";
import type { IconName } from "@/types";
import { cn } from "@/lib/utils";

/**
 * Stands in for real product / factory photography in Phase 1. Renders a
 * branded technical-texture tile with an icon, rather than a fake stock
 * photo. Swap for <Image> once real assets are supplied — see the
 * "Sample visual" badge, which should be removed once real photos load.
 */
export function PlaceholderVisual({
  icon = "layers",
  tone = "graphite",
  label,
  className,
  dense = false,
}: {
  icon?: IconName;
  tone?: "graphite" | "gold" | "steel" | "paper";
  label?: string;
  className?: string;
  dense?: boolean;
}) {
  const tones: Record<string, { bg: string; fg: string; line: string }> = {
    graphite: { bg: "#1d2126", fg: "#c9a227", line: "rgba(242,242,239,0.08)" },
    gold: { bg: "#c9a227", fg: "#14171a", line: "rgba(20,23,26,0.14)" },
    steel: { bg: "#4a5a68", fg: "#f2f2ef", line: "rgba(242,242,239,0.14)" },
    paper: { bg: "#e7e7e2", fg: "#14171a", line: "rgba(20,23,26,0.08)" },
  };
  const t = tones[tone];
  const patternId = `diag-${tone}-${dense ? "d" : "n"}`;

  return (
    <div
      className={cn(
        "relative flex aspect-[4/3] w-full items-center justify-center overflow-hidden rounded-sm",
        className
      )}
      style={{ background: t.bg }}
      role="img"
      aria-label={label ?? "Placeholder visual — production photography to be added"}
    >
      <svg className="absolute inset-0 h-full w-full" aria-hidden="true">
        <defs>
          <pattern
            id={patternId}
            width={dense ? 10 : 18}
            height={dense ? 10 : 18}
            patternTransform="rotate(45)"
            patternUnits="userSpaceOnUse"
          >
            <line x1="0" y1="0" x2="0" y2={dense ? 10 : 18} stroke={t.line} strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#${patternId})`} />
      </svg>
      <Icon name={icon} className="relative h-10 w-10 opacity-80" style={{ color: t.fg }} strokeWidth={1.5} />
      <span className="absolute bottom-2 right-2 rounded-sm bg-black/30 px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-wider text-white/70">
        Sample visual
      </span>
    </div>
  );
}
