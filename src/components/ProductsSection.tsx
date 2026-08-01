"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { useReveal } from "@/hooks/useReveal";

interface Product {
  name: string;
  image: string;
  description: string;
}

const PRODUCTS: Product[] = [
  {
    name: "Susu",
    image: "/images/product-milk.jpeg",
    description: "Susu segar dari peternakan lokal tanpa bahan pengawet.",
  },
  {
    name: "Kefir",
    image: "/images/product-kefir.jpeg",
    description: "Minuman fermentasi probiotik alami, baik untuk pencernaan.",
  },
  {
    name: "Keju Kambing",
    image: "/images/product-goat-cheese.jpeg",
    description: "Keju kambing premium bertekstur lembut dan gurih.",
  },
  {
    name: "Mentega",
    image: "/images/product-butter.jpeg",
    description: "Mentega olahan alami, kaya rasa untuk berbagai hidangan.",
  },
];

function ProductCard({ product, delayMs }: { product: Product; delayMs: number }) {
  const { ref, visible } = useReveal<HTMLDivElement>(delayMs);

  return (
    <div
      ref={ref}
      className={cn(
        "group reveal bg-white px-6 pt-10 pb-10 text-center transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-lg",
        visible && "reveal-visible"
      )}
    >
      <Image
        src={product.image}
        alt={product.name}
        width={280}
        height={280}
        className="mx-auto h-[220px] w-auto object-contain transition-transform duration-300 ease-out group-hover:scale-105"
      />
      <h3 className="mt-8 font-sans text-[20px] font-medium uppercase tracking-[2.5px] text-[#334b35]">
        {product.name}
      </h3>
      <p className="mt-2 font-sans text-[15px] text-black/61">
        {product.description}
      </p>
    </div>
  );
}

export function ProductsSection() {
  const { ref: headingRef, visible: headingVisible } = useReveal<HTMLDivElement>();

  return (
    <section id="product-section" className="pt-20">
      <div
        ref={headingRef}
        className={cn(
          "reveal container mx-auto px-6 text-center",
          headingVisible && "reveal-visible"
        )}
      >
        <p className="font-script text-[18px] italic text-ink">
          Produk Terpopuler
        </p>
        <h2 className="mt-3 font-sans text-[30px] font-medium uppercase tracking-[3.5px] text-ink">
          Produk Organik
        </h2>
        <p className="mx-auto mt-5 max-w-xl font-sans text-[15px] text-black/61">
          Rangkaian produk susu dan olahan organik pilihan, diproses secara
          alami untuk menjaga cita rasa dan kandungan gizinya.
        </p>
      </div>
      <div className="container mx-auto mt-16 grid grid-cols-2 gap-8 px-6 pb-20 md:grid-cols-4">
        {PRODUCTS.map((product, index) => (
          <ProductCard key={product.name} product={product} delayMs={index * 100} />
        ))}
      </div>
    </section>
  );
}
