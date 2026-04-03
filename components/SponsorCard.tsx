"use client";
import { motion } from "framer-motion";
import type { Sponsor } from "@/data/sponsors";
import Image from "next/image";

export default function SponsorCard({
  sponsor,
  index = 0,
}: {
  sponsor: Sponsor;
  index?: number;
}) {
  const tierStyles = {
    gold: "border-gold/30 bg-gradient-to-br from-[#1A1600] to-[#141414]",
    silver: "border-[#C0C0C0]/20 bg-[#141414]",
    community: "border-[#2A2A2A] bg-[#141414]",
  };
  const tierBadgeStyles = {
    gold: "bg-gold text-black",
    silver: "bg-[#C0C0C0]/20 text-[#C0C0C0]",
    community: "bg-[#2A2A2A] text-[#6B7280]",
  };

  const content = (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      className={`rounded-2xl border p-6 flex flex-col items-center gap-3 card-hover ${tierStyles[sponsor.tier]}`}
    >
      {sponsor.logo ? (
        <div className="relative h-12 w-full max-w-[140px]">
          <Image src={sponsor.logo} alt={sponsor.name} fill className="object-contain" />
        </div>
      ) : (
        <div className="w-full text-center">
          <span className="font-bold text-[#F9F9F7] text-base">{sponsor.name}</span>
        </div>
      )}
      <span
        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-widest ${tierBadgeStyles[sponsor.tier]}`}
      >
        {sponsor.tier}
      </span>
    </motion.div>
  );

  if (sponsor.website) {
    return (
      <a href={sponsor.website} target="_blank" rel="noopener noreferrer" className="block">
        {content}
      </a>
    );
  }
  return content;
}
