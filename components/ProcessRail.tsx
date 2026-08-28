import { processSteps } from "@/data/process";
import { Container, SectionHeading } from "./ui";

export function ProcessRail() {
  return (
    <section className="bg-graphite py-20 text-paper sm:py-28">
      <Container>
        <SectionHeading
          tone="dark"
          eyebrow="How parts are processed"
          title="Seven Stages, One Line"
          description="Every batch moves through the same sequence — from intake to dispatch — so finish quality stays consistent order to order."
        />

        <ol className="mt-14 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step) => (
            <li key={step.id} className="border-t border-white/15 pt-5">
              <span className="font-mono text-xs text-zinc-gold">
                {String(step.step).padStart(2, "0")}
              </span>
              <h3 className="mt-2 font-display text-xl uppercase tracking-tight">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-steel-light">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
