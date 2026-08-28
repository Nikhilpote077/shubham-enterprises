import { FinishSwatch } from "@/types";

// These finish tones are the site's recurring visual motif — real zinc
// passivate colours, not decoration. Referenced by id from products.ts.
export const finishes: FinishSwatch[] = [
  {
    id: "yellow",
    name: "Yellow Passivate",
    hex: "#C9A227",
    description:
      "Iridescent gold-yellow chromate coating with strong corrosion resistance. The most common finish for fasteners and general hardware.",
  },
  {
    id: "blue-white",
    name: "Blue-White / Bright Zinc",
    hex: "#8FA6B8",
    description:
      "A bright, clear-to-blue passivate for a clean, decorative appearance where a lighter finish is required.",
  },
  {
    id: "black",
    name: "Black Zinc",
    hex: "#2B2E31",
    description:
      "A deep black chromate finish used where a matte, low-reflectance appearance is specified.",
  },
  {
    id: "olive-drab",
    name: "Olive Drab (OD)",
    hex: "#5C5A3D",
    description:
      "High corrosion-resistance military and heavy-duty finish, typically specified for defence and off-road applications.",
  },
  {
    id: "clear",
    name: "Clear / Silver",
    hex: "#B9BEC2",
    description:
      "A natural, silver-white zinc deposit with a transparent or lightly blue-tinted passivate layer.",
  },
];
