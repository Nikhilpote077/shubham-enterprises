import { Industry } from "@/types";

export const industries: Industry[] = [
  {
    id: "i1",
    slug: "automotive",
    name: "Automotive & Auto Components",
    description:
      "Brackets, clamps, fasteners and sheet-metal parts for OEM and aftermarket automotive supply chains around the Belagavi–Hubballi manufacturing belt.",
    examples: ["Mounting brackets", "Leaf spring hardware", "Fasteners", "Sheet-metal covers"],
    icon: "car",
  },
  {
    id: "i2",
    slug: "fasteners-hardware",
    name: "Fastener & Hardware Manufacturing",
    description:
      "High-volume plating for fastener manufacturers and traders who need consistent finish and reliable turnaround on repeat orders.",
    examples: ["Bolts & screws", "Nuts", "Washers", "Pins & clips"],
    icon: "bolt",
  },
  {
    id: "i3",
    slug: "general-engineering",
    name: "General Engineering & Fabrication",
    description:
      "Job-shops and fabricators in and around Udyambag Industrial Area sending machined and fabricated parts for corrosion-protective finishing.",
    examples: ["Machined components", "Weldments", "Panels & enclosures"],
    icon: "cog",
  },
  {
    id: "i4",
    slug: "construction-infrastructure",
    name: "Construction & Infrastructure Hardware",
    description:
      "Structural fasteners and hardware finished for outdoor exposure and long-term corrosion resistance.",
    examples: ["Structural bolts", "Anchor hardware", "Fixings"],
    icon: "building",
  },
];
