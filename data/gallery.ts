import { GalleryItem } from "@/types";

// Phase 1 placeholder set. Each item renders as a generated placeholder
// tile until real photography is supplied — see components/GalleryTile.tsx.
export const galleryItems: GalleryItem[] = [
  { id: "g1", title: "Plating Line", category: "machinery", caption: "Barrel plating line" },
  { id: "g2", title: "Rack Line", category: "machinery", caption: "Rack plating setup" },
  { id: "g3", title: "Rinse Stage", category: "process", caption: "Multi-stage rinsing" },
  { id: "g4", title: "Passivation Bath", category: "process", caption: "Chromate passivation" },
  { id: "g5", title: "Finished Fasteners", category: "parts", caption: "Yellow-passivate hex bolts" },
  { id: "g6", title: "Finished Brackets", category: "parts", caption: "Black-zinc brackets" },
  { id: "g7", title: "Factory Floor", category: "infrastructure", caption: "Udyambag facility" },
  { id: "g8", title: "Dispatch Area", category: "infrastructure", caption: "Packing & dispatch" },
];
