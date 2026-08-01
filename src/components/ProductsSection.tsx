"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { useReveal } from "@/hooks/useReveal";

interface Product {
  name: string;
  image: string;
  description: string;
}

const DESCRIPTION =
  "Ballan wrasse climbing gourami amur pike Arctic char.";

const PRODUCTS: Product[] = [
  { name: "Milk", image: "/images/product-milk.jpeg", description: DESCRIPTION },
  { name: "Kefir", image: "/images/product-kefir.jpeg", description: DESCRIPTION },
  {
    name: "Goat Cheese",
    image: "/images/product-goat-cheese.jpeg",
    description: DESCRIPTION,
  },
  { name: "Butter", image: "/images/product-butter.jpeg", description: DESCRIPTION },
];

function ProductCard({ product, delayMs }: { product: Product; delayMs: number }) {
  const card = useReveal<HTMLDivElement>(delayMs);

  return (
    <div
      ref={card.ref}
      className={cn(
        "reveal bg-white px-6 pt-10 pb-10 text-center",
        card.visible && "reveal-visible"
      )}
    >
      <Image
        src={product.image}
        alt={product.name}
        width={280}
        height={280}
        className="mx-auto h-[220px] w-auto object-contain"
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
  const heading = useReveal<HTMLDivElement>();

  return (
    <section id="product-section" className="pt-20">
      <div
        ref={heading.ref}
        className={cn(
          "reveal container mx-auto px-6 text-center",
          heading.visible && "reveal-visible"
        )}
      >
        <p className="font-script text-[18px] italic text-ink">
          Most Popular Products
        </p>
        <h2 className="mt-3 font-sans text-[30px] font-medium uppercase tracking-[3.5px] text-ink">
          Organic Products
        </h2>
        <p className="mx-auto mt-5 max-w-xl font-sans text-[15px] text-black/61">
          Sed ut perspiciatis aperiam unde omnis istetus error volupta
          dolorem que laudantium, totam rem.
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
