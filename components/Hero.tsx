import { company } from "@/data/company";
import { stats } from "@/data/stats";
import { Container, Button, Eyebrow } from "./ui";
import { FinishSwatchRail } from "./FinishSwatchRail";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-graphite text-paper">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, #f2f2ef 0, #f2f2ef 1px, transparent 1px, transparent 22px)",
        }}
        aria-hidden="true"
      />
      <Container className="relative py-20 sm:py-28">
        <Eyebrow>Metal Finishing &middot; Belagavi, Karnataka</Eyebrow>
        <h1 className="mt-4 max-w-4xl font-display text-5xl uppercase leading-[0.98] tracking-tight sm:text-7xl text-balance">
          {company.tagline}
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-steel-light sm:text-lg">
          {company.name} provides zinc electroplating and passivation job-work for
          fasteners, automotive components and industrial hardware — from single trial
          batches to ongoing bulk production, out of our Udyambag facility.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Button href="/contact" variant="primary">
            Request a Quote
          </Button>
          <Button href="/services" variant="ghost-light">
            View Capabilities
          </Button>
        </div>

        <div className="mt-14">
          <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.16em] text-steel-light">
            Standard finishes
          </p>
          <FinishSwatchRail variant="dark" />
        </div>
      </Container>

      <div className="swatch-rule" />

      {/* Spec-plate strip: an engraved-nameplate treatment for verifiable facts */}
      <Container>
        <dl className="grid grid-cols-2 divide-x divide-white/10 border-b border-white/10 py-6 sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.id} className="px-4 first:pl-0 sm:px-6">
              <dt className="font-mono text-[10px] uppercase tracking-[0.14em] text-steel-light">
                {s.label}
              </dt>
              <dd className="mt-1 font-display text-xl uppercase tracking-tight text-zinc-gold sm:text-2xl truncate">
                {s.value}
              </dd>
              {s.suffix && <p className="text-[11px] text-steel-light">{s.suffix}</p>}
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
