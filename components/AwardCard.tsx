"use client";
import { motion } from "framer-motion";
import type { CompetitionResult } from "@/data/awards";
import Image from "next/image";

export default function AwardCard({
  result,
  index = 0,
}: {
  result: CompetitionResult;
  index?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`rounded-2xl overflow-hidden card-hover ${
        result.featured
          ? "bg-gradient-to-br from-[#1A1600] via-[#141414] to-[#1A1400] border border-gold/30"
          : "bg-[#141414] border border-[#1F1F1F] gold-border-hover"
      }`}
    >
      {result.featured && result.image ? (
        <div className="relative h-52 w-full">
          <Image src={result.image} alt={result.eventName} fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] to-transparent" />
        </div>
      ) : result.image ? (
        <div className="relative h-44 w-full">
          <Image src={result.image} alt={result.eventName} fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] to-transparent" />
        </div>
      ) : null}

      <div className="p-6">
        {result.featured && (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-gold text-black mb-4">
            ★ Featured
          </span>
        )}

        <h3
          className={`font-bold leading-snug mb-2 ${
            result.featured ? "text-xl text-[#F9F9F7]" : "text-lg text-[#F9F9F7]"
          }`}
        >
          {result.eventName}
        </h3>

        <div className="flex flex-wrap gap-2 mb-4">
          {result.placement && (
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-gold/10 text-gold border border-gold/20">
              {result.placement}
            </span>
          )}
          {result.teamCount && (
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#1F1F1F] text-[#9CA3AF] border border-[#2A2A2A]">
              {result.teamCount} Teams
            </span>
          )}
        </div>

        {result.awards.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {result.awards.map((award) => (
              <span
                key={award}
                className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold bg-gold text-black"
              >
                🏆 {award}
              </span>
            ))}
          </div>
        )}

        {result.highlights.length > 0 && (
          <ul className="space-y-1.5">
            {result.highlights.map((h, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-[#9CA3AF]">
                <span className="text-gold mt-0.5 flex-shrink-0">→</span>
                {h}
              </li>
            ))}
          </ul>
        )}
      </div>
    </motion.div>
  );
}
