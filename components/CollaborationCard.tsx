"use client";
import { motion } from "framer-motion";
import type { CollaborationTeam } from "@/data/collaborations";
import PlaceholderImage from "./PlaceholderImage";
import Image from "next/image";

export default function CollaborationCard({
  team,
  index = 0,
}: {
  team: CollaborationTeam;
  index?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-[#141414] border border-[#1F1F1F] rounded-2xl overflow-hidden card-hover gold-border-hover"
    >
      {team.image ? (
        <div className="relative h-44 w-full">
          <Image src={team.image} alt={team.teamName} fill className="object-cover" />
        </div>
      ) : (
        <PlaceholderImage className="h-44 w-full rounded-none" />
      )}
      <div className="p-6">
        <div className="text-4xl font-display text-gold mb-1">{team.teamNumber}</div>
        <h3 className="font-bold text-[#F9F9F7] text-xl mb-3">{team.teamName}</h3>
        {team.description && (
          <p className="text-[#9CA3AF] text-sm leading-relaxed mb-4">{team.description}</p>
        )}
        {team.awards.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {team.awards.map((award) => (
              <span
                key={award}
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-bold bg-gold text-black"
              >
                🏆 {award}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}
