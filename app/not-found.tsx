import { Container, Button } from "@/components/ui";

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] items-center bg-graphite text-paper">
      <Container className="py-24 text-center">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-zinc-gold">404</p>
        <h1 className="mt-4 font-display text-5xl uppercase tracking-tight sm:text-6xl">
          Page Not Found
        </h1>
        <p className="mx-auto mt-4 max-w-md text-steel-light">
          The page you&apos;re looking for doesn&apos;t exist or may have moved.
        </p>
        <Button href="/" variant="primary" className="mt-8">
          Back to Home
        </Button>
      </Container>
    </section>
  );
}
