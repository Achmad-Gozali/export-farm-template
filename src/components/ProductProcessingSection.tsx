"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { useReveal } from "@/hooks/useReveal";

const TIMELINE_ITEMS = [
  "2002 — Menjalin kemitraan dengan petani organik lokal pertama",
  "2009 — Memperluas jaringan distribusi ke seluruh Indonesia",
  "2012 — Meraih sertifikasi standar mutu ekspor internasional",
];

export function ProductProcessingSection() {
  const { ref: textRef, visible: textVisible } = useReveal<HTMLDivElement>();
  const { ref: photoRef, visible: photoVisible } = useReveal<HTMLDivElement>(150);

  return (
    <section className="py-16 md:py-20 lg:py-[100px]">
      <div className="container mx-auto grid items-center gap-16 px-6 md:grid-cols-2">
        <div
          ref={textRef}
          className={cn("reveal", textVisible && "reveal-visible")}
        >
          <p className="font-script text-[18px] italic text-ink">
            Ditanam dengan Penuh Perhatian
          </p>
          <h2 className="mt-3 font-sans text-[30px] font-medium uppercase tracking-[3.5px] text-ink">
            Proses Produk Organik
          </h2>
          <p className="mt-5 font-sans text-[15px] text-black/61">
            Setiap produk melalui proses pengolahan yang higienis dan
            terstandarisasi, mulai dari pemanenan hingga pengemasan, untuk
            memastikan kualitas terbaik sampai ke tangan konsumen.
          </p>
          <ul className="mt-5 list-disc space-y-2 pl-5 font-sans text-[15px] text-black/61">
            {TIMELINE_ITEMS.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <h5 className="mt-8 font-sans text-[24px] font-medium uppercase tracking-[3.5px] text-ink">
            Penghargaan Kualitas
          </h5>
          <Image
            src="/images/quality-awards.png"
            alt="Penghargaan kualitas"
            width={300}
            height={71}
            className="mt-5 h-auto w-[300px] max-w-full"
          />
        </div>
        <div
          ref={photoRef}
          className={cn(
            "reveal bg-white p-[10px]",
            photoVisible && "reveal-visible"
          )}
        >
          <Image
            src="/images/product-processing.jpg"
            alt="Organic product processing"
            width={900}
            height={716}
            className="h-auto w-full"
          />
        </div>
      </div>
    </section>
  );
}
