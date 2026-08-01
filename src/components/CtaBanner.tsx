"use client";

import { useReveal } from "@/hooks/useReveal";
import { cn } from "@/lib/utils";

export function CtaBanner() {
  const { ref, visible } = useReveal<HTMLHeadingElement>();

  return (
    <section
      className="relative flex h-[400px] items-center justify-center bg-cover bg-center bg-fixed md:h-[500px] lg:h-[580px]"
      style={{ backgroundImage: "url(/images/cta-cows-banner.jpeg)" }}
    >
      <h2
        ref={ref}
        className={cn(
          "reveal px-4 text-center text-[28px] leading-[36px] font-semibold tracking-[1.6px] text-white md:text-[36px] md:leading-[44px] lg:text-[45px] lg:leading-[54px]",
          visible && "reveal-visible"
        )}
      >
        We try to Create
        <br />
        the Best Products
      </h2>
    </section>
  );
}
