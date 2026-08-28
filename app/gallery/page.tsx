import type { Metadata } from "next";
import { Container, Eyebrow } from "@/components/ui";
import { GalleryGrid } from "@/components/GalleryGrid";
import { CTASection } from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "A look at Shubham Enterprises' plating lines, finishing process and finished parts at the Udyambag, Belagavi facility.",
  alternates: { canonical: "/gallery" },
};

export default function GalleryPage() {
  return (
    <>
      <section className="bg-graphite py-16 text-paper sm:py-20">
        <Container>
          <Eyebrow>Inside the shop</Eyebrow>
          <h1 className="mt-4 max-w-2xl font-display text-5xl uppercase leading-[1] tracking-tight sm:text-6xl">
            Gallery
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-steel-light">
            Production photography for this section is being prepared — the tiles below
            are placeholders marking where machinery, process and finished-part photos
            will go.
          </p>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <GalleryGrid />
        </Container>
      </section>

      <CTASection />
    </>
  );
}
