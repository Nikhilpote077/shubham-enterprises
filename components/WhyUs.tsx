import { whyUs } from "@/data/why-us";
import { Container, SectionHeading } from "./ui";
import { Icon } from "./Icon";

export function WhyUs() {
  return (
    <section className="bg-paper-2/60 py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Why manufacturers work with us"
          title="Built Around the Finish, Not the Excuses"
        />
        <div className="mt-14 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {whyUs.map((item) => (
            <div key={item.title}>
              <Icon name={item.icon} className="h-6 w-6 text-zinc-gold" strokeWidth={1.5} />
              <h3 className="mt-4 font-display text-xl uppercase tracking-tight text-graphite">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{item.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
