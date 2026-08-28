// Central data models. Keeping these separate from UI components means the
// static arrays in /data can later be swapped for API/database calls
// (Phase 2 admin panel) without changing how components consume the data.

export interface FinishSwatch {
  id: string;
  name: string;
  hex: string;
  description: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  categoryId: string;
  summary: string;
  description: string;
  specs: { label: string; value: string }[];
  finishes: string[]; // FinishSwatch ids
  featured?: boolean;
  status: "active" | "draft";
}

export interface ProductCategory {
  id: string;
  slug: string;
  name: string;
  description: string;
}

export interface Service {
  id: string;
  slug: string;
  title: string;
  summary: string;
  description: string;
  benefits: string[];
  applications: string[];
  icon: IconName;
}

export interface Industry {
  id: string;
  slug: string;
  name: string;
  description: string;
  examples: string[];
  icon: IconName;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: "machinery" | "infrastructure" | "process" | "parts" | "team";
  caption: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
}

export interface StatItem {
  id: string;
  label: string;
  value: string;
  suffix?: string;
}

export interface ProcessStep {
  id: string;
  step: number;
  title: string;
  description: string;
}

export type IconName =
  | "flask"
  | "shield"
  | "gauge"
  | "layers"
  | "sparkles"
  | "truck"
  | "cog"
  | "bolt"
  | "car"
  | "wrench"
  | "building"
  | "sun"
  | "droplet"
  | "package"
  | "check"
  | "pin"
  | "phone"
  | "mail"
  | "clock";
