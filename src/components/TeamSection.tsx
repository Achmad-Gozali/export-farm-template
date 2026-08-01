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
    role: "Founder & owner",
  },
  {
    image: "/images/team-sam-jack.jpeg",
    name: "Sam Jack",
    role: "Harvester",
  },
  {
    image: "/images/team-nick-jon.jpeg",
    name: "Nick Jon",
    role: "Farmer",
  },
  {
    image: "/images/team-mark-ten.jpeg",
    name: "Mark Ten",
    role: "Harvester",
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
      <Image
        src={image}
        alt={name}
        width={280}
        height={280}
        className="w-full aspect-square object-cover"
      />
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
        <p className="italic font-script text-[18px]">Key People</p>
        <h2 className="mt-3 font-sans text-[30px] font-medium tracking-[3.5px] uppercase">
          Our Best Team
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
