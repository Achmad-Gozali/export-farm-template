"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface HeroSlide {
  src: string;
  alt: string;
}

const SLIDES: HeroSlide[] = [
  {
    src: "/images/hero-slide-1.jpeg",
    alt: "Alpine meadow and farmhouse landscape",
  },
  {
    src: "/images/hero-slide-2.jpeg",
    alt: "Alpine meadow and farmhouse landscape",
  },
];

const AUTOPLAY_INTERVAL_MS = 7000;

export function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % SLIDES.length);
    }, AUTOPLAY_INTERVAL_MS);

    return () => clearInterval(timer);
  }, [activeIndex]);

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section
      id="home-section"
      className="relative w-full h-[70vh] min-h-[500px] max-h-[770px] overflow-hidden"
    >
      {SLIDES.map((slide, index) => (
        <div
          key={slide.src}
          aria-hidden={index !== activeIndex}
          className={`absolute inset-0 transition-opacity duration-[800ms] ease-in-out ${
            index === activeIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            priority={index === 0}
            className="object-cover"
          />
        </div>
      ))}

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <p className="font-script italic text-[22px] font-semibold text-white mb-2 sm:mb-3">
          The Taste Of Nature
        </p>
        <h1 className="font-sans uppercase text-3xl sm:text-4xl md:text-5xl lg:text-[60px] font-medium text-white tracking-[0.2em] leading-[1.2]">
          Natural, fresh and
          <br />
          locally sourced
        </h1>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {SLIDES.map((_, index) => (
          <button
            key={index}
            type="button"
            aria-label={`Slide ${index + 1}`}
            onClick={() => handleDotClick(index)}
            className={`h-2 w-2 rounded-full transition-colors duration-300 ${
              index === activeIndex ? "bg-white" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
