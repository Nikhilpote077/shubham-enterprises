import { Service } from "@/types";

export const services: Service[] = [
  {
    id: "s1",
    slug: "zinc-electroplating",
    title: "Zinc Electroplating",
    summary:
      "Rack and barrel zinc plating for corrosion protection on ferrous components.",
    description:
      "Our core process — electrodeposition of a controlled zinc layer onto steel and iron parts, giving a durable barrier against rust and moisture. We run both barrel lines for small, high-volume hardware and rack lines for larger or more delicate components.",
    benefits: [
      "Consistent, specification-matched coating thickness",
      "Barrel and rack processing to suit part size and volume",
      "Reliable turnaround for repeat production orders",
    ],
    applications: ["Fasteners", "Automotive brackets", "Sheet-metal parts", "Machined components"],
    icon: "layers",
  },
  {
    id: "s2",
    slug: "passivation-chromate-conversion",
    title: "Passivation & Chromate Conversion",
    summary:
      "Post-plate chromate treatments in yellow, blue-white, black and olive drab.",
    description:
      "After plating, parts are passivated to seal the zinc deposit and add further corrosion resistance. We offer the full range of standard finishes so a single order can be matched to your drawing or an existing approved sample.",
    benefits: [
      "Five standard finish tones — yellow, blue-white, black, olive drab, clear",
      "Improved corrosion resistance over bare zinc",
      "Consistent colour matching across production batches",
    ],
    applications: ["Fasteners", "Automotive hardware", "Defence & off-road components"],
    icon: "sparkles",
  },
  {
    id: "s3",
    slug: "barrel-and-rack-plating",
    title: "Barrel & Rack Plating",
    summary:
      "Process selection based on part geometry, volume and finish sensitivity.",
    description:
      "Small, robust hardware is processed in bulk through barrel lines for efficient, high-volume throughput. Larger, delicate or cosmetically sensitive parts are individually racked for controlled, uniform coverage — including on welds, edges and recesses.",
    benefits: [
      "Right process matched to part design",
      "Uniform coverage on complex geometries",
      "Reduced risk of part-on-part contact marks for sensitive components",
    ],
    applications: ["High-volume fasteners", "Formed brackets", "Panels & enclosures"],
    icon: "cog",
  },
  {
    id: "s4",
    slug: "job-work-bulk-processing",
    title: "Job-Work & Bulk Processing",
    summary:
      "Contract plating for manufacturers, fabricators and trading businesses.",
    description:
      "We process customer-supplied parts as job-work — from a single trial batch to ongoing bulk production — with clear handling, counting and dispatch practices for consignment material.",
    benefits: [
      "Trial batches available before committing to bulk orders",
      "Transparent handling of customer-supplied material",
      "Scales from small trial lots to recurring bulk orders",
    ],
    applications: ["Fastener traders", "Auto-component manufacturers", "Local fabrication shops"],
    icon: "package",
  },
  {
    id: "s5",
    slug: "quality-inspection",
    title: "Quality Checks & Inspection",
    summary:
      "Coating thickness and finish verification before dispatch.",
    description:
      "Plated batches are visually inspected for coverage, colour consistency and coating defects before dispatch. Salt-spray corrosion testing and coating-thickness verification can be arranged for orders that require documented results.",
    benefits: [
      "Batch-level visual inspection as standard",
      "Salt-spray and thickness testing available on request",
      "Defect batches flagged and reworked before dispatch",
    ],
    applications: ["Specification-driven OEM orders", "Export-bound consignments"],
    icon: "check",
  },
  {
    id: "s6",
    slug: "hydrogen-embrittlement-relief",
    title: "Hydrogen Embrittlement Relief",
    summary: "Post-plate baking for high-tensile and load-bearing parts.",
    description:
      "High-tensile fasteners and structural components can absorb hydrogen during plating, which increases the risk of delayed cracking under load. We offer post-plate baking to relieve embrittlement on parts that require it.",
    benefits: [
      "Reduces delayed-cracking risk on high-tensile parts",
      "Recommended for load-bearing automotive and structural hardware",
    ],
    applications: ["High-tensile bolts", "Springs", "Structural fasteners"],
    icon: "gauge",
  },
];
