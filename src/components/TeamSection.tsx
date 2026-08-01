"use client";

import Image from "next/image";

import { useReveal } from "@/hooks/useReveal";
import { cn } from "@/lib/utils";

interface TeamMember {
  image: string;
  name: string;
  role: string;
}

const TEAM_MEMBERS: TeamMember[] = [
  {
    image: "/images/team-tom-fill.jpeg",
    name: "Tom Fill",
    role: "Pendiri & Pemilik",
  },
  {
    image: "/images/team-sam-jack.jpeg",
    name: "Sam Jack",
    role: "Pemanen",
  },
  {
    image: "/images/team-nick-jon.jpeg",
    name: "Nick Jon",
    role: "Petani",
  },
  {
    image: "/images/team-mark-ten.jpeg",
    name: "Mark Ten",
    role: "Pemanen",
  },
];

interface TeamCardProps extends TeamMember {
  delayMs: number;
}

function TeamCard({ image, name, role, delayMs }: TeamCardProps) {
  const { ref, visible } = useReveal<HTMLDivElement>(delayMs);

  return (
    <div
      ref={ref}
      className={cn("reveal text-center", visible && "reveal-visible")}
    >
      <div className="overflow-hidden">
        <Image
          src={image}
          alt={name}
          width={280}
          height={280}
          className="w-full aspect-square object-cover transition-transform duration-300 ease-out hover:scale-105"
        />
      </div>
      <p className="mt-4 font-sans text-[18px] font-medium not-italic text-black/80">
        {name}
      </p>
      <p className="mt-1 font-script text-[16px] font-semibold not-italic text-black/55">
        {role}
      </p>
    </div>
  );
}

export function TeamSection() {
  return (
    <section id="team-section" className="py-12 md:py-16 lg:py-20">
      <div className="container mx-auto text-center px-6">
        <p className="italic font-script text-[18px]">Orang-Orang Kunci</p>
        <h2 className="mt-3 font-sans text-[30px] font-medium tracking-[3.5px] uppercase">
          Tim Terbaik Kami
        </h2>
      </div>
      <div className="container mx-auto mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 px-6">
        {TEAM_MEMBERS.map((member, index) => (
          <TeamCard key={member.name} {...member} delayMs={index * 120} />
        ))}
      </div>
    </section>
  );
}
