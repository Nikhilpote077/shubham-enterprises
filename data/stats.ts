import { StatItem } from "@/types";

// Intentionally limited to facts that are true of the business as structured
// on this site (finish count, process steps, GST registration) rather than
// invented commercial metrics. Once real figures are available — years in
// operation, monthly processing capacity, on-time delivery rate — replace
// or extend this array; the StatStrip component will render any length.
export const stats: StatItem[] = [
  { id: "st1", label: "Standard Finishes", value: "5" },
  { id: "st2", label: "Plating Methods", value: "2", suffix: "Barrel & Rack" },
  { id: "st3", label: "QC Checkpoints", value: "7" },
  { id: "st4", label: "GST Registered", value: "29CMDPP9030J2ZM" },
];
