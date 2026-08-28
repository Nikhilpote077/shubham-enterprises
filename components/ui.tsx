import Link from "next/link";
import { cn } from "@/lib/utils";

export function Container({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return <div className={cn("mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10", className)}>{children}</div>;
}

export function Eyebrow({
  children,
  variant = "dark",
  className,
}: {
  children: React.ReactNode;
  variant?: "dark" | "light";
  className?: string;
}) {
  return (
    <span
      className={cn(
        "font-mono text-xs uppercase tracking-[0.18em]",
        variant === "dark" ? "text-zinc-gold" : "text-zinc-gold-bright",
        className
      )}
    >
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "light",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
}) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center")}>
      {eyebrow && <Eyebrow className="mb-3 block">{eyebrow}</Eyebrow>}
      <h2
        className={cn(
          "font-display text-4xl uppercase leading-[1.05] tracking-tight sm:text-5xl text-balance",
          tone === "light" ? "text-graphite" : "text-paper"
        )}
      >
        {title}
      </h2>
      {description && (
        <p className={cn("mt-4 text-base leading-relaxed sm:text-lg", tone === "light" ? "text-ink-soft" : "text-steel-light")}>
          {description}
        </p>
      )}
    </div>
  );
}

export function Button({
  href,
  children,
  variant = "primary",
  className,
  ...props
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost-light";
  className?: string;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-sm px-6 py-3 font-mono text-xs uppercase tracking-[0.14em] transition-colors duration-150";
  const variants: Record<string, string> = {
    primary: "bg-zinc-gold text-graphite hover:bg-zinc-gold-bright",
    secondary: "border border-graphite text-graphite hover:bg-graphite hover:text-paper",
    "ghost-light": "border border-white/30 text-paper hover:border-zinc-gold hover:text-zinc-gold",
  };
  return (
    <Link href={href} className={cn(base, variants[variant], className)} {...props}>
      {children}
    </Link>
  );
}

export function Card({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <div className={cn("border border-graphite/10 bg-white/60 backdrop-blur-sm", className)}>
      {children}
    </div>
  );
}
