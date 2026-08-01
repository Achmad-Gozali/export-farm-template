"use client";

import Image from "next/image";

import { useReveal } from "@/hooks/useReveal";
import { cn } from "@/lib/utils";

export function AboutSection() {
  const { ref: imageRef, visible: imageVisible } = useReveal<HTMLDivElement>();
  const { ref: contentRef, visible: contentVisible } =
    useReveal<HTMLDivElement>();

  return (
    <section id="about-section" className="bg-background py-16 md:py-24 lg:py-[120px]">
      <div className="container mx-auto grid items-center gap-12 px-6 md:grid-cols-2">
        <div
          ref={imageRef}
          className={cn("reveal", imageVisible && "reveal-visible")}
        >
          <Image
            src="/images/about-modern-farming.jpeg"
            alt="Pertanian modern"
            width={1100}
            height={589}
            className="h-auto w-full object-cover"
          />
        </div>

        <div
          ref={contentRef}
          className={cn(
            "reveal delay-150",
            contentVisible && "reveal-visible"
          )}
        >
          <p className="font-script text-[18px] font-medium italic text-black">
            Sayuran segar dan berkualitas
          </p>
          <h2 className="mt-3 text-[30px] font-medium tracking-[0.12em] text-black uppercase">
            Pertanian Modern
          </h2>
          <p className="mt-6 text-[16px] leading-[26px] text-black/60">
            Nativecode menghadirkan hasil pertanian organik pilihan yang
            diproses dengan standar modern, menjaga kesegaran dan nilai
            gizinya sejak dari kebun.
          </p>
          <p className="mt-4 text-[14px] leading-[26px] text-black/60">
            Kami bermitra dengan petani lokal terpercaya di berbagai daerah
            di Indonesia, menerapkan praktik pertanian berkelanjutan mulai
            dari penanaman hingga panen. Setiap produk yang sampai ke tangan
            Anda benar-benar alami, bebas bahan kimia berbahaya, dan diproses
            dengan penuh tanggung jawab.
          </p>
        </div>
      </div>
    </section>
  );
}
