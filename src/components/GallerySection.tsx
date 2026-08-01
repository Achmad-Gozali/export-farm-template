"use client";

import Image from "next/image";
import { useReveal } from "@/hooks/useReveal";

interface GalleryCard {
  image: string;
  category: string;
  title: string;
}

const GALLERY_CARDS: GalleryCard[] = [
  {
    image: "/images/gallery-1-funny-lamb.jpeg",
    category: "Peternakan",
    title: "Domba yang Ceria",
  },
  {
    image: "/images/gallery-2-herd-of-cows.jpeg",
    category: "Ternak",
    title: "Kawanan Sapi",
  },
  {
    image: "/images/gallery-1-funny-lamb.jpeg",
    category: "Peternakan",
    title: "Domba yang Ceria",
  },
  {
    image: "/images/gallery-3-farm-work.jpeg",
    category: "Peternakan",
    title: "Aktivitas Panen",
  },
];

export function GallerySection() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="gallery-section" className="py-12 md:py-16 lg:py-20 bg-white">
      <div className="container mx-auto text-center px-6">
        <p className="italic font-script text-xl">Koleksi</p>
        <h2 className="font-sans text-[34px] font-medium tracking-[3.5px] uppercase">
          Galeri Kami
        </h2>
      </div>
      <div
        ref={ref}
        className={`mt-16 grid grid-cols-2 md:grid-cols-4 gap-0 reveal ${
          visible ? "reveal-visible" : ""
        }`}
      >
        {GALLERY_CARDS.map((card, index) => (
          <div
            key={`${card.title}-${index}`}
            className="relative overflow-hidden aspect-[325/440]"
          >
            <Image
              src={card.image}
              alt={card.title}
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              className="object-cover transition-transform duration-300 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-6 left-0 right-0 text-center text-white">
              <p className="font-script text-white/90 text-lg">{card.category}</p>
              <p className="font-sans font-semibold text-lg">{card.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
