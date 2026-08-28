import { company } from "@/data/company";
import { Container, Button } from "./ui";

export function CTASection({
  title = "Have parts that need a consistent finish?",
  description = "Send us your drawing or a sample part and we'll confirm the right process, finish and turnaround.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="bg-zinc-gold py-16 sm:py-20">
      <Container className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
        <div className="max-w-xl">
          <h2 className="font-display text-3xl uppercase leading-tight tracking-tight text-graphite sm:text-4xl text-balance">
            {title}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-graphite/80 sm:text-base">{description}</p>
        </div>
        <div className="flex flex-wrap gap-4">
          <Button
            href="/contact"
            variant="secondary"
            className="border-graphite bg-graphite text-paper hover:bg-graphite/85 hover:text-paper"
          >
            Request a Quote
          </Button>
          <a
            href={`tel:${company.contact.phone.replace(/\s/g, "")}`}
            className="inline-flex items-center justify-center gap-2 rounded-sm border border-graphite px-6 py-3 font-mono text-xs uppercase tracking-[0.14em] text-graphite hover:bg-graphite hover:text-paper"
          >
            Call {company.contact.phoneDisplay}
          </a>
        </div>
      </Container>
    </section>
  );
}
