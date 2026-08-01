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
            alt="Modern farming"
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
            Tasty and fresh greens
          </p>
          <h2 className="mt-3 text-[30px] font-medium tracking-[0.12em] text-black uppercase">
            Modern Farming
          </h2>
          <p className="mt-6 text-[16px] leading-[26px] text-black/60">
            Sed ut perspiciatis aperiam unde omnis istetus error volupta
            dolorem que, totam rem unde omnis.
          </p>
          <p className="mt-4 text-[14px] leading-[26px] text-black/60">
            Lorem ipsum incididunt ut labore et dolore magna aliqua dolor sit
            amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad dolore
            magna aliqua minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo.
          </p>
        </div>
      </div>
    </section>
  );
}
