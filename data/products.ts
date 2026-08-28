import { Product } from "@/types";

// Demo data for Phase 1. Each record mirrors the shape a future admin panel
// (Phase 2) would write to a database, so the UI will not need to change
// when this array is replaced by an API call.
export const products: Product[] = [
  {
    id: "p1",
    slug: "hex-bolts-yellow-zinc",
    name: "Hex Bolts — Yellow Zinc",
    categoryId: "fasteners",
    summary: "Hex head bolts finished in yellow chromate passivate.",
    description:
      "High-tensile hex bolts plated with a yellow chromate passivate for reliable corrosion resistance in general industrial and structural applications.",
    specs: [
      { label: "Size range", value: "M4 – M24" },
      { label: "Base material", value: "Mild steel / high-tensile steel" },
      { label: "Coating thickness", value: "5–12 microns (as specified)" },
      { label: "Standard", value: "As per IS 1364 / customer drawing" },
    ],
    finishes: ["yellow", "blue-white", "black"],
    featured: true,
    status: "active",
  },
  {
    id: "p2",
    slug: "washers-bright-zinc",
    name: "Flat & Spring Washers — Bright Zinc",
    categoryId: "fasteners",
    summary: "Flat and spring washers in a bright, blue-white finish.",
    description:
      "Flat and spring washers processed in bulk barrel lines for a consistent bright zinc appearance, suited to high-volume fastener supply.",
    specs: [
      { label: "Size range", value: "M3 – M20" },
      { label: "Process", value: "Barrel plating" },
      { label: "Coating thickness", value: "5–8 microns" },
      { label: "Packing", value: "As per customer requirement" },
    ],
    finishes: ["blue-white", "clear"],
    featured: true,
    status: "active",
  },
  {
    id: "p3",
    slug: "auto-brackets-black-zinc",
    name: "Mounting Brackets — Black Zinc",
    categoryId: "auto-components",
    summary: "Stamped mounting brackets finished in black zinc.",
    description:
      "Automotive mounting and support brackets rack-plated for uniform coverage on formed edges and welded joints, finished in black chromate.",
    specs: [
      { label: "Process", value: "Rack plating" },
      { label: "Base material", value: "Cold-rolled steel" },
      { label: "Coating thickness", value: "8–15 microns" },
      { label: "Inspection", value: "Salt-spray test on request" },
    ],
    finishes: ["black", "yellow"],
    featured: true,
    status: "active",
  },
  {
    id: "p4",
    slug: "leaf-spring-clamps-od",
    name: "Leaf Spring Clamps — Olive Drab",
    categoryId: "auto-components",
    summary: "Heavy-duty clamps finished in olive drab for high-corrosion use.",
    description:
      "Leaf spring U-clamps and related suspension hardware finished in olive drab chromate for extended service life in demanding conditions.",
    specs: [
      { label: "Base material", value: "Medium carbon steel" },
      { label: "Coating thickness", value: "10–20 microns" },
      { label: "Hydrogen embrittlement relief", value: "Available on request" },
    ],
    finishes: ["olive-drab"],
    status: "active",
  },
  {
    id: "p5",
    slug: "sheet-metal-enclosures",
    name: "Sheet Metal Enclosures & Panels",
    categoryId: "sheet-metal",
    summary: "Fabricated panels and enclosures plated for corrosion protection.",
    description:
      "Sheet-metal enclosures, panels and covers plated to protect welded and formed surfaces from corrosion prior to painting or final assembly.",
    specs: [
      { label: "Max part size", value: "Up to 900 x 600 x 400 mm (rack)" },
      { label: "Base material", value: "MS sheet, 0.8–3 mm" },
      { label: "Coating thickness", value: "8–15 microns" },
    ],
    finishes: ["clear", "yellow"],
    status: "active",
  },
  {
    id: "p6",
    slug: "turned-components",
    name: "Turned & Machined Components",
    categoryId: "engineering-parts",
    summary: "Precision turned parts finished for corrosion resistance.",
    description:
      "Turned and machined components from local job-shops, finished to protect close-tolerance surfaces while maintaining dimensional accuracy.",
    specs: [
      { label: "Process", value: "Barrel or rack, based on geometry" },
      { label: "Coating thickness", value: "5–10 microns" },
      { label: "Tolerance-sensitive parts", value: "Masking available" },
    ],
    finishes: ["clear", "blue-white"],
    status: "active",
  },
];
