"use client";

import type { LucideIcon } from "lucide-react";
import { Leaf, Shovel, Sprout, Wheat } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

const FEATURES: Feature[] = [
  {
    icon: Sprout,
    title: "Tumbuh Organik",
    description: "Ditanam tanpa pestisida kimia demi hasil panen yang alami.",
  },
  {
    icon: Shovel,
    title: "Rencana Panen",
    description: "Dijadwalkan cermat agar panen tepat waktu dan tetap segar.",
  },
  {
    icon: Wheat,
    title: "Penanaman Benih",
    description: "Bibit unggul pilihan untuk pertumbuhan yang sehat dan optimal.",
  },
  {
    icon: Leaf,
    title: "Perawatan Tanaman",
    description: "Dirawat teliti di tiap tahap hingga siap didistribusikan.",
  },
];

interface FeatureColProps extends Feature {
  delayMs: number;
}

function FeatureCol({ icon: Icon, title, description, delayMs }: FeatureColProps) {
  const { ref, visible } = useReveal<HTMLDivElement>(delayMs);

  return (
    <div
      ref={ref}
      className={`reveal flex flex-col items-center text-center ${
        visible ? "reveal-visible" : ""
      }`}
    >
      <Icon className="h-[60px] w-[60px] stroke-[1.25] text-foreground" />
      <h3 className="mt-5 font-sans text-[18px] font-medium uppercase tracking-[3.5px] text-black md:mt-6">
        {title}
      </h3>
      <p className="mx-auto mt-3 max-w-[240px] font-sans text-[15px] font-light leading-[26px] text-black/61">
        {description}
      </p>
    </div>
  );
}

export function FeaturesSection() {
  return (
    <section
      className="py-12 md:py-20 lg:py-[100px]"
      style={{ backgroundColor: "rgba(243,238,233,0.7)" }}
    >
      <div className="container mx-auto grid grid-cols-2 gap-10 px-6 text-center md:grid-cols-4">
        {FEATURES.map((feature, index) => (
          <FeatureCol key={feature.title} {...feature} delayMs={index * 100} />
        ))}
      </div>
    </section>
  );
}
