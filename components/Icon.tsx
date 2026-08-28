import {
  FlaskConical,
  ShieldCheck,
  Gauge,
  Layers,
  Sparkles,
  Truck,
  Cog,
  Zap,
  Car,
  Wrench,
  Building2,
  Sun,
  Droplet,
  Package,
  CheckCircle2,
  MapPin,
  Phone,
  Mail,
  Clock,
  type LucideProps,
} from "lucide-react";
import type { IconName } from "@/types";

const map: Record<IconName, React.ComponentType<LucideProps>> = {
  flask: FlaskConical,
  shield: ShieldCheck,
  gauge: Gauge,
  layers: Layers,
  sparkles: Sparkles,
  truck: Truck,
  cog: Cog,
  bolt: Zap,
  car: Car,
  wrench: Wrench,
  building: Building2,
  sun: Sun,
  droplet: Droplet,
  package: Package,
  check: CheckCircle2,
  pin: MapPin,
  phone: Phone,
  mail: Mail,
  clock: Clock,
};

export function Icon({ name, ...props }: { name: IconName } & LucideProps) {
  const Cmp = map[name];
  return <Cmp {...props} />;
}
