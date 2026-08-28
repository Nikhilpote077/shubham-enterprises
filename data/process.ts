import { ProcessStep } from "@/types";

export const processSteps: ProcessStep[] = [
  {
    id: "step-1",
    step: 1,
    title: "Receiving & Inspection",
    description:
      "Incoming parts are counted, checked against the order and inspected for surface condition before processing begins.",
  },
  {
    id: "step-2",
    step: 2,
    title: "Pre-Treatment & Cleaning",
    description:
      "Parts are degreased and cleaned to remove oil, scale and contaminants so the zinc deposit bonds evenly across the surface.",
  },
  {
    id: "step-3",
    step: 3,
    title: "Zinc Electroplating",
    description:
      "Parts are processed through barrel or rack lines, depositing a controlled layer of zinc onto the base metal.",
  },
  {
    id: "step-4",
    step: 4,
    title: "Rinsing",
    description:
      "Multiple rinse stages remove residual plating-bath chemistry before the parts move to passivation.",
  },
  {
    id: "step-5",
    step: 5,
    title: "Passivation",
    description:
      "A chromate conversion coating is applied in the specified finish — yellow, blue-white, black, olive drab or clear — to seal the zinc and boost corrosion resistance.",
  },
  {
    id: "step-6",
    step: 6,
    title: "Drying & Inspection",
    description:
      "Parts are dried and visually inspected for coverage and finish consistency before final quality checks.",
  },
  {
    id: "step-7",
    step: 7,
    title: "Packing & Dispatch",
    description:
      "Finished parts are counted, packed as specified and dispatched or made ready for customer collection.",
  },
];
