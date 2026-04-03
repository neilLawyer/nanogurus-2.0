"use client";
import { motion } from "framer-motion";
import type { Mentor } from "@/data/stemConnections";
import PlaceholderAvatar from "./PlaceholderAvatar";
import Image from "next/image";

export default function MentorCard({
  mentor,
  index = 0,
}: {
  mentor: Mentor;
  index?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="bg-[#141414] border border-[#1F1F1F] rounded-2xl p-6 flex items-start gap-4 card-hover gold-border-hover"
    >
      <div className="flex-shrink-0">
        {mentor.image ? (
          <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#2A2A2A]">
            <Image src={mentor.image} alt={mentor.name} width={64} height={64} className="object-cover w-full h-full" />
          </div>
        ) : (
          <PlaceholderAvatar size="md" name={mentor.name} />
        )}
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="font-semibold text-[#F9F9F7] text-base">{mentor.name}</h3>
        <p className="text-gold text-xs font-semibold uppercase tracking-wider mt-0.5">{mentor.title}</p>
        <p className="text-[#6B7280] text-xs mt-1">{mentor.organization}</p>
        {mentor.bio ? (
          <p className="text-[#9CA3AF] text-xs mt-2 leading-relaxed">{mentor.bio}</p>
        ) : (
          <span className="mt-2 inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-widest bg-gold/10 text-gold border border-gold/20">
            Bio coming soon
          </span>
        )}
      </div>
    </motion.div>
  );
}
